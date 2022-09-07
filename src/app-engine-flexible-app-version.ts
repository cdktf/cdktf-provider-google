// https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineFlexibleAppVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Metadata settings that are supplied to this version to enable beta runtime features.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#beta_settings AppEngineFlexibleAppVersion#beta_settings}
  */
  readonly betaSettings?: { [key: string]: string };
  /**
  * Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#default_expiration AppEngineFlexibleAppVersion#default_expiration}
  */
  readonly defaultExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#delete_service_on_destroy AppEngineFlexibleAppVersion#delete_service_on_destroy}
  */
  readonly deleteServiceOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Environment variables available to the application.  As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#env_variables AppEngineFlexibleAppVersion#env_variables}
  */
  readonly envVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#inbound_services AppEngineFlexibleAppVersion#inbound_services}
  */
  readonly inboundServices?: string[];
  /**
  * Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#instance_class AppEngineFlexibleAppVersion#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Files that match this pattern will not be built into this version. Only applicable for Go runtimes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#nobuild_files_regex AppEngineFlexibleAppVersion#nobuild_files_regex}
  */
  readonly nobuildFilesRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#noop_on_destroy AppEngineFlexibleAppVersion#noop_on_destroy}
  */
  readonly noopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}
  */
  readonly project?: string;
  /**
  * Desired runtime. Example python27.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime AppEngineFlexibleAppVersion#runtime}
  */
  readonly runtime: string;
  /**
  * The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime_api_version AppEngineFlexibleAppVersion#runtime_api_version}
  */
  readonly runtimeApiVersion?: string;
  /**
  * The channel of the runtime to use. Only available for some runtimes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime_channel AppEngineFlexibleAppVersion#runtime_channel}
  */
  readonly runtimeChannel?: string;
  /**
  * The path or name of the app's main executable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime_main_executable_path AppEngineFlexibleAppVersion#runtime_main_executable_path}
  */
  readonly runtimeMainExecutablePath?: string;
  /**
  * AppEngine service resource. Can contain numbers, letters, and hyphens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#service AppEngineFlexibleAppVersion#service}
  */
  readonly service: string;
  /**
  * Current serving status of this version. Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#serving_status AppEngineFlexibleAppVersion#serving_status}
  */
  readonly servingStatus?: string;
  /**
  * Relative name of the version within the service. For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#version_id AppEngineFlexibleAppVersion#version_id}
  */
  readonly versionId?: string;
  /**
  * api_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#api_config AppEngineFlexibleAppVersion#api_config}
  */
  readonly apiConfig?: AppEngineFlexibleAppVersionApiConfig;
  /**
  * automatic_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#automatic_scaling AppEngineFlexibleAppVersion#automatic_scaling}
  */
  readonly automaticScaling?: AppEngineFlexibleAppVersionAutomaticScaling;
  /**
  * deployment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#deployment AppEngineFlexibleAppVersion#deployment}
  */
  readonly deployment?: AppEngineFlexibleAppVersionDeployment;
  /**
  * endpoints_api_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#endpoints_api_service AppEngineFlexibleAppVersion#endpoints_api_service}
  */
  readonly endpointsApiService?: AppEngineFlexibleAppVersionEndpointsApiService;
  /**
  * entrypoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#entrypoint AppEngineFlexibleAppVersion#entrypoint}
  */
  readonly entrypoint?: AppEngineFlexibleAppVersionEntrypoint;
  /**
  * handlers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#handlers AppEngineFlexibleAppVersion#handlers}
  */
  readonly handlers?: AppEngineFlexibleAppVersionHandlers[] | cdktf.IResolvable;
  /**
  * liveness_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#liveness_check AppEngineFlexibleAppVersion#liveness_check}
  */
  readonly livenessCheck: AppEngineFlexibleAppVersionLivenessCheck;
  /**
  * manual_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#manual_scaling AppEngineFlexibleAppVersion#manual_scaling}
  */
  readonly manualScaling?: AppEngineFlexibleAppVersionManualScaling;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#network AppEngineFlexibleAppVersion#network}
  */
  readonly network?: AppEngineFlexibleAppVersionNetwork;
  /**
  * readiness_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#readiness_check AppEngineFlexibleAppVersion#readiness_check}
  */
  readonly readinessCheck: AppEngineFlexibleAppVersionReadinessCheck;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#resources AppEngineFlexibleAppVersion#resources}
  */
  readonly resources?: AppEngineFlexibleAppVersionResources;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#timeouts AppEngineFlexibleAppVersion#timeouts}
  */
  readonly timeouts?: AppEngineFlexibleAppVersionTimeouts;
  /**
  * vpc_access_connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#vpc_access_connector AppEngineFlexibleAppVersion#vpc_access_connector}
  */
  readonly vpcAccessConnector?: AppEngineFlexibleAppVersionVpcAccessConnector;
}
export interface AppEngineFlexibleAppVersionApiConfig {
  /**
  * Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}
  */
  readonly authFailAction?: string;
  /**
  * Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}
  */
  readonly login?: string;
  /**
  * Path to the script from the application root directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}
  */
  readonly script: string;
  /**
  * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}
  */
  readonly securityLevel?: string;
  /**
  * URL to serve the endpoint at.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#url AppEngineFlexibleAppVersion#url}
  */
  readonly url?: string;
}

export function appEngineFlexibleAppVersionApiConfigToTerraform(struct?: AppEngineFlexibleAppVersionApiConfigOutputReference | AppEngineFlexibleAppVersionApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_fail_action: cdktf.stringToTerraform(struct!.authFailAction),
    login: cdktf.stringToTerraform(struct!.login),
    script: cdktf.stringToTerraform(struct!.script),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class AppEngineFlexibleAppVersionApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailAction = this._authFailAction;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionApiConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authFailAction = undefined;
      this._login = undefined;
      this._script = undefined;
      this._securityLevel = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authFailAction = value.authFailAction;
      this._login = value.login;
      this._script = value.script;
      this._securityLevel = value.securityLevel;
      this._url = value.url;
    }
  }

  // auth_fail_action - computed: false, optional: true, required: false
  private _authFailAction?: string; 
  public get authFailAction() {
    return this.getStringAttribute('auth_fail_action');
  }
  public set authFailAction(value: string) {
    this._authFailAction = value;
  }
  public resetAuthFailAction() {
    this._authFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailActionInput() {
    return this._authFailAction;
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization {
  /**
  * Period of time over which CPU utilization is calculated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#aggregation_window_length AppEngineFlexibleAppVersion#aggregation_window_length}
  */
  readonly aggregationWindowLength?: string;
  /**
  * Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_utilization AppEngineFlexibleAppVersion#target_utilization}
  */
  readonly targetUtilization: number;
}

export function appEngineFlexibleAppVersionAutomaticScalingCpuUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference | AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_window_length: cdktf.stringToTerraform(struct!.aggregationWindowLength),
    target_utilization: cdktf.numberToTerraform(struct!.targetUtilization),
  }
}

export class AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationWindowLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationWindowLength = this._aggregationWindowLength;
    }
    if (this._targetUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUtilization = this._targetUtilization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationWindowLength = undefined;
      this._targetUtilization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationWindowLength = value.aggregationWindowLength;
      this._targetUtilization = value.targetUtilization;
    }
  }

  // aggregation_window_length - computed: false, optional: true, required: false
  private _aggregationWindowLength?: string; 
  public get aggregationWindowLength() {
    return this.getStringAttribute('aggregation_window_length');
  }
  public set aggregationWindowLength(value: string) {
    this._aggregationWindowLength = value;
  }
  public resetAggregationWindowLength() {
    this._aggregationWindowLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationWindowLengthInput() {
    return this._aggregationWindowLength;
  }

  // target_utilization - computed: false, optional: false, required: true
  private _targetUtilization?: number; 
  public get targetUtilization() {
    return this.getNumberAttribute('target_utilization');
  }
  public set targetUtilization(value: number) {
    this._targetUtilization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUtilizationInput() {
    return this._targetUtilization;
  }
}
export interface AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization {
  /**
  * Target bytes read per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_read_bytes_per_second AppEngineFlexibleAppVersion#target_read_bytes_per_second}
  */
  readonly targetReadBytesPerSecond?: number;
  /**
  * Target ops read per seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_read_ops_per_second AppEngineFlexibleAppVersion#target_read_ops_per_second}
  */
  readonly targetReadOpsPerSecond?: number;
  /**
  * Target bytes written per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_write_bytes_per_second AppEngineFlexibleAppVersion#target_write_bytes_per_second}
  */
  readonly targetWriteBytesPerSecond?: number;
  /**
  * Target ops written per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_write_ops_per_second AppEngineFlexibleAppVersion#target_write_ops_per_second}
  */
  readonly targetWriteOpsPerSecond?: number;
}

export function appEngineFlexibleAppVersionAutomaticScalingDiskUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference | AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_read_bytes_per_second: cdktf.numberToTerraform(struct!.targetReadBytesPerSecond),
    target_read_ops_per_second: cdktf.numberToTerraform(struct!.targetReadOpsPerSecond),
    target_write_bytes_per_second: cdktf.numberToTerraform(struct!.targetWriteBytesPerSecond),
    target_write_ops_per_second: cdktf.numberToTerraform(struct!.targetWriteOpsPerSecond),
  }
}

export class AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetReadBytesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReadBytesPerSecond = this._targetReadBytesPerSecond;
    }
    if (this._targetReadOpsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReadOpsPerSecond = this._targetReadOpsPerSecond;
    }
    if (this._targetWriteBytesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWriteBytesPerSecond = this._targetWriteBytesPerSecond;
    }
    if (this._targetWriteOpsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWriteOpsPerSecond = this._targetWriteOpsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetReadBytesPerSecond = undefined;
      this._targetReadOpsPerSecond = undefined;
      this._targetWriteBytesPerSecond = undefined;
      this._targetWriteOpsPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetReadBytesPerSecond = value.targetReadBytesPerSecond;
      this._targetReadOpsPerSecond = value.targetReadOpsPerSecond;
      this._targetWriteBytesPerSecond = value.targetWriteBytesPerSecond;
      this._targetWriteOpsPerSecond = value.targetWriteOpsPerSecond;
    }
  }

  // target_read_bytes_per_second - computed: false, optional: true, required: false
  private _targetReadBytesPerSecond?: number; 
  public get targetReadBytesPerSecond() {
    return this.getNumberAttribute('target_read_bytes_per_second');
  }
  public set targetReadBytesPerSecond(value: number) {
    this._targetReadBytesPerSecond = value;
  }
  public resetTargetReadBytesPerSecond() {
    this._targetReadBytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReadBytesPerSecondInput() {
    return this._targetReadBytesPerSecond;
  }

  // target_read_ops_per_second - computed: false, optional: true, required: false
  private _targetReadOpsPerSecond?: number; 
  public get targetReadOpsPerSecond() {
    return this.getNumberAttribute('target_read_ops_per_second');
  }
  public set targetReadOpsPerSecond(value: number) {
    this._targetReadOpsPerSecond = value;
  }
  public resetTargetReadOpsPerSecond() {
    this._targetReadOpsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReadOpsPerSecondInput() {
    return this._targetReadOpsPerSecond;
  }

  // target_write_bytes_per_second - computed: false, optional: true, required: false
  private _targetWriteBytesPerSecond?: number; 
  public get targetWriteBytesPerSecond() {
    return this.getNumberAttribute('target_write_bytes_per_second');
  }
  public set targetWriteBytesPerSecond(value: number) {
    this._targetWriteBytesPerSecond = value;
  }
  public resetTargetWriteBytesPerSecond() {
    this._targetWriteBytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWriteBytesPerSecondInput() {
    return this._targetWriteBytesPerSecond;
  }

  // target_write_ops_per_second - computed: false, optional: true, required: false
  private _targetWriteOpsPerSecond?: number; 
  public get targetWriteOpsPerSecond() {
    return this.getNumberAttribute('target_write_ops_per_second');
  }
  public set targetWriteOpsPerSecond(value: number) {
    this._targetWriteOpsPerSecond = value;
  }
  public resetTargetWriteOpsPerSecond() {
    this._targetWriteOpsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWriteOpsPerSecondInput() {
    return this._targetWriteOpsPerSecond;
  }
}
export interface AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization {
  /**
  * Target bytes received per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_received_bytes_per_second AppEngineFlexibleAppVersion#target_received_bytes_per_second}
  */
  readonly targetReceivedBytesPerSecond?: number;
  /**
  * Target packets received per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_received_packets_per_second AppEngineFlexibleAppVersion#target_received_packets_per_second}
  */
  readonly targetReceivedPacketsPerSecond?: number;
  /**
  * Target bytes sent per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_sent_bytes_per_second AppEngineFlexibleAppVersion#target_sent_bytes_per_second}
  */
  readonly targetSentBytesPerSecond?: number;
  /**
  * Target packets sent per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_sent_packets_per_second AppEngineFlexibleAppVersion#target_sent_packets_per_second}
  */
  readonly targetSentPacketsPerSecond?: number;
}

export function appEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference | AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_received_bytes_per_second: cdktf.numberToTerraform(struct!.targetReceivedBytesPerSecond),
    target_received_packets_per_second: cdktf.numberToTerraform(struct!.targetReceivedPacketsPerSecond),
    target_sent_bytes_per_second: cdktf.numberToTerraform(struct!.targetSentBytesPerSecond),
    target_sent_packets_per_second: cdktf.numberToTerraform(struct!.targetSentPacketsPerSecond),
  }
}

export class AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetReceivedBytesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReceivedBytesPerSecond = this._targetReceivedBytesPerSecond;
    }
    if (this._targetReceivedPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReceivedPacketsPerSecond = this._targetReceivedPacketsPerSecond;
    }
    if (this._targetSentBytesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSentBytesPerSecond = this._targetSentBytesPerSecond;
    }
    if (this._targetSentPacketsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSentPacketsPerSecond = this._targetSentPacketsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetReceivedBytesPerSecond = undefined;
      this._targetReceivedPacketsPerSecond = undefined;
      this._targetSentBytesPerSecond = undefined;
      this._targetSentPacketsPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetReceivedBytesPerSecond = value.targetReceivedBytesPerSecond;
      this._targetReceivedPacketsPerSecond = value.targetReceivedPacketsPerSecond;
      this._targetSentBytesPerSecond = value.targetSentBytesPerSecond;
      this._targetSentPacketsPerSecond = value.targetSentPacketsPerSecond;
    }
  }

  // target_received_bytes_per_second - computed: false, optional: true, required: false
  private _targetReceivedBytesPerSecond?: number; 
  public get targetReceivedBytesPerSecond() {
    return this.getNumberAttribute('target_received_bytes_per_second');
  }
  public set targetReceivedBytesPerSecond(value: number) {
    this._targetReceivedBytesPerSecond = value;
  }
  public resetTargetReceivedBytesPerSecond() {
    this._targetReceivedBytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReceivedBytesPerSecondInput() {
    return this._targetReceivedBytesPerSecond;
  }

  // target_received_packets_per_second - computed: false, optional: true, required: false
  private _targetReceivedPacketsPerSecond?: number; 
  public get targetReceivedPacketsPerSecond() {
    return this.getNumberAttribute('target_received_packets_per_second');
  }
  public set targetReceivedPacketsPerSecond(value: number) {
    this._targetReceivedPacketsPerSecond = value;
  }
  public resetTargetReceivedPacketsPerSecond() {
    this._targetReceivedPacketsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReceivedPacketsPerSecondInput() {
    return this._targetReceivedPacketsPerSecond;
  }

  // target_sent_bytes_per_second - computed: false, optional: true, required: false
  private _targetSentBytesPerSecond?: number; 
  public get targetSentBytesPerSecond() {
    return this.getNumberAttribute('target_sent_bytes_per_second');
  }
  public set targetSentBytesPerSecond(value: number) {
    this._targetSentBytesPerSecond = value;
  }
  public resetTargetSentBytesPerSecond() {
    this._targetSentBytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSentBytesPerSecondInput() {
    return this._targetSentBytesPerSecond;
  }

  // target_sent_packets_per_second - computed: false, optional: true, required: false
  private _targetSentPacketsPerSecond?: number; 
  public get targetSentPacketsPerSecond() {
    return this.getNumberAttribute('target_sent_packets_per_second');
  }
  public set targetSentPacketsPerSecond(value: number) {
    this._targetSentPacketsPerSecond = value;
  }
  public resetTargetSentPacketsPerSecond() {
    this._targetSentPacketsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSentPacketsPerSecondInput() {
    return this._targetSentPacketsPerSecond;
  }
}
export interface AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization {
  /**
  * Target number of concurrent requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_concurrent_requests AppEngineFlexibleAppVersion#target_concurrent_requests}
  */
  readonly targetConcurrentRequests?: number;
  /**
  * Target requests per second.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_request_count_per_second AppEngineFlexibleAppVersion#target_request_count_per_second}
  */
  readonly targetRequestCountPerSecond?: string;
}

export function appEngineFlexibleAppVersionAutomaticScalingRequestUtilizationToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference | AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_concurrent_requests: cdktf.numberToTerraform(struct!.targetConcurrentRequests),
    target_request_count_per_second: cdktf.stringToTerraform(struct!.targetRequestCountPerSecond),
  }
}

export class AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetConcurrentRequests = this._targetConcurrentRequests;
    }
    if (this._targetRequestCountPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRequestCountPerSecond = this._targetRequestCountPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetConcurrentRequests = undefined;
      this._targetRequestCountPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetConcurrentRequests = value.targetConcurrentRequests;
      this._targetRequestCountPerSecond = value.targetRequestCountPerSecond;
    }
  }

  // target_concurrent_requests - computed: false, optional: true, required: false
  private _targetConcurrentRequests?: number; 
  public get targetConcurrentRequests() {
    return this.getNumberAttribute('target_concurrent_requests');
  }
  public set targetConcurrentRequests(value: number) {
    this._targetConcurrentRequests = value;
  }
  public resetTargetConcurrentRequests() {
    this._targetConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConcurrentRequestsInput() {
    return this._targetConcurrentRequests;
  }

  // target_request_count_per_second - computed: false, optional: true, required: false
  private _targetRequestCountPerSecond?: string; 
  public get targetRequestCountPerSecond() {
    return this.getStringAttribute('target_request_count_per_second');
  }
  public set targetRequestCountPerSecond(value: string) {
    this._targetRequestCountPerSecond = value;
  }
  public resetTargetRequestCountPerSecond() {
    this._targetRequestCountPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRequestCountPerSecondInput() {
    return this._targetRequestCountPerSecond;
  }
}
export interface AppEngineFlexibleAppVersionAutomaticScaling {
  /**
  * The time period that the Autoscaler should wait before it starts collecting information from a new instance.
This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cool_down_period AppEngineFlexibleAppVersion#cool_down_period}
  */
  readonly coolDownPeriod?: string;
  /**
  * Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_concurrent_requests AppEngineFlexibleAppVersion#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * Maximum number of idle instances that should be maintained for this version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_idle_instances AppEngineFlexibleAppVersion#max_idle_instances}
  */
  readonly maxIdleInstances?: number;
  /**
  * Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_pending_latency AppEngineFlexibleAppVersion#max_pending_latency}
  */
  readonly maxPendingLatency?: string;
  /**
  * Maximum number of instances that should be started to handle requests for this version. Default: 20
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_total_instances AppEngineFlexibleAppVersion#max_total_instances}
  */
  readonly maxTotalInstances?: number;
  /**
  * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#min_idle_instances AppEngineFlexibleAppVersion#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#min_pending_latency AppEngineFlexibleAppVersion#min_pending_latency}
  */
  readonly minPendingLatency?: string;
  /**
  * Minimum number of running instances that should be maintained for this version. Default: 2
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#min_total_instances AppEngineFlexibleAppVersion#min_total_instances}
  */
  readonly minTotalInstances?: number;
  /**
  * cpu_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cpu_utilization AppEngineFlexibleAppVersion#cpu_utilization}
  */
  readonly cpuUtilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
  /**
  * disk_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#disk_utilization AppEngineFlexibleAppVersion#disk_utilization}
  */
  readonly diskUtilization?: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
  /**
  * network_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#network_utilization AppEngineFlexibleAppVersion#network_utilization}
  */
  readonly networkUtilization?: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
  /**
  * request_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#request_utilization AppEngineFlexibleAppVersion#request_utilization}
  */
  readonly requestUtilization?: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
}

export function appEngineFlexibleAppVersionAutomaticScalingToTerraform(struct?: AppEngineFlexibleAppVersionAutomaticScalingOutputReference | AppEngineFlexibleAppVersionAutomaticScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down_period: cdktf.stringToTerraform(struct!.coolDownPeriod),
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    max_idle_instances: cdktf.numberToTerraform(struct!.maxIdleInstances),
    max_pending_latency: cdktf.stringToTerraform(struct!.maxPendingLatency),
    max_total_instances: cdktf.numberToTerraform(struct!.maxTotalInstances),
    min_idle_instances: cdktf.numberToTerraform(struct!.minIdleInstances),
    min_pending_latency: cdktf.stringToTerraform(struct!.minPendingLatency),
    min_total_instances: cdktf.numberToTerraform(struct!.minTotalInstances),
    cpu_utilization: appEngineFlexibleAppVersionAutomaticScalingCpuUtilizationToTerraform(struct!.cpuUtilization),
    disk_utilization: appEngineFlexibleAppVersionAutomaticScalingDiskUtilizationToTerraform(struct!.diskUtilization),
    network_utilization: appEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationToTerraform(struct!.networkUtilization),
    request_utilization: appEngineFlexibleAppVersionAutomaticScalingRequestUtilizationToTerraform(struct!.requestUtilization),
  }
}

export class AppEngineFlexibleAppVersionAutomaticScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionAutomaticScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDownPeriod = this._coolDownPeriod;
    }
    if (this._maxConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRequests = this._maxConcurrentRequests;
    }
    if (this._maxIdleInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleInstances = this._maxIdleInstances;
    }
    if (this._maxPendingLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingLatency = this._maxPendingLatency;
    }
    if (this._maxTotalInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalInstances = this._maxTotalInstances;
    }
    if (this._minIdleInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleInstances = this._minIdleInstances;
    }
    if (this._minPendingLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPendingLatency = this._minPendingLatency;
    }
    if (this._minTotalInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTotalInstances = this._minTotalInstances;
    }
    if (this._cpuUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilization = this._cpuUtilization?.internalValue;
    }
    if (this._diskUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUtilization = this._diskUtilization?.internalValue;
    }
    if (this._networkUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUtilization = this._networkUtilization?.internalValue;
    }
    if (this._requestUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUtilization = this._requestUtilization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionAutomaticScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolDownPeriod = undefined;
      this._maxConcurrentRequests = undefined;
      this._maxIdleInstances = undefined;
      this._maxPendingLatency = undefined;
      this._maxTotalInstances = undefined;
      this._minIdleInstances = undefined;
      this._minPendingLatency = undefined;
      this._minTotalInstances = undefined;
      this._cpuUtilization.internalValue = undefined;
      this._diskUtilization.internalValue = undefined;
      this._networkUtilization.internalValue = undefined;
      this._requestUtilization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolDownPeriod = value.coolDownPeriod;
      this._maxConcurrentRequests = value.maxConcurrentRequests;
      this._maxIdleInstances = value.maxIdleInstances;
      this._maxPendingLatency = value.maxPendingLatency;
      this._maxTotalInstances = value.maxTotalInstances;
      this._minIdleInstances = value.minIdleInstances;
      this._minPendingLatency = value.minPendingLatency;
      this._minTotalInstances = value.minTotalInstances;
      this._cpuUtilization.internalValue = value.cpuUtilization;
      this._diskUtilization.internalValue = value.diskUtilization;
      this._networkUtilization.internalValue = value.networkUtilization;
      this._requestUtilization.internalValue = value.requestUtilization;
    }
  }

  // cool_down_period - computed: false, optional: true, required: false
  private _coolDownPeriod?: string; 
  public get coolDownPeriod() {
    return this.getStringAttribute('cool_down_period');
  }
  public set coolDownPeriod(value: string) {
    this._coolDownPeriod = value;
  }
  public resetCoolDownPeriod() {
    this._coolDownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownPeriodInput() {
    return this._coolDownPeriod;
  }

  // max_concurrent_requests - computed: true, optional: true, required: false
  private _maxConcurrentRequests?: number; 
  public get maxConcurrentRequests() {
    return this.getNumberAttribute('max_concurrent_requests');
  }
  public set maxConcurrentRequests(value: number) {
    this._maxConcurrentRequests = value;
  }
  public resetMaxConcurrentRequests() {
    this._maxConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRequestsInput() {
    return this._maxConcurrentRequests;
  }

  // max_idle_instances - computed: false, optional: true, required: false
  private _maxIdleInstances?: number; 
  public get maxIdleInstances() {
    return this.getNumberAttribute('max_idle_instances');
  }
  public set maxIdleInstances(value: number) {
    this._maxIdleInstances = value;
  }
  public resetMaxIdleInstances() {
    this._maxIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleInstancesInput() {
    return this._maxIdleInstances;
  }

  // max_pending_latency - computed: false, optional: true, required: false
  private _maxPendingLatency?: string; 
  public get maxPendingLatency() {
    return this.getStringAttribute('max_pending_latency');
  }
  public set maxPendingLatency(value: string) {
    this._maxPendingLatency = value;
  }
  public resetMaxPendingLatency() {
    this._maxPendingLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingLatencyInput() {
    return this._maxPendingLatency;
  }

  // max_total_instances - computed: false, optional: true, required: false
  private _maxTotalInstances?: number; 
  public get maxTotalInstances() {
    return this.getNumberAttribute('max_total_instances');
  }
  public set maxTotalInstances(value: number) {
    this._maxTotalInstances = value;
  }
  public resetMaxTotalInstances() {
    this._maxTotalInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalInstancesInput() {
    return this._maxTotalInstances;
  }

  // min_idle_instances - computed: false, optional: true, required: false
  private _minIdleInstances?: number; 
  public get minIdleInstances() {
    return this.getNumberAttribute('min_idle_instances');
  }
  public set minIdleInstances(value: number) {
    this._minIdleInstances = value;
  }
  public resetMinIdleInstances() {
    this._minIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleInstancesInput() {
    return this._minIdleInstances;
  }

  // min_pending_latency - computed: false, optional: true, required: false
  private _minPendingLatency?: string; 
  public get minPendingLatency() {
    return this.getStringAttribute('min_pending_latency');
  }
  public set minPendingLatency(value: string) {
    this._minPendingLatency = value;
  }
  public resetMinPendingLatency() {
    this._minPendingLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPendingLatencyInput() {
    return this._minPendingLatency;
  }

  // min_total_instances - computed: false, optional: true, required: false
  private _minTotalInstances?: number; 
  public get minTotalInstances() {
    return this.getNumberAttribute('min_total_instances');
  }
  public set minTotalInstances(value: number) {
    this._minTotalInstances = value;
  }
  public resetMinTotalInstances() {
    this._minTotalInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTotalInstancesInput() {
    return this._minTotalInstances;
  }

  // cpu_utilization - computed: false, optional: false, required: true
  private _cpuUtilization = new AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(this, "cpu_utilization");
  public get cpuUtilization() {
    return this._cpuUtilization;
  }
  public putCpuUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization) {
    this._cpuUtilization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationInput() {
    return this._cpuUtilization.internalValue;
  }

  // disk_utilization - computed: false, optional: true, required: false
  private _diskUtilization = new AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(this, "disk_utilization");
  public get diskUtilization() {
    return this._diskUtilization;
  }
  public putDiskUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization) {
    this._diskUtilization.internalValue = value;
  }
  public resetDiskUtilization() {
    this._diskUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUtilizationInput() {
    return this._diskUtilization.internalValue;
  }

  // network_utilization - computed: false, optional: true, required: false
  private _networkUtilization = new AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(this, "network_utilization");
  public get networkUtilization() {
    return this._networkUtilization;
  }
  public putNetworkUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization) {
    this._networkUtilization.internalValue = value;
  }
  public resetNetworkUtilization() {
    this._networkUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUtilizationInput() {
    return this._networkUtilization.internalValue;
  }

  // request_utilization - computed: false, optional: true, required: false
  private _requestUtilization = new AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(this, "request_utilization");
  public get requestUtilization() {
    return this._requestUtilization;
  }
  public putRequestUtilization(value: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization) {
    this._requestUtilization.internalValue = value;
  }
  public resetRequestUtilization() {
    this._requestUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUtilizationInput() {
    return this._requestUtilization.internalValue;
  }
}
export interface AppEngineFlexibleAppVersionDeploymentCloudBuildOptions {
  /**
  * Path to the yaml file used in deployment, used to determine runtime configuration details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#app_yaml_path AppEngineFlexibleAppVersion#app_yaml_path}
  */
  readonly appYamlPath: string;
  /**
  * The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cloud_build_timeout AppEngineFlexibleAppVersion#cloud_build_timeout}
  */
  readonly cloudBuildTimeout?: string;
}

export function appEngineFlexibleAppVersionDeploymentCloudBuildOptionsToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference | AppEngineFlexibleAppVersionDeploymentCloudBuildOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_yaml_path: cdktf.stringToTerraform(struct!.appYamlPath),
    cloud_build_timeout: cdktf.stringToTerraform(struct!.cloudBuildTimeout),
  }
}

export class AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionDeploymentCloudBuildOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appYamlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.appYamlPath = this._appYamlPath;
    }
    if (this._cloudBuildTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudBuildTimeout = this._cloudBuildTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appYamlPath = undefined;
      this._cloudBuildTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appYamlPath = value.appYamlPath;
      this._cloudBuildTimeout = value.cloudBuildTimeout;
    }
  }

  // app_yaml_path - computed: false, optional: false, required: true
  private _appYamlPath?: string; 
  public get appYamlPath() {
    return this.getStringAttribute('app_yaml_path');
  }
  public set appYamlPath(value: string) {
    this._appYamlPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appYamlPathInput() {
    return this._appYamlPath;
  }

  // cloud_build_timeout - computed: false, optional: true, required: false
  private _cloudBuildTimeout?: string; 
  public get cloudBuildTimeout() {
    return this.getStringAttribute('cloud_build_timeout');
  }
  public set cloudBuildTimeout(value: string) {
    this._cloudBuildTimeout = value;
  }
  public resetCloudBuildTimeout() {
    this._cloudBuildTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildTimeoutInput() {
    return this._cloudBuildTimeout;
  }
}
export interface AppEngineFlexibleAppVersionDeploymentContainer {
  /**
  * URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#image AppEngineFlexibleAppVersion#image}
  */
  readonly image: string;
}

export function appEngineFlexibleAppVersionDeploymentContainerToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentContainerOutputReference | AppEngineFlexibleAppVersionDeploymentContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
  }
}

export class AppEngineFlexibleAppVersionDeploymentContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionDeploymentContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionDeploymentContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface AppEngineFlexibleAppVersionDeploymentFiles {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * SHA1 checksum of the file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#sha1_sum AppEngineFlexibleAppVersion#sha1_sum}
  */
  readonly sha1Sum?: string;
  /**
  * Source URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

export function appEngineFlexibleAppVersionDeploymentFilesToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sha1_sum: cdktf.stringToTerraform(struct!.sha1Sum),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}

export class AppEngineFlexibleAppVersionDeploymentFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppEngineFlexibleAppVersionDeploymentFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sha1Sum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Sum = this._sha1Sum;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionDeploymentFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sha1Sum = undefined;
      this._sourceUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sha1Sum = value.sha1Sum;
      this._sourceUrl = value.sourceUrl;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sha1_sum - computed: false, optional: true, required: false
  private _sha1Sum?: string; 
  public get sha1Sum() {
    return this.getStringAttribute('sha1_sum');
  }
  public set sha1Sum(value: string) {
    this._sha1Sum = value;
  }
  public resetSha1Sum() {
    this._sha1Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1SumInput() {
    return this._sha1Sum;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }
}

export class AppEngineFlexibleAppVersionDeploymentFilesList extends cdktf.ComplexList {
  public internalValue? : AppEngineFlexibleAppVersionDeploymentFiles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppEngineFlexibleAppVersionDeploymentFilesOutputReference {
    return new AppEngineFlexibleAppVersionDeploymentFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEngineFlexibleAppVersionDeploymentZip {
  /**
  * files count
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#files_count AppEngineFlexibleAppVersion#files_count}
  */
  readonly filesCount?: number;
  /**
  * Source URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

export function appEngineFlexibleAppVersionDeploymentZipToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentZipOutputReference | AppEngineFlexibleAppVersionDeploymentZip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files_count: cdktf.numberToTerraform(struct!.filesCount),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}

export class AppEngineFlexibleAppVersionDeploymentZipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionDeploymentZip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesCount = this._filesCount;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionDeploymentZip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filesCount = undefined;
      this._sourceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filesCount = value.filesCount;
      this._sourceUrl = value.sourceUrl;
    }
  }

  // files_count - computed: false, optional: true, required: false
  private _filesCount?: number; 
  public get filesCount() {
    return this.getNumberAttribute('files_count');
  }
  public set filesCount(value: number) {
    this._filesCount = value;
  }
  public resetFilesCount() {
    this._filesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesCountInput() {
    return this._filesCount;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }
}
export interface AppEngineFlexibleAppVersionDeployment {
  /**
  * cloud_build_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cloud_build_options AppEngineFlexibleAppVersion#cloud_build_options}
  */
  readonly cloudBuildOptions?: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#container AppEngineFlexibleAppVersion#container}
  */
  readonly container?: AppEngineFlexibleAppVersionDeploymentContainer;
  /**
  * files block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#files AppEngineFlexibleAppVersion#files}
  */
  readonly files?: AppEngineFlexibleAppVersionDeploymentFiles[] | cdktf.IResolvable;
  /**
  * zip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#zip AppEngineFlexibleAppVersion#zip}
  */
  readonly zip?: AppEngineFlexibleAppVersionDeploymentZip;
}

export function appEngineFlexibleAppVersionDeploymentToTerraform(struct?: AppEngineFlexibleAppVersionDeploymentOutputReference | AppEngineFlexibleAppVersionDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_build_options: appEngineFlexibleAppVersionDeploymentCloudBuildOptionsToTerraform(struct!.cloudBuildOptions),
    container: appEngineFlexibleAppVersionDeploymentContainerToTerraform(struct!.container),
    files: cdktf.listMapper(appEngineFlexibleAppVersionDeploymentFilesToTerraform, true)(struct!.files),
    zip: appEngineFlexibleAppVersionDeploymentZipToTerraform(struct!.zip),
  }
}

export class AppEngineFlexibleAppVersionDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudBuildOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudBuildOptions = this._cloudBuildOptions?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._zip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudBuildOptions.internalValue = undefined;
      this._container.internalValue = undefined;
      this._files.internalValue = undefined;
      this._zip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudBuildOptions.internalValue = value.cloudBuildOptions;
      this._container.internalValue = value.container;
      this._files.internalValue = value.files;
      this._zip.internalValue = value.zip;
    }
  }

  // cloud_build_options - computed: false, optional: true, required: false
  private _cloudBuildOptions = new AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(this, "cloud_build_options");
  public get cloudBuildOptions() {
    return this._cloudBuildOptions;
  }
  public putCloudBuildOptions(value: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions) {
    this._cloudBuildOptions.internalValue = value;
  }
  public resetCloudBuildOptions() {
    this._cloudBuildOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildOptionsInput() {
    return this._cloudBuildOptions.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new AppEngineFlexibleAppVersionDeploymentContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: AppEngineFlexibleAppVersionDeploymentContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // files - computed: false, optional: true, required: false
  private _files = new AppEngineFlexibleAppVersionDeploymentFilesList(this, "files", true);
  public get files() {
    return this._files;
  }
  public putFiles(value: AppEngineFlexibleAppVersionDeploymentFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // zip - computed: false, optional: true, required: false
  private _zip = new AppEngineFlexibleAppVersionDeploymentZipOutputReference(this, "zip");
  public get zip() {
    return this._zip;
  }
  public putZip(value: AppEngineFlexibleAppVersionDeploymentZip) {
    this._zip.internalValue = value;
  }
  public resetZip() {
    this._zip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip.internalValue;
  }
}
export interface AppEngineFlexibleAppVersionEndpointsApiService {
  /**
  * Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#config_id AppEngineFlexibleAppVersion#config_id}
  */
  readonly configId?: string;
  /**
  * Enable or disable trace sampling. By default, this is set to false for enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#disable_trace_sampling AppEngineFlexibleAppVersion#disable_trace_sampling}
  */
  readonly disableTraceSampling?: boolean | cdktf.IResolvable;
  /**
  * Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * Endpoints rollout strategy. If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#rollout_strategy AppEngineFlexibleAppVersion#rollout_strategy}
  */
  readonly rolloutStrategy?: string;
}

export function appEngineFlexibleAppVersionEndpointsApiServiceToTerraform(struct?: AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference | AppEngineFlexibleAppVersionEndpointsApiService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    disable_trace_sampling: cdktf.booleanToTerraform(struct!.disableTraceSampling),
    name: cdktf.stringToTerraform(struct!.name),
    rollout_strategy: cdktf.stringToTerraform(struct!.rolloutStrategy),
  }
}

export class AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionEndpointsApiService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._disableTraceSampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTraceSampling = this._disableTraceSampling;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rolloutStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutStrategy = this._rolloutStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionEndpointsApiService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configId = undefined;
      this._disableTraceSampling = undefined;
      this._name = undefined;
      this._rolloutStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configId = value.configId;
      this._disableTraceSampling = value.disableTraceSampling;
      this._name = value.name;
      this._rolloutStrategy = value.rolloutStrategy;
    }
  }

  // config_id - computed: false, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // disable_trace_sampling - computed: false, optional: true, required: false
  private _disableTraceSampling?: boolean | cdktf.IResolvable; 
  public get disableTraceSampling() {
    return this.getBooleanAttribute('disable_trace_sampling');
  }
  public set disableTraceSampling(value: boolean | cdktf.IResolvable) {
    this._disableTraceSampling = value;
  }
  public resetDisableTraceSampling() {
    this._disableTraceSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTraceSamplingInput() {
    return this._disableTraceSampling;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rollout_strategy - computed: false, optional: true, required: false
  private _rolloutStrategy?: string; 
  public get rolloutStrategy() {
    return this.getStringAttribute('rollout_strategy');
  }
  public set rolloutStrategy(value: string) {
    this._rolloutStrategy = value;
  }
  public resetRolloutStrategy() {
    this._rolloutStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutStrategyInput() {
    return this._rolloutStrategy;
  }
}
export interface AppEngineFlexibleAppVersionEntrypoint {
  /**
  * The format should be a shell command that can be fed to bash -c.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#shell AppEngineFlexibleAppVersion#shell}
  */
  readonly shell: string;
}

export function appEngineFlexibleAppVersionEntrypointToTerraform(struct?: AppEngineFlexibleAppVersionEntrypointOutputReference | AppEngineFlexibleAppVersionEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}

export class AppEngineFlexibleAppVersionEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionEntrypoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionEntrypoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shell = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shell = value.shell;
    }
  }

  // shell - computed: false, optional: false, required: true
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }
}
export interface AppEngineFlexibleAppVersionHandlersScript {
  /**
  * Path to the script from the application root directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#script_path AppEngineFlexibleAppVersion#script_path}
  */
  readonly scriptPath: string;
}

export function appEngineFlexibleAppVersionHandlersScriptToTerraform(struct?: AppEngineFlexibleAppVersionHandlersScriptOutputReference | AppEngineFlexibleAppVersionHandlersScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
  }
}

export class AppEngineFlexibleAppVersionHandlersScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionHandlersScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionHandlersScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scriptPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scriptPath = value.scriptPath;
    }
  }

  // script_path - computed: false, optional: false, required: true
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }
}
export interface AppEngineFlexibleAppVersionHandlersStaticFiles {
  /**
  * Whether files should also be uploaded as code data. By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#application_readable AppEngineFlexibleAppVersion#application_readable}
  */
  readonly applicationReadable?: boolean | cdktf.IResolvable;
  /**
  * Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#expiration AppEngineFlexibleAppVersion#expiration}
  */
  readonly expiration?: string;
  /**
  * HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#http_headers AppEngineFlexibleAppVersion#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#mime_type AppEngineFlexibleAppVersion#mime_type}
  */
  readonly mimeType?: string;
  /**
  * Path to the static files matched by the URL pattern, from the application root directory.
The path can refer to text matched in groupings in the URL pattern.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}
  */
  readonly path?: string;
  /**
  * Whether this handler should match the request if the file referenced by the handler does not exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#require_matching_file AppEngineFlexibleAppVersion#require_matching_file}
  */
  readonly requireMatchingFile?: boolean | cdktf.IResolvable;
  /**
  * Regular expression that matches the file paths for all files that should be referenced by this handler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#upload_path_regex AppEngineFlexibleAppVersion#upload_path_regex}
  */
  readonly uploadPathRegex?: string;
}

export function appEngineFlexibleAppVersionHandlersStaticFilesToTerraform(struct?: AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference | AppEngineFlexibleAppVersionHandlersStaticFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_readable: cdktf.booleanToTerraform(struct!.applicationReadable),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
    path: cdktf.stringToTerraform(struct!.path),
    require_matching_file: cdktf.booleanToTerraform(struct!.requireMatchingFile),
    upload_path_regex: cdktf.stringToTerraform(struct!.uploadPathRegex),
  }
}

export class AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionHandlersStaticFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationReadable = this._applicationReadable;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requireMatchingFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMatchingFile = this._requireMatchingFile;
    }
    if (this._uploadPathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPathRegex = this._uploadPathRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionHandlersStaticFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationReadable = undefined;
      this._expiration = undefined;
      this._httpHeaders = undefined;
      this._mimeType = undefined;
      this._path = undefined;
      this._requireMatchingFile = undefined;
      this._uploadPathRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationReadable = value.applicationReadable;
      this._expiration = value.expiration;
      this._httpHeaders = value.httpHeaders;
      this._mimeType = value.mimeType;
      this._path = value.path;
      this._requireMatchingFile = value.requireMatchingFile;
      this._uploadPathRegex = value.uploadPathRegex;
    }
  }

  // application_readable - computed: false, optional: true, required: false
  private _applicationReadable?: boolean | cdktf.IResolvable; 
  public get applicationReadable() {
    return this.getBooleanAttribute('application_readable');
  }
  public set applicationReadable(value: boolean | cdktf.IResolvable) {
    this._applicationReadable = value;
  }
  public resetApplicationReadable() {
    this._applicationReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationReadableInput() {
    return this._applicationReadable;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // mime_type - computed: false, optional: true, required: false
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  public resetMimeType() {
    this._mimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // require_matching_file - computed: false, optional: true, required: false
  private _requireMatchingFile?: boolean | cdktf.IResolvable; 
  public get requireMatchingFile() {
    return this.getBooleanAttribute('require_matching_file');
  }
  public set requireMatchingFile(value: boolean | cdktf.IResolvable) {
    this._requireMatchingFile = value;
  }
  public resetRequireMatchingFile() {
    this._requireMatchingFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMatchingFileInput() {
    return this._requireMatchingFile;
  }

  // upload_path_regex - computed: false, optional: true, required: false
  private _uploadPathRegex?: string; 
  public get uploadPathRegex() {
    return this.getStringAttribute('upload_path_regex');
  }
  public set uploadPathRegex(value: string) {
    this._uploadPathRegex = value;
  }
  public resetUploadPathRegex() {
    this._uploadPathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPathRegexInput() {
    return this._uploadPathRegex;
  }
}
export interface AppEngineFlexibleAppVersionHandlers {
  /**
  * Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}
  */
  readonly authFailAction?: string;
  /**
  * Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}
  */
  readonly login?: string;
  /**
  * 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#redirect_http_response_code AppEngineFlexibleAppVersion#redirect_http_response_code}
  */
  readonly redirectHttpResponseCode?: string;
  /**
  * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}
  */
  readonly securityLevel?: string;
  /**
  * URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#url_regex AppEngineFlexibleAppVersion#url_regex}
  */
  readonly urlRegex?: string;
  /**
  * script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}
  */
  readonly script?: AppEngineFlexibleAppVersionHandlersScript;
  /**
  * static_files block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#static_files AppEngineFlexibleAppVersion#static_files}
  */
  readonly staticFiles?: AppEngineFlexibleAppVersionHandlersStaticFiles;
}

export function appEngineFlexibleAppVersionHandlersToTerraform(struct?: AppEngineFlexibleAppVersionHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_fail_action: cdktf.stringToTerraform(struct!.authFailAction),
    login: cdktf.stringToTerraform(struct!.login),
    redirect_http_response_code: cdktf.stringToTerraform(struct!.redirectHttpResponseCode),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    url_regex: cdktf.stringToTerraform(struct!.urlRegex),
    script: appEngineFlexibleAppVersionHandlersScriptToTerraform(struct!.script),
    static_files: appEngineFlexibleAppVersionHandlersStaticFilesToTerraform(struct!.staticFiles),
  }
}

export class AppEngineFlexibleAppVersionHandlersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppEngineFlexibleAppVersionHandlers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailAction = this._authFailAction;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._redirectHttpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpResponseCode = this._redirectHttpResponseCode;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._urlRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRegex = this._urlRegex;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    if (this._staticFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFiles = this._staticFiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionHandlers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authFailAction = undefined;
      this._login = undefined;
      this._redirectHttpResponseCode = undefined;
      this._securityLevel = undefined;
      this._urlRegex = undefined;
      this._script.internalValue = undefined;
      this._staticFiles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authFailAction = value.authFailAction;
      this._login = value.login;
      this._redirectHttpResponseCode = value.redirectHttpResponseCode;
      this._securityLevel = value.securityLevel;
      this._urlRegex = value.urlRegex;
      this._script.internalValue = value.script;
      this._staticFiles.internalValue = value.staticFiles;
    }
  }

  // auth_fail_action - computed: false, optional: true, required: false
  private _authFailAction?: string; 
  public get authFailAction() {
    return this.getStringAttribute('auth_fail_action');
  }
  public set authFailAction(value: string) {
    this._authFailAction = value;
  }
  public resetAuthFailAction() {
    this._authFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailActionInput() {
    return this._authFailAction;
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // redirect_http_response_code - computed: false, optional: true, required: false
  private _redirectHttpResponseCode?: string; 
  public get redirectHttpResponseCode() {
    return this.getStringAttribute('redirect_http_response_code');
  }
  public set redirectHttpResponseCode(value: string) {
    this._redirectHttpResponseCode = value;
  }
  public resetRedirectHttpResponseCode() {
    this._redirectHttpResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpResponseCodeInput() {
    return this._redirectHttpResponseCode;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // url_regex - computed: false, optional: true, required: false
  private _urlRegex?: string; 
  public get urlRegex() {
    return this.getStringAttribute('url_regex');
  }
  public set urlRegex(value: string) {
    this._urlRegex = value;
  }
  public resetUrlRegex() {
    this._urlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRegexInput() {
    return this._urlRegex;
  }

  // script - computed: false, optional: true, required: false
  private _script = new AppEngineFlexibleAppVersionHandlersScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: AppEngineFlexibleAppVersionHandlersScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // static_files - computed: false, optional: true, required: false
  private _staticFiles = new AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(this, "static_files");
  public get staticFiles() {
    return this._staticFiles;
  }
  public putStaticFiles(value: AppEngineFlexibleAppVersionHandlersStaticFiles) {
    this._staticFiles.internalValue = value;
  }
  public resetStaticFiles() {
    this._staticFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFilesInput() {
    return this._staticFiles.internalValue;
  }
}

export class AppEngineFlexibleAppVersionHandlersList extends cdktf.ComplexList {
  public internalValue? : AppEngineFlexibleAppVersionHandlers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppEngineFlexibleAppVersionHandlersOutputReference {
    return new AppEngineFlexibleAppVersionHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEngineFlexibleAppVersionLivenessCheck {
  /**
  * Interval between health checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}
  */
  readonly checkInterval?: string;
  /**
  * Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}
  */
  readonly host?: string;
  /**
  * The initial delay before starting to execute the checks. Default: "300s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#initial_delay AppEngineFlexibleAppVersion#initial_delay}
  */
  readonly initialDelay?: string;
  /**
  * The request path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}
  */
  readonly path: string;
  /**
  * Number of consecutive successful checks required before considering the VM healthy. Default: 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Time before the check is considered failed. Default: "4s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}
  */
  readonly timeout?: string;
}

export function appEngineFlexibleAppVersionLivenessCheckToTerraform(struct?: AppEngineFlexibleAppVersionLivenessCheckOutputReference | AppEngineFlexibleAppVersionLivenessCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_interval: cdktf.stringToTerraform(struct!.checkInterval),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    host: cdktf.stringToTerraform(struct!.host),
    initial_delay: cdktf.stringToTerraform(struct!.initialDelay),
    path: cdktf.stringToTerraform(struct!.path),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class AppEngineFlexibleAppVersionLivenessCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionLivenessCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInterval = this._checkInterval;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionLivenessCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkInterval = undefined;
      this._failureThreshold = undefined;
      this._host = undefined;
      this._initialDelay = undefined;
      this._path = undefined;
      this._successThreshold = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkInterval = value.checkInterval;
      this._failureThreshold = value.failureThreshold;
      this._host = value.host;
      this._initialDelay = value.initialDelay;
      this._path = value.path;
      this._successThreshold = value.successThreshold;
      this._timeout = value.timeout;
    }
  }

  // check_interval - computed: false, optional: true, required: false
  private _checkInterval?: string; 
  public get checkInterval() {
    return this.getStringAttribute('check_interval');
  }
  public set checkInterval(value: string) {
    this._checkInterval = value;
  }
  public resetCheckInterval() {
    this._checkInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // initial_delay - computed: false, optional: true, required: false
  private _initialDelay?: string; 
  public get initialDelay() {
    return this.getStringAttribute('initial_delay');
  }
  public set initialDelay(value: string) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppEngineFlexibleAppVersionManualScaling {
  /**
  * Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#instances AppEngineFlexibleAppVersion#instances}
  */
  readonly instances: number;
}

export function appEngineFlexibleAppVersionManualScalingToTerraform(struct?: AppEngineFlexibleAppVersionManualScalingOutputReference | AppEngineFlexibleAppVersionManualScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.numberToTerraform(struct!.instances),
  }
}

export class AppEngineFlexibleAppVersionManualScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionManualScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionManualScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instances = value.instances;
    }
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }
}
export interface AppEngineFlexibleAppVersionNetwork {
  /**
  * List of ports, or port pairs, to forward from the virtual machine to the application container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#forwarded_ports AppEngineFlexibleAppVersion#forwarded_ports}
  */
  readonly forwardedPorts?: string[];
  /**
  * Tag to apply to the instance during creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#instance_tag AppEngineFlexibleAppVersion#instance_tag}
  */
  readonly instanceTag?: string;
  /**
  * Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * Enable session affinity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#session_affinity AppEngineFlexibleAppVersion#session_affinity}
  */
  readonly sessionAffinity?: boolean | cdktf.IResolvable;
  /**
  * Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#subnetwork AppEngineFlexibleAppVersion#subnetwork}
  */
  readonly subnetwork?: string;
}

export function appEngineFlexibleAppVersionNetworkToTerraform(struct?: AppEngineFlexibleAppVersionNetworkOutputReference | AppEngineFlexibleAppVersionNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarded_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardedPorts),
    instance_tag: cdktf.stringToTerraform(struct!.instanceTag),
    name: cdktf.stringToTerraform(struct!.name),
    session_affinity: cdktf.booleanToTerraform(struct!.sessionAffinity),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}

export class AppEngineFlexibleAppVersionNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardedPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedPorts = this._forwardedPorts;
    }
    if (this._instanceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTag = this._instanceTag;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardedPorts = undefined;
      this._instanceTag = undefined;
      this._name = undefined;
      this._sessionAffinity = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardedPorts = value.forwardedPorts;
      this._instanceTag = value.instanceTag;
      this._name = value.name;
      this._sessionAffinity = value.sessionAffinity;
      this._subnetwork = value.subnetwork;
    }
  }

  // forwarded_ports - computed: false, optional: true, required: false
  private _forwardedPorts?: string[]; 
  public get forwardedPorts() {
    return this.getListAttribute('forwarded_ports');
  }
  public set forwardedPorts(value: string[]) {
    this._forwardedPorts = value;
  }
  public resetForwardedPorts() {
    this._forwardedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedPortsInput() {
    return this._forwardedPorts;
  }

  // instance_tag - computed: false, optional: true, required: false
  private _instanceTag?: string; 
  public get instanceTag() {
    return this.getStringAttribute('instance_tag');
  }
  public set instanceTag(value: string) {
    this._instanceTag = value;
  }
  public resetInstanceTag() {
    this._instanceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTagInput() {
    return this._instanceTag;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: boolean | cdktf.IResolvable; 
  public get sessionAffinity() {
    return this.getBooleanAttribute('session_affinity');
  }
  public set sessionAffinity(value: boolean | cdktf.IResolvable) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface AppEngineFlexibleAppVersionReadinessCheck {
  /**
  * A maximum time limit on application initialization, measured from moment the application successfully
replies to a healthcheck until it is ready to serve traffic. Default: "300s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#app_start_timeout AppEngineFlexibleAppVersion#app_start_timeout}
  */
  readonly appStartTimeout?: string;
  /**
  * Interval between health checks.  Default: "5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}
  */
  readonly checkInterval?: string;
  /**
  * Number of consecutive failed checks required before removing traffic. Default: 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}
  */
  readonly host?: string;
  /**
  * The request path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}
  */
  readonly path: string;
  /**
  * Number of consecutive successful checks required before receiving traffic. Default: 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Time before the check is considered failed. Default: "4s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}
  */
  readonly timeout?: string;
}

export function appEngineFlexibleAppVersionReadinessCheckToTerraform(struct?: AppEngineFlexibleAppVersionReadinessCheckOutputReference | AppEngineFlexibleAppVersionReadinessCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_start_timeout: cdktf.stringToTerraform(struct!.appStartTimeout),
    check_interval: cdktf.stringToTerraform(struct!.checkInterval),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class AppEngineFlexibleAppVersionReadinessCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionReadinessCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appStartTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.appStartTimeout = this._appStartTimeout;
    }
    if (this._checkInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInterval = this._checkInterval;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionReadinessCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appStartTimeout = undefined;
      this._checkInterval = undefined;
      this._failureThreshold = undefined;
      this._host = undefined;
      this._path = undefined;
      this._successThreshold = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appStartTimeout = value.appStartTimeout;
      this._checkInterval = value.checkInterval;
      this._failureThreshold = value.failureThreshold;
      this._host = value.host;
      this._path = value.path;
      this._successThreshold = value.successThreshold;
      this._timeout = value.timeout;
    }
  }

  // app_start_timeout - computed: false, optional: true, required: false
  private _appStartTimeout?: string; 
  public get appStartTimeout() {
    return this.getStringAttribute('app_start_timeout');
  }
  public set appStartTimeout(value: string) {
    this._appStartTimeout = value;
  }
  public resetAppStartTimeout() {
    this._appStartTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appStartTimeoutInput() {
    return this._appStartTimeout;
  }

  // check_interval - computed: false, optional: true, required: false
  private _checkInterval?: string; 
  public get checkInterval() {
    return this.getStringAttribute('check_interval');
  }
  public set checkInterval(value: string) {
    this._checkInterval = value;
  }
  public resetCheckInterval() {
    this._checkInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface AppEngineFlexibleAppVersionResourcesVolumes {
  /**
  * Unique name for the volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
  /**
  * Volume size in gigabytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#size_gb AppEngineFlexibleAppVersion#size_gb}
  */
  readonly sizeGb: number;
  /**
  * Underlying volume type, e.g. 'tmpfs'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#volume_type AppEngineFlexibleAppVersion#volume_type}
  */
  readonly volumeType: string;
}

export function appEngineFlexibleAppVersionResourcesVolumesToTerraform(struct?: AppEngineFlexibleAppVersionResourcesVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class AppEngineFlexibleAppVersionResourcesVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppEngineFlexibleAppVersionResourcesVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionResourcesVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sizeGb = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sizeGb = value.sizeGb;
      this._volumeType = value.volumeType;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class AppEngineFlexibleAppVersionResourcesVolumesList extends cdktf.ComplexList {
  public internalValue? : AppEngineFlexibleAppVersionResourcesVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppEngineFlexibleAppVersionResourcesVolumesOutputReference {
    return new AppEngineFlexibleAppVersionResourcesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEngineFlexibleAppVersionResources {
  /**
  * Number of CPU cores needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cpu AppEngineFlexibleAppVersion#cpu}
  */
  readonly cpu?: number;
  /**
  * Disk size (GB) needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#disk_gb AppEngineFlexibleAppVersion#disk_gb}
  */
  readonly diskGb?: number;
  /**
  * Memory (GB) needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#memory_gb AppEngineFlexibleAppVersion#memory_gb}
  */
  readonly memoryGb?: number;
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#volumes AppEngineFlexibleAppVersion#volumes}
  */
  readonly volumes?: AppEngineFlexibleAppVersionResourcesVolumes[] | cdktf.IResolvable;
}

export function appEngineFlexibleAppVersionResourcesToTerraform(struct?: AppEngineFlexibleAppVersionResourcesOutputReference | AppEngineFlexibleAppVersionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_gb: cdktf.numberToTerraform(struct!.diskGb),
    memory_gb: cdktf.numberToTerraform(struct!.memoryGb),
    volumes: cdktf.listMapper(appEngineFlexibleAppVersionResourcesVolumesToTerraform, true)(struct!.volumes),
  }
}

export class AppEngineFlexibleAppVersionResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGb = this._diskGb;
    }
    if (this._memoryGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGb = this._memoryGb;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskGb = undefined;
      this._memoryGb = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskGb = value.diskGb;
      this._memoryGb = value.memoryGb;
      this._volumes.internalValue = value.volumes;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_gb - computed: false, optional: true, required: false
  private _diskGb?: number; 
  public get diskGb() {
    return this.getNumberAttribute('disk_gb');
  }
  public set diskGb(value: number) {
    this._diskGb = value;
  }
  public resetDiskGb() {
    this._diskGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbInput() {
    return this._diskGb;
  }

  // memory_gb - computed: false, optional: true, required: false
  private _memoryGb?: number; 
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }
  public set memoryGb(value: number) {
    this._memoryGb = value;
  }
  public resetMemoryGb() {
    this._memoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGbInput() {
    return this._memoryGb;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new AppEngineFlexibleAppVersionResourcesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: AppEngineFlexibleAppVersionResourcesVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface AppEngineFlexibleAppVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}
  */
  readonly update?: string;
}

export function appEngineFlexibleAppVersionTimeoutsToTerraform(struct?: AppEngineFlexibleAppVersionTimeoutsOutputReference | AppEngineFlexibleAppVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AppEngineFlexibleAppVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface AppEngineFlexibleAppVersionVpcAccessConnector {
  /**
  * Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}
  */
  readonly name: string;
}

export function appEngineFlexibleAppVersionVpcAccessConnectorToTerraform(struct?: AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference | AppEngineFlexibleAppVersionVpcAccessConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineFlexibleAppVersionVpcAccessConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineFlexibleAppVersionVpcAccessConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version google_app_engine_flexible_app_version}
*/
export class AppEngineFlexibleAppVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_flexible_app_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version google_app_engine_flexible_app_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineFlexibleAppVersionConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineFlexibleAppVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_flexible_app_version',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._betaSettings = config.betaSettings;
    this._defaultExpiration = config.defaultExpiration;
    this._deleteServiceOnDestroy = config.deleteServiceOnDestroy;
    this._envVariables = config.envVariables;
    this._id = config.id;
    this._inboundServices = config.inboundServices;
    this._instanceClass = config.instanceClass;
    this._nobuildFilesRegex = config.nobuildFilesRegex;
    this._noopOnDestroy = config.noopOnDestroy;
    this._project = config.project;
    this._runtime = config.runtime;
    this._runtimeApiVersion = config.runtimeApiVersion;
    this._runtimeChannel = config.runtimeChannel;
    this._runtimeMainExecutablePath = config.runtimeMainExecutablePath;
    this._service = config.service;
    this._servingStatus = config.servingStatus;
    this._versionId = config.versionId;
    this._apiConfig.internalValue = config.apiConfig;
    this._automaticScaling.internalValue = config.automaticScaling;
    this._deployment.internalValue = config.deployment;
    this._endpointsApiService.internalValue = config.endpointsApiService;
    this._entrypoint.internalValue = config.entrypoint;
    this._handlers.internalValue = config.handlers;
    this._livenessCheck.internalValue = config.livenessCheck;
    this._manualScaling.internalValue = config.manualScaling;
    this._network.internalValue = config.network;
    this._readinessCheck.internalValue = config.readinessCheck;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
    this._vpcAccessConnector.internalValue = config.vpcAccessConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beta_settings - computed: false, optional: true, required: false
  private _betaSettings?: { [key: string]: string }; 
  public get betaSettings() {
    return this.getStringMapAttribute('beta_settings');
  }
  public set betaSettings(value: { [key: string]: string }) {
    this._betaSettings = value;
  }
  public resetBetaSettings() {
    this._betaSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaSettingsInput() {
    return this._betaSettings;
  }

  // default_expiration - computed: false, optional: true, required: false
  private _defaultExpiration?: string; 
  public get defaultExpiration() {
    return this.getStringAttribute('default_expiration');
  }
  public set defaultExpiration(value: string) {
    this._defaultExpiration = value;
  }
  public resetDefaultExpiration() {
    this._defaultExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpirationInput() {
    return this._defaultExpiration;
  }

  // delete_service_on_destroy - computed: false, optional: true, required: false
  private _deleteServiceOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteServiceOnDestroy() {
    return this.getBooleanAttribute('delete_service_on_destroy');
  }
  public set deleteServiceOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteServiceOnDestroy = value;
  }
  public resetDeleteServiceOnDestroy() {
    this._deleteServiceOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteServiceOnDestroyInput() {
    return this._deleteServiceOnDestroy;
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string }; 
  public get envVariables() {
    return this.getStringMapAttribute('env_variables');
  }
  public set envVariables(value: { [key: string]: string }) {
    this._envVariables = value;
  }
  public resetEnvVariables() {
    this._envVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesInput() {
    return this._envVariables;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inbound_services - computed: false, optional: true, required: false
  private _inboundServices?: string[]; 
  public get inboundServices() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_services'));
  }
  public set inboundServices(value: string[]) {
    this._inboundServices = value;
  }
  public resetInboundServices() {
    this._inboundServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundServicesInput() {
    return this._inboundServices;
  }

  // instance_class - computed: false, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nobuild_files_regex - computed: false, optional: true, required: false
  private _nobuildFilesRegex?: string; 
  public get nobuildFilesRegex() {
    return this.getStringAttribute('nobuild_files_regex');
  }
  public set nobuildFilesRegex(value: string) {
    this._nobuildFilesRegex = value;
  }
  public resetNobuildFilesRegex() {
    this._nobuildFilesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nobuildFilesRegexInput() {
    return this._nobuildFilesRegex;
  }

  // noop_on_destroy - computed: false, optional: true, required: false
  private _noopOnDestroy?: boolean | cdktf.IResolvable; 
  public get noopOnDestroy() {
    return this.getBooleanAttribute('noop_on_destroy');
  }
  public set noopOnDestroy(value: boolean | cdktf.IResolvable) {
    this._noopOnDestroy = value;
  }
  public resetNoopOnDestroy() {
    this._noopOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noopOnDestroyInput() {
    return this._noopOnDestroy;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // runtime_api_version - computed: true, optional: true, required: false
  private _runtimeApiVersion?: string; 
  public get runtimeApiVersion() {
    return this.getStringAttribute('runtime_api_version');
  }
  public set runtimeApiVersion(value: string) {
    this._runtimeApiVersion = value;
  }
  public resetRuntimeApiVersion() {
    this._runtimeApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeApiVersionInput() {
    return this._runtimeApiVersion;
  }

  // runtime_channel - computed: false, optional: true, required: false
  private _runtimeChannel?: string; 
  public get runtimeChannel() {
    return this.getStringAttribute('runtime_channel');
  }
  public set runtimeChannel(value: string) {
    this._runtimeChannel = value;
  }
  public resetRuntimeChannel() {
    this._runtimeChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeChannelInput() {
    return this._runtimeChannel;
  }

  // runtime_main_executable_path - computed: false, optional: true, required: false
  private _runtimeMainExecutablePath?: string; 
  public get runtimeMainExecutablePath() {
    return this.getStringAttribute('runtime_main_executable_path');
  }
  public set runtimeMainExecutablePath(value: string) {
    this._runtimeMainExecutablePath = value;
  }
  public resetRuntimeMainExecutablePath() {
    this._runtimeMainExecutablePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeMainExecutablePathInput() {
    return this._runtimeMainExecutablePath;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // serving_status - computed: false, optional: true, required: false
  private _servingStatus?: string; 
  public get servingStatus() {
    return this.getStringAttribute('serving_status');
  }
  public set servingStatus(value: string) {
    this._servingStatus = value;
  }
  public resetServingStatus() {
    this._servingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingStatusInput() {
    return this._servingStatus;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig = new AppEngineFlexibleAppVersionApiConfigOutputReference(this, "api_config");
  public get apiConfig() {
    return this._apiConfig;
  }
  public putApiConfig(value: AppEngineFlexibleAppVersionApiConfig) {
    this._apiConfig.internalValue = value;
  }
  public resetApiConfig() {
    this._apiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigInput() {
    return this._apiConfig.internalValue;
  }

  // automatic_scaling - computed: false, optional: true, required: false
  private _automaticScaling = new AppEngineFlexibleAppVersionAutomaticScalingOutputReference(this, "automatic_scaling");
  public get automaticScaling() {
    return this._automaticScaling;
  }
  public putAutomaticScaling(value: AppEngineFlexibleAppVersionAutomaticScaling) {
    this._automaticScaling.internalValue = value;
  }
  public resetAutomaticScaling() {
    this._automaticScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticScalingInput() {
    return this._automaticScaling.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new AppEngineFlexibleAppVersionDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: AppEngineFlexibleAppVersionDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // endpoints_api_service - computed: false, optional: true, required: false
  private _endpointsApiService = new AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(this, "endpoints_api_service");
  public get endpointsApiService() {
    return this._endpointsApiService;
  }
  public putEndpointsApiService(value: AppEngineFlexibleAppVersionEndpointsApiService) {
    this._endpointsApiService.internalValue = value;
  }
  public resetEndpointsApiService() {
    this._endpointsApiService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsApiServiceInput() {
    return this._endpointsApiService.internalValue;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint = new AppEngineFlexibleAppVersionEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }
  public putEntrypoint(value: AppEngineFlexibleAppVersionEntrypoint) {
    this._entrypoint.internalValue = value;
  }
  public resetEntrypoint() {
    this._entrypoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint.internalValue;
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers = new AppEngineFlexibleAppVersionHandlersList(this, "handlers", false);
  public get handlers() {
    return this._handlers;
  }
  public putHandlers(value: AppEngineFlexibleAppVersionHandlers[] | cdktf.IResolvable) {
    this._handlers.internalValue = value;
  }
  public resetHandlers() {
    this._handlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlersInput() {
    return this._handlers.internalValue;
  }

  // liveness_check - computed: false, optional: false, required: true
  private _livenessCheck = new AppEngineFlexibleAppVersionLivenessCheckOutputReference(this, "liveness_check");
  public get livenessCheck() {
    return this._livenessCheck;
  }
  public putLivenessCheck(value: AppEngineFlexibleAppVersionLivenessCheck) {
    this._livenessCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessCheckInput() {
    return this._livenessCheck.internalValue;
  }

  // manual_scaling - computed: false, optional: true, required: false
  private _manualScaling = new AppEngineFlexibleAppVersionManualScalingOutputReference(this, "manual_scaling");
  public get manualScaling() {
    return this._manualScaling;
  }
  public putManualScaling(value: AppEngineFlexibleAppVersionManualScaling) {
    this._manualScaling.internalValue = value;
  }
  public resetManualScaling() {
    this._manualScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualScalingInput() {
    return this._manualScaling.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AppEngineFlexibleAppVersionNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AppEngineFlexibleAppVersionNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // readiness_check - computed: false, optional: false, required: true
  private _readinessCheck = new AppEngineFlexibleAppVersionReadinessCheckOutputReference(this, "readiness_check");
  public get readinessCheck() {
    return this._readinessCheck;
  }
  public putReadinessCheck(value: AppEngineFlexibleAppVersionReadinessCheck) {
    this._readinessCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessCheckInput() {
    return this._readinessCheck.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new AppEngineFlexibleAppVersionResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: AppEngineFlexibleAppVersionResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineFlexibleAppVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineFlexibleAppVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_access_connector - computed: false, optional: true, required: false
  private _vpcAccessConnector = new AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(this, "vpc_access_connector");
  public get vpcAccessConnector() {
    return this._vpcAccessConnector;
  }
  public putVpcAccessConnector(value: AppEngineFlexibleAppVersionVpcAccessConnector) {
    this._vpcAccessConnector.internalValue = value;
  }
  public resetVpcAccessConnector() {
    this._vpcAccessConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessConnectorInput() {
    return this._vpcAccessConnector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      beta_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._betaSettings),
      default_expiration: cdktf.stringToTerraform(this._defaultExpiration),
      delete_service_on_destroy: cdktf.booleanToTerraform(this._deleteServiceOnDestroy),
      env_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._envVariables),
      id: cdktf.stringToTerraform(this._id),
      inbound_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundServices),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      nobuild_files_regex: cdktf.stringToTerraform(this._nobuildFilesRegex),
      noop_on_destroy: cdktf.booleanToTerraform(this._noopOnDestroy),
      project: cdktf.stringToTerraform(this._project),
      runtime: cdktf.stringToTerraform(this._runtime),
      runtime_api_version: cdktf.stringToTerraform(this._runtimeApiVersion),
      runtime_channel: cdktf.stringToTerraform(this._runtimeChannel),
      runtime_main_executable_path: cdktf.stringToTerraform(this._runtimeMainExecutablePath),
      service: cdktf.stringToTerraform(this._service),
      serving_status: cdktf.stringToTerraform(this._servingStatus),
      version_id: cdktf.stringToTerraform(this._versionId),
      api_config: appEngineFlexibleAppVersionApiConfigToTerraform(this._apiConfig.internalValue),
      automatic_scaling: appEngineFlexibleAppVersionAutomaticScalingToTerraform(this._automaticScaling.internalValue),
      deployment: appEngineFlexibleAppVersionDeploymentToTerraform(this._deployment.internalValue),
      endpoints_api_service: appEngineFlexibleAppVersionEndpointsApiServiceToTerraform(this._endpointsApiService.internalValue),
      entrypoint: appEngineFlexibleAppVersionEntrypointToTerraform(this._entrypoint.internalValue),
      handlers: cdktf.listMapper(appEngineFlexibleAppVersionHandlersToTerraform, true)(this._handlers.internalValue),
      liveness_check: appEngineFlexibleAppVersionLivenessCheckToTerraform(this._livenessCheck.internalValue),
      manual_scaling: appEngineFlexibleAppVersionManualScalingToTerraform(this._manualScaling.internalValue),
      network: appEngineFlexibleAppVersionNetworkToTerraform(this._network.internalValue),
      readiness_check: appEngineFlexibleAppVersionReadinessCheckToTerraform(this._readinessCheck.internalValue),
      resources: appEngineFlexibleAppVersionResourcesToTerraform(this._resources.internalValue),
      timeouts: appEngineFlexibleAppVersionTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_access_connector: appEngineFlexibleAppVersionVpcAccessConnectorToTerraform(this._vpcAccessConnector.internalValue),
    };
  }
}
