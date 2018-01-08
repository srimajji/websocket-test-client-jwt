import React from "react";
import { Feed, Icon } from "semantic-ui-react";

const NotificationFeed = ({ notifications = Array }) => {
    return (
        <Feed>
            {notifications.length &&
                notifications.map((notification, key) => {
                    return (
                        <Feed.Event key={key}>
                            <Feed.Label>
                                <img src="/assets/elliot.jpg" />
                            </Feed.Label>
                            <Feed.Content>
                                <Feed.Summary>
                                    <Feed.User>{notification.user.name}</Feed.User>
                                    &nbsp;{notification.notification.class}
                                    <Feed.Date>{notification.notification.dateCreated}</Feed.Date>
                                </Feed.Summary>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name="like" />
                                        4 Likes
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                    );
                })}
        </Feed>
    );
};
// <Feed>
//     <Feed.Event>
//         <Feed.Label>
//             <img src="/assets/elliot.jpg" />
//         </Feed.Label>
//         <Feed.Content>
//             <Feed.Summary>
//                 <Feed.User>Elliot Fu</Feed.User> added you as a friend
//                 <Feed.Date>1 Hour Ago</Feed.Date>
//             </Feed.Summary>
//             <Feed.Meta>
//                 <Feed.Like>
//                     <Icon name="like" />
//                     4 Likes
//                 </Feed.Like>
//             </Feed.Meta>
//         </Feed.Content>
//     </Feed.Event>

//     <Feed.Event>
//         <Feed.Label image="/assets/helen.jpg" />
//         <Feed.Content>
//             <Feed.Summary>
//                 <a>Helen Troy</a> added <a>2 new illustrations</a>
//                 <Feed.Date>4 days ago</Feed.Date>
//             </Feed.Summary>
//             <Feed.Extra images>
//                 <a>
//                     <img src="/assets/image.png" />
//                 </a>
//                 <a>
//                     <img src="/assets/image.png" />
//                 </a>
//             </Feed.Extra>
//             <Feed.Meta>
//                 <Feed.Like>
//                     <Icon name="like" />
//                     1 Like
//                 </Feed.Like>
//             </Feed.Meta>
//         </Feed.Content>
//     </Feed.Event>
// </Feed>

export default NotificationFeed;
