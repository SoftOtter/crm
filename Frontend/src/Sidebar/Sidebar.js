import React from 'react';
import './sidebar-style.css';
import AsideModeButtons from './AsideModeButtons/AsideModeButtons';
import Messages from './Messages/Messages';
import AllMessagesButton from './AllMessagesButton/AllMessagesButton';
import { TabsForSidebar } from '../UI kit/tabsForSidebar/TabsForSidebar';
import { Svg } from '../icons/Svg/Svg';

class Sidebar extends React.Component {
    render() {
        return (
            <aside>
                {/* Tablet view aside */}
                <div className='mini-aside'>
                    <svg width="32" height="144" viewBox="0 0 32 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8C0 5.79086 1.79086 4 4 4H32V140H4C1.79086 140 0 138.209 0 136V8Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M25 3.98688V4H25.5H32V0H31.9603C31.6011 2.24998 28.8457 4 25.5 4C25.3318 4 25.165 3.99558 25 3.98688Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M25 140.013V140H25.5H32V144H31.9603C31.6011 141.75 28.8457 140 25.5 140C25.3318 140 25.165 140.004 25 140.013Z" fill="white"/>
                            </svg>
                    
                    <div className="buttons">
                        <input className="aside-button" type="radio" id="mini-messages" name="aside-button" value="messages"/>
                        <label htmlFor="mini-messages" className="btn-messages">
                            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 16 16" xmlSpace="preserve">
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path className="st0" d="M2.4,12.5c-0.3,0-0.5-0.2-0.5-0.5V4c0-0.3,0.2-0.5,0.5-0.5h12c0.3,0,0.5,0.2,0.5,0.5v8
                                                        c0,0.3-0.2,0.5-0.5,0.5H2.4z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M14.4,4v8h-12V4H14.4 M14.4,3h-12c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V4C15.4,3.4,15,3,14.4,3
                                                        L14.4,3z"/>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <polyline className="st0" points="2.4,4 8.4,8 14.4,4 			"/>
                                            </g>
                                            <g>
                                                <polygon points="8.4,8.6 2.1,4.4 2.7,3.6 8.4,7.4 14.1,3.6 14.7,4.4 			"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="1.3" y="9" transform="matrix(0.7144 -0.6997 0.6997 0.7144 -5.2767 6.1005)" width="7" height="1"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <rect x="11.5" y="6.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.2262 11.2409)" width="1" height="6.9"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path className="st1" d="M11.4,6"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                        </label>
                        
                        <input className="aside-button" type="radio" id="mini-tasks" name="aside-button" value="tasks" />
                        <label htmlFor="mini-tasks" className="btn-tasks">
                            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 16 16" xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path d="M13.5,2h-12c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h8.4c0-0.3,0-0.7,0-1H1.5V3h12v5.6c0.4,0.2,0.7,0.4,1,0.8V3
                                                    C14.5,2.4,14.1,2,13.5,2z"/>
                                            </g>
                                            <g>
                                                <g>
                                                    <path className="st3" d="M3,3.5"/>
                                                </g>
                                                <g>
                                                    <polygon points="3.5,1 2.5,1 2.5,4 3.5,4 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="1.5" y="5" className="st3" width="12" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="13.5,5 1.5,5 1.5,6 13.5,6 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path className="st3" d="M12,3.5"/>
                                                </g>
                                                <g>
                                                    <polygon points="12.5,1 11.5,1 11.5,4 12.5,4 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="2.5" y="7" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="3.5,7 2.5,7 2.5,8 3.5,8 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="2.5" y="9" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="3.5,9 2.5,9 2.5,10 3.5,10 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="2.5" y="11" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="3.5,11 2.5,11 2.5,12 3.5,12 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="4.5" y="7" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="5.5,7 4.5,7 4.5,8 5.5,8 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="4.5" y="9" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="5.5,9 4.5,9 4.5,10 5.5,10 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="4.5" y="11" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="5.5,11 4.5,11 4.5,12 5.5,12 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="6.5" y="7" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="7.5,7 6.5,7 6.5,8 7.5,8 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="8.5" y="7" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="9.5,7 8.5,7 8.5,8 9.5,8 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="6.5" y="9" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="7.5,9 6.5,9 6.5,10 7.5,10 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <rect x="6.5" y="11" className="st3" width="1" height="1"/>
                                                </g>
                                                <g>
                                                    <polygon points="7.5,11 6.5,11 6.5,12 7.5,12 			"/>
                                                </g>
                                            </g>
                                            <g>
                                                <path className="st1" d="M13.9,9.5"/>
                                            </g>
                                            <g>
                                                <g>
                                                    <circle className="st2" cx="12" cy="11.5" r="3"/>
                                                </g>
                                                <g>
                                                    <path d="M12,9c1.4,0,2.5,1.1,2.5,2.5S13.4,14,12,14s-2.5-1.1-2.5-2.5S10.6,9,12,9 M12,8c-1.9,0-3.5,1.6-3.5,3.5S10.1,15,12,15
                                                        s3.5-1.6,3.5-3.5S13.9,8,12,8L12,8z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <polygon points="12.6,12.9 11.5,11.7 11.5,10 12.5,10 12.5,11.3 13.4,12.1 		"/>
                                            </g>
                                        </g>
                                        </svg>
                        </label>
                        
                        <input className="aside-button" type="radio" id="mini-notifications" name="aside-button" value="notifications" />
                        <label htmlFor="mini-notifications" className="btn-notifications">
                            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 16 16" xmlSpace="preserve">
                                        <path d="M13.8898115,11.9523315l-0.9364624-1.5485229c-0.4081421-0.6756592-0.6238403-1.4489746-0.6238403-2.2363281V6.8109741
                                            c0-1.6604004-1.0155029-3.0876465-2.4611816-3.7086182V2.3564453c0-0.8876953-0.722168-1.6103516-1.6103516-1.6103516
                                            S6.6476235,1.46875,6.6476235,2.3564453V3.102417C5.2020669,3.7234497,4.186564,5.1506348,4.186564,6.8109741v1.3565063
                                            c0,0.7874146-0.215698,1.56073-0.623718,2.2362061l-0.9361572,1.5480347
                                            c-0.0981445,0.1612549-0.1010742,0.3635864-0.0073853,0.5283813c0.093689,0.1640625,0.2698975,0.2659912,0.4599609,0.2659912
                                            h2.8784788c0.1600342,1.1314697,1.1253662,2.0078125,2.3005986,2.0078125s2.1400757-0.8763428,2.3001099-2.0078125h2.878418
                                            c0.1900024,0,0.366272-0.1019287,0.460144-0.2664185C13.9905195,12.3153076,13.9875898,12.1129761,13.8898115,11.9523315z
                                            M7.6476235,2.3564453c0-0.3369141,0.2739258-0.6103516,0.610352-0.6103516c0.3364258,0,0.6103516,0.2734375,0.6103516,0.6103516
                                            v0.4744873C8.6677656,2.8006592,8.467021,2.7696533,8.2580366,2.7696533c-0.2090454,0-0.4097905,0.0310059-0.6104131,0.0612793
                                            V2.3564453z M8.2583418,13.7539063c-0.6200566,0-1.119019-0.4337158-1.2676396-1.0078125h2.5348516
                                            C9.3769331,13.3201904,8.8779707,13.7539063,8.2583418,13.7539063z M3.9196575,11.7460938l0.4992063-0.8253784
                                            C4.921061,10.0891724,5.186564,9.137085,5.186564,8.1674805V6.8109741c0-1.677002,1.3778687-3.0413208,3.0714726-3.0413208
                                            s3.0714722,1.3643188,3.0714722,3.0413208v1.3565063c0,0.9696045,0.2655029,1.9216919,0.7681274,2.7538452l0.4987793,0.8247681
                                            H3.9196575z"/>
                                        </svg>
                            <div className='indicator-icon active'></div>
                        </label>
                    </div>
                </div>

                <div className='aside'>
                    <TabsForSidebar className = {'tabsPlacement'} />

                    <Messages />
                    
                    <AllMessagesButton />
                </div>
            </aside>
        );
    }
}

export default Sidebar;