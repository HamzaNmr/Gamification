import React from "react";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Col } from 'react-grid-system';


//another way to apply confirmation alert 
    // use those before return and in return> in click use {handleRedeem}

    // const handleRedeem = (reward) => {
    //   confirmAlert({
    //     title: "Redeem?",
    //     message: 'Are you sure to redeem this reward from your balance?',
    //     buttons: [
    //       {
    //         label: 'Yes',
    //         onClick: () => alert('added to your rewards')
    //       },
    //       {
    //         label: 'No',
    //       }
    //     ]
    //   });
    // };


const handleRedeem = (reward) => {

    confirmAlert({

        customUI: ({ onClose }) => {

            return (
                <Col lg={12} md={8} sm={6} xs={6} className="react-confirm-alert-body">
                    <h2 className="rewardWarnningTitle">Redeem {reward.rewardName}?</h2>
                    <p>Are you sure want to redeem this reward from your balance?</p>
                    <div className="react-confirm-alert-button-group">
                        <button
                            id="btn-confirm-redeem"
                            className="btn-confirm-redeem"
                            onClick={() => {
                                alert('added to your rewards')
                                // this.redeemReward(reward.Id);
                                onClose();
                            }}
                        >
                            Redeem Now!
                        </button>
                        <button className="btn-dismiss-redeem" onClick={onClose}>Dismiss</button>

                    </div>
                </Col>
            );
        }
    });

}

export default handleRedeem;

//once it did not work leave it and do another function for redeem without confirmation

//Once a user redeems a reward:
   //1. icon reward color changes
   //2. coins should be updated setPoints and {updated in BE}
   //3. btn redeem should be invisible
   //4. {add the reward to the logged in user in DB BE}

//when you get all rewards and the rewards gained by the user logged in dont forget to
    //1. make sure that icon color changes and btn reddem is invisible for the rewards already gained
    //2.make sure that the balance coins is get from DB and up to date


// Hurry UP no more time to waste
