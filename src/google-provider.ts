// https://www.terraform.io/docs/providers/google
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}
  */
  readonly accessApprovalCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}
  */
  readonly accessContextManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_token GoogleProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}
  */
  readonly activeDirectoryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}
  */
  readonly apigeeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}
  */
  readonly appEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}
  */
  readonly assuredWorkloadsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}
  */
  readonly bigQueryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}
  */
  readonly bigqueryDataTransferCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}
  */
  readonly bigqueryReservationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}
  */
  readonly bigtableCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}
  */
  readonly billingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#billing_project GoogleProvider#billing_project}
  */
  readonly billingProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}
  */
  readonly binaryAuthorizationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}
  */
  readonly cloudAssetCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}
  */
  readonly cloudBillingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}
  */
  readonly cloudBuildCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}
  */
  readonly cloudFunctionsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}
  */
  readonly cloudIdentityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_iot_custom_endpoint GoogleProvider#cloud_iot_custom_endpoint}
  */
  readonly cloudIotCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}
  */
  readonly cloudResourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}
  */
  readonly cloudRunCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}
  */
  readonly cloudSchedulerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}
  */
  readonly cloudTasksCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}
  */
  readonly composerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#compute_beta_custom_endpoint GoogleProvider#compute_beta_custom_endpoint}
  */
  readonly computeBetaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}
  */
  readonly computeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}
  */
  readonly containerAnalysisCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_beta_custom_endpoint GoogleProvider#container_beta_custom_endpoint}
  */
  readonly containerBetaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_custom_endpoint GoogleProvider#container_custom_endpoint}
  */
  readonly containerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#credentials GoogleProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}
  */
  readonly dataCatalogCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}
  */
  readonly dataLossPreventionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}
  */
  readonly dataflowCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataproc_beta_custom_endpoint GoogleProvider#dataproc_beta_custom_endpoint}
  */
  readonly dataprocBetaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}
  */
  readonly dataprocCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}
  */
  readonly datastoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}
  */
  readonly deploymentManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}
  */
  readonly dialogflowCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}
  */
  readonly dialogflowCxCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}
  */
  readonly dnsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}
  */
  readonly essentialContactsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}
  */
  readonly eventarcCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}
  */
  readonly filestoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}
  */
  readonly firestoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#game_services_custom_endpoint GoogleProvider#game_services_custom_endpoint}
  */
  readonly gameServicesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}
  */
  readonly gkeHubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}
  */
  readonly gkehubFeatureCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}
  */
  readonly healthcareCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}
  */
  readonly iamCredentialsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}
  */
  readonly iamCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}
  */
  readonly iapCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}
  */
  readonly identityPlatformCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#impersonate_service_account GoogleProvider#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}
  */
  readonly impersonateServiceAccountDelegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}
  */
  readonly kmsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}
  */
  readonly loggingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}
  */
  readonly memcacheCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}
  */
  readonly mlEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}
  */
  readonly monitoringCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}
  */
  readonly networkManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}
  */
  readonly networkServicesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}
  */
  readonly notebooksCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}
  */
  readonly orgPolicyCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}
  */
  readonly osConfigCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}
  */
  readonly osLoginCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}
  */
  readonly privatecaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#project GoogleProvider#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}
  */
  readonly pubsubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}
  */
  readonly pubsubLiteCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}
  */
  readonly redisCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#region GoogleProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#request_reason GoogleProvider#request_reason}
  */
  readonly requestReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#request_timeout GoogleProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}
  */
  readonly resourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#resource_manager_v2_custom_endpoint GoogleProvider#resource_manager_v2_custom_endpoint}
  */
  readonly resourceManagerV2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#runtime_config_custom_endpoint GoogleProvider#runtime_config_custom_endpoint}
  */
  readonly runtimeConfigCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#runtimeconfig_custom_endpoint GoogleProvider#runtimeconfig_custom_endpoint}
  */
  readonly runtimeconfigCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#scopes GoogleProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}
  */
  readonly secretManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}
  */
  readonly securityCenterCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}
  */
  readonly serviceManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}
  */
  readonly serviceNetworkingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}
  */
  readonly serviceUsageCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}
  */
  readonly sourceRepoCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}
  */
  readonly spannerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}
  */
  readonly sqlCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}
  */
  readonly storageCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}
  */
  readonly storageTransferCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}
  */
  readonly tagsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}
  */
  readonly tpuCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#user_project_override GoogleProvider#user_project_override}
  */
  readonly userProjectOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}
  */
  readonly vertexAiCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}
  */
  readonly vpcAccessCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}
  */
  readonly workflowsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#zone GoogleProvider#zone}
  */
  readonly zone?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#alias GoogleProvider#alias}
  */
  readonly alias?: string;
  /**
  * batching block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#batching GoogleProvider#batching}
  */
  readonly batching?: GoogleProviderBatching;
}
export interface GoogleProviderBatching {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#enable_batching GoogleProvider#enable_batching}
  */
  readonly enableBatching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#send_after GoogleProvider#send_after}
  */
  readonly sendAfter?: string;
}

function googleProviderBatchingToTerraform(struct?: GoogleProviderBatchingOutputReference | GoogleProviderBatching): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_batching: cdktf.booleanToTerraform(struct!.enableBatching),
    send_after: cdktf.stringToTerraform(struct!.sendAfter),
  }
}

export class GoogleProviderBatchingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_batching - computed: false, optional: true, required: false
  private _enableBatching?: boolean | cdktf.IResolvable | undefined; 
  public get enableBatching() {
    return this._enableBatching;
  }
  public set enableBatching(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._enableBatching = value;
  }
  public resetEnableBatching() {
    this._enableBatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchingInput() {
    return this._enableBatching
  }

  // send_after - computed: false, optional: true, required: false
  private _sendAfter?: string | undefined; 
  public get sendAfter() {
    return this._sendAfter;
  }
  public set sendAfter(value: string | undefined| undefined) {
    this._sendAfter = value;
  }
  public resetSendAfter() {
    this._sendAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAfterInput() {
    return this._sendAfter
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google google}
*/
export class GoogleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google google} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'google'
    });
    this._accessApprovalCustomEndpoint = config.accessApprovalCustomEndpoint;
    this._accessContextManagerCustomEndpoint = config.accessContextManagerCustomEndpoint;
    this._accessToken = config.accessToken;
    this._activeDirectoryCustomEndpoint = config.activeDirectoryCustomEndpoint;
    this._apigeeCustomEndpoint = config.apigeeCustomEndpoint;
    this._appEngineCustomEndpoint = config.appEngineCustomEndpoint;
    this._assuredWorkloadsCustomEndpoint = config.assuredWorkloadsCustomEndpoint;
    this._bigQueryCustomEndpoint = config.bigQueryCustomEndpoint;
    this._bigqueryDataTransferCustomEndpoint = config.bigqueryDataTransferCustomEndpoint;
    this._bigqueryReservationCustomEndpoint = config.bigqueryReservationCustomEndpoint;
    this._bigtableCustomEndpoint = config.bigtableCustomEndpoint;
    this._billingCustomEndpoint = config.billingCustomEndpoint;
    this._billingProject = config.billingProject;
    this._binaryAuthorizationCustomEndpoint = config.binaryAuthorizationCustomEndpoint;
    this._cloudAssetCustomEndpoint = config.cloudAssetCustomEndpoint;
    this._cloudBillingCustomEndpoint = config.cloudBillingCustomEndpoint;
    this._cloudBuildCustomEndpoint = config.cloudBuildCustomEndpoint;
    this._cloudFunctionsCustomEndpoint = config.cloudFunctionsCustomEndpoint;
    this._cloudIdentityCustomEndpoint = config.cloudIdentityCustomEndpoint;
    this._cloudIotCustomEndpoint = config.cloudIotCustomEndpoint;
    this._cloudResourceManagerCustomEndpoint = config.cloudResourceManagerCustomEndpoint;
    this._cloudRunCustomEndpoint = config.cloudRunCustomEndpoint;
    this._cloudSchedulerCustomEndpoint = config.cloudSchedulerCustomEndpoint;
    this._cloudTasksCustomEndpoint = config.cloudTasksCustomEndpoint;
    this._composerCustomEndpoint = config.composerCustomEndpoint;
    this._computeBetaCustomEndpoint = config.computeBetaCustomEndpoint;
    this._computeCustomEndpoint = config.computeCustomEndpoint;
    this._containerAnalysisCustomEndpoint = config.containerAnalysisCustomEndpoint;
    this._containerBetaCustomEndpoint = config.containerBetaCustomEndpoint;
    this._containerCustomEndpoint = config.containerCustomEndpoint;
    this._credentials = config.credentials;
    this._dataCatalogCustomEndpoint = config.dataCatalogCustomEndpoint;
    this._dataLossPreventionCustomEndpoint = config.dataLossPreventionCustomEndpoint;
    this._dataflowCustomEndpoint = config.dataflowCustomEndpoint;
    this._dataprocBetaCustomEndpoint = config.dataprocBetaCustomEndpoint;
    this._dataprocCustomEndpoint = config.dataprocCustomEndpoint;
    this._datastoreCustomEndpoint = config.datastoreCustomEndpoint;
    this._deploymentManagerCustomEndpoint = config.deploymentManagerCustomEndpoint;
    this._dialogflowCustomEndpoint = config.dialogflowCustomEndpoint;
    this._dialogflowCxCustomEndpoint = config.dialogflowCxCustomEndpoint;
    this._dnsCustomEndpoint = config.dnsCustomEndpoint;
    this._essentialContactsCustomEndpoint = config.essentialContactsCustomEndpoint;
    this._eventarcCustomEndpoint = config.eventarcCustomEndpoint;
    this._filestoreCustomEndpoint = config.filestoreCustomEndpoint;
    this._firestoreCustomEndpoint = config.firestoreCustomEndpoint;
    this._gameServicesCustomEndpoint = config.gameServicesCustomEndpoint;
    this._gkeHubCustomEndpoint = config.gkeHubCustomEndpoint;
    this._gkehubFeatureCustomEndpoint = config.gkehubFeatureCustomEndpoint;
    this._healthcareCustomEndpoint = config.healthcareCustomEndpoint;
    this._iamCredentialsCustomEndpoint = config.iamCredentialsCustomEndpoint;
    this._iamCustomEndpoint = config.iamCustomEndpoint;
    this._iapCustomEndpoint = config.iapCustomEndpoint;
    this._identityPlatformCustomEndpoint = config.identityPlatformCustomEndpoint;
    this._impersonateServiceAccount = config.impersonateServiceAccount;
    this._impersonateServiceAccountDelegates = config.impersonateServiceAccountDelegates;
    this._kmsCustomEndpoint = config.kmsCustomEndpoint;
    this._loggingCustomEndpoint = config.loggingCustomEndpoint;
    this._memcacheCustomEndpoint = config.memcacheCustomEndpoint;
    this._mlEngineCustomEndpoint = config.mlEngineCustomEndpoint;
    this._monitoringCustomEndpoint = config.monitoringCustomEndpoint;
    this._networkManagementCustomEndpoint = config.networkManagementCustomEndpoint;
    this._networkServicesCustomEndpoint = config.networkServicesCustomEndpoint;
    this._notebooksCustomEndpoint = config.notebooksCustomEndpoint;
    this._orgPolicyCustomEndpoint = config.orgPolicyCustomEndpoint;
    this._osConfigCustomEndpoint = config.osConfigCustomEndpoint;
    this._osLoginCustomEndpoint = config.osLoginCustomEndpoint;
    this._privatecaCustomEndpoint = config.privatecaCustomEndpoint;
    this._project = config.project;
    this._pubsubCustomEndpoint = config.pubsubCustomEndpoint;
    this._pubsubLiteCustomEndpoint = config.pubsubLiteCustomEndpoint;
    this._redisCustomEndpoint = config.redisCustomEndpoint;
    this._region = config.region;
    this._requestReason = config.requestReason;
    this._requestTimeout = config.requestTimeout;
    this._resourceManagerCustomEndpoint = config.resourceManagerCustomEndpoint;
    this._resourceManagerV2CustomEndpoint = config.resourceManagerV2CustomEndpoint;
    this._runtimeConfigCustomEndpoint = config.runtimeConfigCustomEndpoint;
    this._runtimeconfigCustomEndpoint = config.runtimeconfigCustomEndpoint;
    this._scopes = config.scopes;
    this._secretManagerCustomEndpoint = config.secretManagerCustomEndpoint;
    this._securityCenterCustomEndpoint = config.securityCenterCustomEndpoint;
    this._serviceManagementCustomEndpoint = config.serviceManagementCustomEndpoint;
    this._serviceNetworkingCustomEndpoint = config.serviceNetworkingCustomEndpoint;
    this._serviceUsageCustomEndpoint = config.serviceUsageCustomEndpoint;
    this._sourceRepoCustomEndpoint = config.sourceRepoCustomEndpoint;
    this._spannerCustomEndpoint = config.spannerCustomEndpoint;
    this._sqlCustomEndpoint = config.sqlCustomEndpoint;
    this._storageCustomEndpoint = config.storageCustomEndpoint;
    this._storageTransferCustomEndpoint = config.storageTransferCustomEndpoint;
    this._tagsCustomEndpoint = config.tagsCustomEndpoint;
    this._tpuCustomEndpoint = config.tpuCustomEndpoint;
    this._userProjectOverride = config.userProjectOverride;
    this._vertexAiCustomEndpoint = config.vertexAiCustomEndpoint;
    this._vpcAccessCustomEndpoint = config.vpcAccessCustomEndpoint;
    this._workflowsCustomEndpoint = config.workflowsCustomEndpoint;
    this._zone = config.zone;
    this._alias = config.alias;
    this._batching = config.batching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_approval_custom_endpoint - computed: false, optional: true, required: false
  private _accessApprovalCustomEndpoint?: string | undefined; 
  public get accessApprovalCustomEndpoint() {
    return this._accessApprovalCustomEndpoint;
  }
  public set accessApprovalCustomEndpoint(value: string | undefined| undefined) {
    this._accessApprovalCustomEndpoint = value;
  }
  public resetAccessApprovalCustomEndpoint() {
    this._accessApprovalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessApprovalCustomEndpointInput() {
    return this._accessApprovalCustomEndpoint
  }

  // access_context_manager_custom_endpoint - computed: false, optional: true, required: false
  private _accessContextManagerCustomEndpoint?: string | undefined; 
  public get accessContextManagerCustomEndpoint() {
    return this._accessContextManagerCustomEndpoint;
  }
  public set accessContextManagerCustomEndpoint(value: string | undefined| undefined) {
    this._accessContextManagerCustomEndpoint = value;
  }
  public resetAccessContextManagerCustomEndpoint() {
    this._accessContextManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessContextManagerCustomEndpointInput() {
    return this._accessContextManagerCustomEndpoint
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string | undefined; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined| undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
  }

  // active_directory_custom_endpoint - computed: false, optional: true, required: false
  private _activeDirectoryCustomEndpoint?: string | undefined; 
  public get activeDirectoryCustomEndpoint() {
    return this._activeDirectoryCustomEndpoint;
  }
  public set activeDirectoryCustomEndpoint(value: string | undefined| undefined) {
    this._activeDirectoryCustomEndpoint = value;
  }
  public resetActiveDirectoryCustomEndpoint() {
    this._activeDirectoryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryCustomEndpointInput() {
    return this._activeDirectoryCustomEndpoint
  }

  // apigee_custom_endpoint - computed: false, optional: true, required: false
  private _apigeeCustomEndpoint?: string | undefined; 
  public get apigeeCustomEndpoint() {
    return this._apigeeCustomEndpoint;
  }
  public set apigeeCustomEndpoint(value: string | undefined| undefined) {
    this._apigeeCustomEndpoint = value;
  }
  public resetApigeeCustomEndpoint() {
    this._apigeeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeCustomEndpointInput() {
    return this._apigeeCustomEndpoint
  }

  // app_engine_custom_endpoint - computed: false, optional: true, required: false
  private _appEngineCustomEndpoint?: string | undefined; 
  public get appEngineCustomEndpoint() {
    return this._appEngineCustomEndpoint;
  }
  public set appEngineCustomEndpoint(value: string | undefined| undefined) {
    this._appEngineCustomEndpoint = value;
  }
  public resetAppEngineCustomEndpoint() {
    this._appEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineCustomEndpointInput() {
    return this._appEngineCustomEndpoint
  }

  // assured_workloads_custom_endpoint - computed: false, optional: true, required: false
  private _assuredWorkloadsCustomEndpoint?: string | undefined; 
  public get assuredWorkloadsCustomEndpoint() {
    return this._assuredWorkloadsCustomEndpoint;
  }
  public set assuredWorkloadsCustomEndpoint(value: string | undefined| undefined) {
    this._assuredWorkloadsCustomEndpoint = value;
  }
  public resetAssuredWorkloadsCustomEndpoint() {
    this._assuredWorkloadsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuredWorkloadsCustomEndpointInput() {
    return this._assuredWorkloadsCustomEndpoint
  }

  // big_query_custom_endpoint - computed: false, optional: true, required: false
  private _bigQueryCustomEndpoint?: string | undefined; 
  public get bigQueryCustomEndpoint() {
    return this._bigQueryCustomEndpoint;
  }
  public set bigQueryCustomEndpoint(value: string | undefined| undefined) {
    this._bigQueryCustomEndpoint = value;
  }
  public resetBigQueryCustomEndpoint() {
    this._bigQueryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryCustomEndpointInput() {
    return this._bigQueryCustomEndpoint
  }

  // bigquery_data_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDataTransferCustomEndpoint?: string | undefined; 
  public get bigqueryDataTransferCustomEndpoint() {
    return this._bigqueryDataTransferCustomEndpoint;
  }
  public set bigqueryDataTransferCustomEndpoint(value: string | undefined| undefined) {
    this._bigqueryDataTransferCustomEndpoint = value;
  }
  public resetBigqueryDataTransferCustomEndpoint() {
    this._bigqueryDataTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDataTransferCustomEndpointInput() {
    return this._bigqueryDataTransferCustomEndpoint
  }

  // bigquery_reservation_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryReservationCustomEndpoint?: string | undefined; 
  public get bigqueryReservationCustomEndpoint() {
    return this._bigqueryReservationCustomEndpoint;
  }
  public set bigqueryReservationCustomEndpoint(value: string | undefined| undefined) {
    this._bigqueryReservationCustomEndpoint = value;
  }
  public resetBigqueryReservationCustomEndpoint() {
    this._bigqueryReservationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryReservationCustomEndpointInput() {
    return this._bigqueryReservationCustomEndpoint
  }

  // bigtable_custom_endpoint - computed: false, optional: true, required: false
  private _bigtableCustomEndpoint?: string | undefined; 
  public get bigtableCustomEndpoint() {
    return this._bigtableCustomEndpoint;
  }
  public set bigtableCustomEndpoint(value: string | undefined| undefined) {
    this._bigtableCustomEndpoint = value;
  }
  public resetBigtableCustomEndpoint() {
    this._bigtableCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigtableCustomEndpointInput() {
    return this._bigtableCustomEndpoint
  }

  // billing_custom_endpoint - computed: false, optional: true, required: false
  private _billingCustomEndpoint?: string | undefined; 
  public get billingCustomEndpoint() {
    return this._billingCustomEndpoint;
  }
  public set billingCustomEndpoint(value: string | undefined| undefined) {
    this._billingCustomEndpoint = value;
  }
  public resetBillingCustomEndpoint() {
    this._billingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCustomEndpointInput() {
    return this._billingCustomEndpoint
  }

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string | undefined; 
  public get billingProject() {
    return this._billingProject;
  }
  public set billingProject(value: string | undefined| undefined) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject
  }

  // binary_authorization_custom_endpoint - computed: false, optional: true, required: false
  private _binaryAuthorizationCustomEndpoint?: string | undefined; 
  public get binaryAuthorizationCustomEndpoint() {
    return this._binaryAuthorizationCustomEndpoint;
  }
  public set binaryAuthorizationCustomEndpoint(value: string | undefined| undefined) {
    this._binaryAuthorizationCustomEndpoint = value;
  }
  public resetBinaryAuthorizationCustomEndpoint() {
    this._binaryAuthorizationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationCustomEndpointInput() {
    return this._binaryAuthorizationCustomEndpoint
  }

  // cloud_asset_custom_endpoint - computed: false, optional: true, required: false
  private _cloudAssetCustomEndpoint?: string | undefined; 
  public get cloudAssetCustomEndpoint() {
    return this._cloudAssetCustomEndpoint;
  }
  public set cloudAssetCustomEndpoint(value: string | undefined| undefined) {
    this._cloudAssetCustomEndpoint = value;
  }
  public resetCloudAssetCustomEndpoint() {
    this._cloudAssetCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAssetCustomEndpointInput() {
    return this._cloudAssetCustomEndpoint
  }

  // cloud_billing_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBillingCustomEndpoint?: string | undefined; 
  public get cloudBillingCustomEndpoint() {
    return this._cloudBillingCustomEndpoint;
  }
  public set cloudBillingCustomEndpoint(value: string | undefined| undefined) {
    this._cloudBillingCustomEndpoint = value;
  }
  public resetCloudBillingCustomEndpoint() {
    this._cloudBillingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBillingCustomEndpointInput() {
    return this._cloudBillingCustomEndpoint
  }

  // cloud_build_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBuildCustomEndpoint?: string | undefined; 
  public get cloudBuildCustomEndpoint() {
    return this._cloudBuildCustomEndpoint;
  }
  public set cloudBuildCustomEndpoint(value: string | undefined| undefined) {
    this._cloudBuildCustomEndpoint = value;
  }
  public resetCloudBuildCustomEndpoint() {
    this._cloudBuildCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildCustomEndpointInput() {
    return this._cloudBuildCustomEndpoint
  }

  // cloud_functions_custom_endpoint - computed: false, optional: true, required: false
  private _cloudFunctionsCustomEndpoint?: string | undefined; 
  public get cloudFunctionsCustomEndpoint() {
    return this._cloudFunctionsCustomEndpoint;
  }
  public set cloudFunctionsCustomEndpoint(value: string | undefined| undefined) {
    this._cloudFunctionsCustomEndpoint = value;
  }
  public resetCloudFunctionsCustomEndpoint() {
    this._cloudFunctionsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionsCustomEndpointInput() {
    return this._cloudFunctionsCustomEndpoint
  }

  // cloud_identity_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIdentityCustomEndpoint?: string | undefined; 
  public get cloudIdentityCustomEndpoint() {
    return this._cloudIdentityCustomEndpoint;
  }
  public set cloudIdentityCustomEndpoint(value: string | undefined| undefined) {
    this._cloudIdentityCustomEndpoint = value;
  }
  public resetCloudIdentityCustomEndpoint() {
    this._cloudIdentityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdentityCustomEndpointInput() {
    return this._cloudIdentityCustomEndpoint
  }

  // cloud_iot_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIotCustomEndpoint?: string | undefined; 
  public get cloudIotCustomEndpoint() {
    return this._cloudIotCustomEndpoint;
  }
  public set cloudIotCustomEndpoint(value: string | undefined| undefined) {
    this._cloudIotCustomEndpoint = value;
  }
  public resetCloudIotCustomEndpoint() {
    this._cloudIotCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIotCustomEndpointInput() {
    return this._cloudIotCustomEndpoint
  }

  // cloud_resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _cloudResourceManagerCustomEndpoint?: string | undefined; 
  public get cloudResourceManagerCustomEndpoint() {
    return this._cloudResourceManagerCustomEndpoint;
  }
  public set cloudResourceManagerCustomEndpoint(value: string | undefined| undefined) {
    this._cloudResourceManagerCustomEndpoint = value;
  }
  public resetCloudResourceManagerCustomEndpoint() {
    this._cloudResourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceManagerCustomEndpointInput() {
    return this._cloudResourceManagerCustomEndpoint
  }

  // cloud_run_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunCustomEndpoint?: string | undefined; 
  public get cloudRunCustomEndpoint() {
    return this._cloudRunCustomEndpoint;
  }
  public set cloudRunCustomEndpoint(value: string | undefined| undefined) {
    this._cloudRunCustomEndpoint = value;
  }
  public resetCloudRunCustomEndpoint() {
    this._cloudRunCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunCustomEndpointInput() {
    return this._cloudRunCustomEndpoint
  }

  // cloud_scheduler_custom_endpoint - computed: false, optional: true, required: false
  private _cloudSchedulerCustomEndpoint?: string | undefined; 
  public get cloudSchedulerCustomEndpoint() {
    return this._cloudSchedulerCustomEndpoint;
  }
  public set cloudSchedulerCustomEndpoint(value: string | undefined| undefined) {
    this._cloudSchedulerCustomEndpoint = value;
  }
  public resetCloudSchedulerCustomEndpoint() {
    this._cloudSchedulerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSchedulerCustomEndpointInput() {
    return this._cloudSchedulerCustomEndpoint
  }

  // cloud_tasks_custom_endpoint - computed: false, optional: true, required: false
  private _cloudTasksCustomEndpoint?: string | undefined; 
  public get cloudTasksCustomEndpoint() {
    return this._cloudTasksCustomEndpoint;
  }
  public set cloudTasksCustomEndpoint(value: string | undefined| undefined) {
    this._cloudTasksCustomEndpoint = value;
  }
  public resetCloudTasksCustomEndpoint() {
    this._cloudTasksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTasksCustomEndpointInput() {
    return this._cloudTasksCustomEndpoint
  }

  // composer_custom_endpoint - computed: false, optional: true, required: false
  private _composerCustomEndpoint?: string | undefined; 
  public get composerCustomEndpoint() {
    return this._composerCustomEndpoint;
  }
  public set composerCustomEndpoint(value: string | undefined| undefined) {
    this._composerCustomEndpoint = value;
  }
  public resetComposerCustomEndpoint() {
    this._composerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composerCustomEndpointInput() {
    return this._composerCustomEndpoint
  }

  // compute_beta_custom_endpoint - computed: false, optional: true, required: false
  private _computeBetaCustomEndpoint?: string | undefined; 
  public get computeBetaCustomEndpoint() {
    return this._computeBetaCustomEndpoint;
  }
  public set computeBetaCustomEndpoint(value: string | undefined| undefined) {
    this._computeBetaCustomEndpoint = value;
  }
  public resetComputeBetaCustomEndpoint() {
    this._computeBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeBetaCustomEndpointInput() {
    return this._computeBetaCustomEndpoint
  }

  // compute_custom_endpoint - computed: false, optional: true, required: false
  private _computeCustomEndpoint?: string | undefined; 
  public get computeCustomEndpoint() {
    return this._computeCustomEndpoint;
  }
  public set computeCustomEndpoint(value: string | undefined| undefined) {
    this._computeCustomEndpoint = value;
  }
  public resetComputeCustomEndpoint() {
    this._computeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCustomEndpointInput() {
    return this._computeCustomEndpoint
  }

  // container_analysis_custom_endpoint - computed: false, optional: true, required: false
  private _containerAnalysisCustomEndpoint?: string | undefined; 
  public get containerAnalysisCustomEndpoint() {
    return this._containerAnalysisCustomEndpoint;
  }
  public set containerAnalysisCustomEndpoint(value: string | undefined| undefined) {
    this._containerAnalysisCustomEndpoint = value;
  }
  public resetContainerAnalysisCustomEndpoint() {
    this._containerAnalysisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAnalysisCustomEndpointInput() {
    return this._containerAnalysisCustomEndpoint
  }

  // container_beta_custom_endpoint - computed: false, optional: true, required: false
  private _containerBetaCustomEndpoint?: string | undefined; 
  public get containerBetaCustomEndpoint() {
    return this._containerBetaCustomEndpoint;
  }
  public set containerBetaCustomEndpoint(value: string | undefined| undefined) {
    this._containerBetaCustomEndpoint = value;
  }
  public resetContainerBetaCustomEndpoint() {
    this._containerBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBetaCustomEndpointInput() {
    return this._containerBetaCustomEndpoint
  }

  // container_custom_endpoint - computed: false, optional: true, required: false
  private _containerCustomEndpoint?: string | undefined; 
  public get containerCustomEndpoint() {
    return this._containerCustomEndpoint;
  }
  public set containerCustomEndpoint(value: string | undefined| undefined) {
    this._containerCustomEndpoint = value;
  }
  public resetContainerCustomEndpoint() {
    this._containerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCustomEndpointInput() {
    return this._containerCustomEndpoint
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string | undefined; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined| undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // data_catalog_custom_endpoint - computed: false, optional: true, required: false
  private _dataCatalogCustomEndpoint?: string | undefined; 
  public get dataCatalogCustomEndpoint() {
    return this._dataCatalogCustomEndpoint;
  }
  public set dataCatalogCustomEndpoint(value: string | undefined| undefined) {
    this._dataCatalogCustomEndpoint = value;
  }
  public resetDataCatalogCustomEndpoint() {
    this._dataCatalogCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogCustomEndpointInput() {
    return this._dataCatalogCustomEndpoint
  }

  // data_loss_prevention_custom_endpoint - computed: false, optional: true, required: false
  private _dataLossPreventionCustomEndpoint?: string | undefined; 
  public get dataLossPreventionCustomEndpoint() {
    return this._dataLossPreventionCustomEndpoint;
  }
  public set dataLossPreventionCustomEndpoint(value: string | undefined| undefined) {
    this._dataLossPreventionCustomEndpoint = value;
  }
  public resetDataLossPreventionCustomEndpoint() {
    this._dataLossPreventionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLossPreventionCustomEndpointInput() {
    return this._dataLossPreventionCustomEndpoint
  }

  // dataflow_custom_endpoint - computed: false, optional: true, required: false
  private _dataflowCustomEndpoint?: string | undefined; 
  public get dataflowCustomEndpoint() {
    return this._dataflowCustomEndpoint;
  }
  public set dataflowCustomEndpoint(value: string | undefined| undefined) {
    this._dataflowCustomEndpoint = value;
  }
  public resetDataflowCustomEndpoint() {
    this._dataflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowCustomEndpointInput() {
    return this._dataflowCustomEndpoint
  }

  // dataproc_beta_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocBetaCustomEndpoint?: string | undefined; 
  public get dataprocBetaCustomEndpoint() {
    return this._dataprocBetaCustomEndpoint;
  }
  public set dataprocBetaCustomEndpoint(value: string | undefined| undefined) {
    this._dataprocBetaCustomEndpoint = value;
  }
  public resetDataprocBetaCustomEndpoint() {
    this._dataprocBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocBetaCustomEndpointInput() {
    return this._dataprocBetaCustomEndpoint
  }

  // dataproc_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocCustomEndpoint?: string | undefined; 
  public get dataprocCustomEndpoint() {
    return this._dataprocCustomEndpoint;
  }
  public set dataprocCustomEndpoint(value: string | undefined| undefined) {
    this._dataprocCustomEndpoint = value;
  }
  public resetDataprocCustomEndpoint() {
    this._dataprocCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocCustomEndpointInput() {
    return this._dataprocCustomEndpoint
  }

  // datastore_custom_endpoint - computed: false, optional: true, required: false
  private _datastoreCustomEndpoint?: string | undefined; 
  public get datastoreCustomEndpoint() {
    return this._datastoreCustomEndpoint;
  }
  public set datastoreCustomEndpoint(value: string | undefined| undefined) {
    this._datastoreCustomEndpoint = value;
  }
  public resetDatastoreCustomEndpoint() {
    this._datastoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreCustomEndpointInput() {
    return this._datastoreCustomEndpoint
  }

  // deployment_manager_custom_endpoint - computed: false, optional: true, required: false
  private _deploymentManagerCustomEndpoint?: string | undefined; 
  public get deploymentManagerCustomEndpoint() {
    return this._deploymentManagerCustomEndpoint;
  }
  public set deploymentManagerCustomEndpoint(value: string | undefined| undefined) {
    this._deploymentManagerCustomEndpoint = value;
  }
  public resetDeploymentManagerCustomEndpoint() {
    this._deploymentManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentManagerCustomEndpointInput() {
    return this._deploymentManagerCustomEndpoint
  }

  // dialogflow_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCustomEndpoint?: string | undefined; 
  public get dialogflowCustomEndpoint() {
    return this._dialogflowCustomEndpoint;
  }
  public set dialogflowCustomEndpoint(value: string | undefined| undefined) {
    this._dialogflowCustomEndpoint = value;
  }
  public resetDialogflowCustomEndpoint() {
    this._dialogflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCustomEndpointInput() {
    return this._dialogflowCustomEndpoint
  }

  // dialogflow_cx_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCxCustomEndpoint?: string | undefined; 
  public get dialogflowCxCustomEndpoint() {
    return this._dialogflowCxCustomEndpoint;
  }
  public set dialogflowCxCustomEndpoint(value: string | undefined| undefined) {
    this._dialogflowCxCustomEndpoint = value;
  }
  public resetDialogflowCxCustomEndpoint() {
    this._dialogflowCxCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCxCustomEndpointInput() {
    return this._dialogflowCxCustomEndpoint
  }

  // dns_custom_endpoint - computed: false, optional: true, required: false
  private _dnsCustomEndpoint?: string | undefined; 
  public get dnsCustomEndpoint() {
    return this._dnsCustomEndpoint;
  }
  public set dnsCustomEndpoint(value: string | undefined| undefined) {
    this._dnsCustomEndpoint = value;
  }
  public resetDnsCustomEndpoint() {
    this._dnsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomEndpointInput() {
    return this._dnsCustomEndpoint
  }

  // essential_contacts_custom_endpoint - computed: false, optional: true, required: false
  private _essentialContactsCustomEndpoint?: string | undefined; 
  public get essentialContactsCustomEndpoint() {
    return this._essentialContactsCustomEndpoint;
  }
  public set essentialContactsCustomEndpoint(value: string | undefined| undefined) {
    this._essentialContactsCustomEndpoint = value;
  }
  public resetEssentialContactsCustomEndpoint() {
    this._essentialContactsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialContactsCustomEndpointInput() {
    return this._essentialContactsCustomEndpoint
  }

  // eventarc_custom_endpoint - computed: false, optional: true, required: false
  private _eventarcCustomEndpoint?: string | undefined; 
  public get eventarcCustomEndpoint() {
    return this._eventarcCustomEndpoint;
  }
  public set eventarcCustomEndpoint(value: string | undefined| undefined) {
    this._eventarcCustomEndpoint = value;
  }
  public resetEventarcCustomEndpoint() {
    this._eventarcCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventarcCustomEndpointInput() {
    return this._eventarcCustomEndpoint
  }

  // filestore_custom_endpoint - computed: false, optional: true, required: false
  private _filestoreCustomEndpoint?: string | undefined; 
  public get filestoreCustomEndpoint() {
    return this._filestoreCustomEndpoint;
  }
  public set filestoreCustomEndpoint(value: string | undefined| undefined) {
    this._filestoreCustomEndpoint = value;
  }
  public resetFilestoreCustomEndpoint() {
    this._filestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreCustomEndpointInput() {
    return this._filestoreCustomEndpoint
  }

  // firestore_custom_endpoint - computed: false, optional: true, required: false
  private _firestoreCustomEndpoint?: string | undefined; 
  public get firestoreCustomEndpoint() {
    return this._firestoreCustomEndpoint;
  }
  public set firestoreCustomEndpoint(value: string | undefined| undefined) {
    this._firestoreCustomEndpoint = value;
  }
  public resetFirestoreCustomEndpoint() {
    this._firestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firestoreCustomEndpointInput() {
    return this._firestoreCustomEndpoint
  }

  // game_services_custom_endpoint - computed: false, optional: true, required: false
  private _gameServicesCustomEndpoint?: string | undefined; 
  public get gameServicesCustomEndpoint() {
    return this._gameServicesCustomEndpoint;
  }
  public set gameServicesCustomEndpoint(value: string | undefined| undefined) {
    this._gameServicesCustomEndpoint = value;
  }
  public resetGameServicesCustomEndpoint() {
    this._gameServicesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServicesCustomEndpointInput() {
    return this._gameServicesCustomEndpoint
  }

  // gke_hub_custom_endpoint - computed: false, optional: true, required: false
  private _gkeHubCustomEndpoint?: string | undefined; 
  public get gkeHubCustomEndpoint() {
    return this._gkeHubCustomEndpoint;
  }
  public set gkeHubCustomEndpoint(value: string | undefined| undefined) {
    this._gkeHubCustomEndpoint = value;
  }
  public resetGkeHubCustomEndpoint() {
    this._gkeHubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeHubCustomEndpointInput() {
    return this._gkeHubCustomEndpoint
  }

  // gkehub_feature_custom_endpoint - computed: false, optional: true, required: false
  private _gkehubFeatureCustomEndpoint?: string | undefined; 
  public get gkehubFeatureCustomEndpoint() {
    return this._gkehubFeatureCustomEndpoint;
  }
  public set gkehubFeatureCustomEndpoint(value: string | undefined| undefined) {
    this._gkehubFeatureCustomEndpoint = value;
  }
  public resetGkehubFeatureCustomEndpoint() {
    this._gkehubFeatureCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkehubFeatureCustomEndpointInput() {
    return this._gkehubFeatureCustomEndpoint
  }

  // healthcare_custom_endpoint - computed: false, optional: true, required: false
  private _healthcareCustomEndpoint?: string | undefined; 
  public get healthcareCustomEndpoint() {
    return this._healthcareCustomEndpoint;
  }
  public set healthcareCustomEndpoint(value: string | undefined| undefined) {
    this._healthcareCustomEndpoint = value;
  }
  public resetHealthcareCustomEndpoint() {
    this._healthcareCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcareCustomEndpointInput() {
    return this._healthcareCustomEndpoint
  }

  // iam_credentials_custom_endpoint - computed: false, optional: true, required: false
  private _iamCredentialsCustomEndpoint?: string | undefined; 
  public get iamCredentialsCustomEndpoint() {
    return this._iamCredentialsCustomEndpoint;
  }
  public set iamCredentialsCustomEndpoint(value: string | undefined| undefined) {
    this._iamCredentialsCustomEndpoint = value;
  }
  public resetIamCredentialsCustomEndpoint() {
    this._iamCredentialsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCredentialsCustomEndpointInput() {
    return this._iamCredentialsCustomEndpoint
  }

  // iam_custom_endpoint - computed: false, optional: true, required: false
  private _iamCustomEndpoint?: string | undefined; 
  public get iamCustomEndpoint() {
    return this._iamCustomEndpoint;
  }
  public set iamCustomEndpoint(value: string | undefined| undefined) {
    this._iamCustomEndpoint = value;
  }
  public resetIamCustomEndpoint() {
    this._iamCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCustomEndpointInput() {
    return this._iamCustomEndpoint
  }

  // iap_custom_endpoint - computed: false, optional: true, required: false
  private _iapCustomEndpoint?: string | undefined; 
  public get iapCustomEndpoint() {
    return this._iapCustomEndpoint;
  }
  public set iapCustomEndpoint(value: string | undefined| undefined) {
    this._iapCustomEndpoint = value;
  }
  public resetIapCustomEndpoint() {
    this._iapCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapCustomEndpointInput() {
    return this._iapCustomEndpoint
  }

  // identity_platform_custom_endpoint - computed: false, optional: true, required: false
  private _identityPlatformCustomEndpoint?: string | undefined; 
  public get identityPlatformCustomEndpoint() {
    return this._identityPlatformCustomEndpoint;
  }
  public set identityPlatformCustomEndpoint(value: string | undefined| undefined) {
    this._identityPlatformCustomEndpoint = value;
  }
  public resetIdentityPlatformCustomEndpoint() {
    this._identityPlatformCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPlatformCustomEndpointInput() {
    return this._identityPlatformCustomEndpoint
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: string | undefined; 
  public get impersonateServiceAccount() {
    return this._impersonateServiceAccount;
  }
  public set impersonateServiceAccount(value: string | undefined| undefined) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount
  }

  // impersonate_service_account_delegates - computed: false, optional: true, required: false
  private _impersonateServiceAccountDelegates?: string[] | undefined; 
  public get impersonateServiceAccountDelegates() {
    return this._impersonateServiceAccountDelegates;
  }
  public set impersonateServiceAccountDelegates(value: string[] | undefined| undefined) {
    this._impersonateServiceAccountDelegates = value;
  }
  public resetImpersonateServiceAccountDelegates() {
    this._impersonateServiceAccountDelegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountDelegatesInput() {
    return this._impersonateServiceAccountDelegates
  }

  // kms_custom_endpoint - computed: false, optional: true, required: false
  private _kmsCustomEndpoint?: string | undefined; 
  public get kmsCustomEndpoint() {
    return this._kmsCustomEndpoint;
  }
  public set kmsCustomEndpoint(value: string | undefined| undefined) {
    this._kmsCustomEndpoint = value;
  }
  public resetKmsCustomEndpoint() {
    this._kmsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsCustomEndpointInput() {
    return this._kmsCustomEndpoint
  }

  // logging_custom_endpoint - computed: false, optional: true, required: false
  private _loggingCustomEndpoint?: string | undefined; 
  public get loggingCustomEndpoint() {
    return this._loggingCustomEndpoint;
  }
  public set loggingCustomEndpoint(value: string | undefined| undefined) {
    this._loggingCustomEndpoint = value;
  }
  public resetLoggingCustomEndpoint() {
    this._loggingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingCustomEndpointInput() {
    return this._loggingCustomEndpoint
  }

  // memcache_custom_endpoint - computed: false, optional: true, required: false
  private _memcacheCustomEndpoint?: string | undefined; 
  public get memcacheCustomEndpoint() {
    return this._memcacheCustomEndpoint;
  }
  public set memcacheCustomEndpoint(value: string | undefined| undefined) {
    this._memcacheCustomEndpoint = value;
  }
  public resetMemcacheCustomEndpoint() {
    this._memcacheCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheCustomEndpointInput() {
    return this._memcacheCustomEndpoint
  }

  // ml_engine_custom_endpoint - computed: false, optional: true, required: false
  private _mlEngineCustomEndpoint?: string | undefined; 
  public get mlEngineCustomEndpoint() {
    return this._mlEngineCustomEndpoint;
  }
  public set mlEngineCustomEndpoint(value: string | undefined| undefined) {
    this._mlEngineCustomEndpoint = value;
  }
  public resetMlEngineCustomEndpoint() {
    this._mlEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlEngineCustomEndpointInput() {
    return this._mlEngineCustomEndpoint
  }

  // monitoring_custom_endpoint - computed: false, optional: true, required: false
  private _monitoringCustomEndpoint?: string | undefined; 
  public get monitoringCustomEndpoint() {
    return this._monitoringCustomEndpoint;
  }
  public set monitoringCustomEndpoint(value: string | undefined| undefined) {
    this._monitoringCustomEndpoint = value;
  }
  public resetMonitoringCustomEndpoint() {
    this._monitoringCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCustomEndpointInput() {
    return this._monitoringCustomEndpoint
  }

  // network_management_custom_endpoint - computed: false, optional: true, required: false
  private _networkManagementCustomEndpoint?: string | undefined; 
  public get networkManagementCustomEndpoint() {
    return this._networkManagementCustomEndpoint;
  }
  public set networkManagementCustomEndpoint(value: string | undefined| undefined) {
    this._networkManagementCustomEndpoint = value;
  }
  public resetNetworkManagementCustomEndpoint() {
    this._networkManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkManagementCustomEndpointInput() {
    return this._networkManagementCustomEndpoint
  }

  // network_services_custom_endpoint - computed: false, optional: true, required: false
  private _networkServicesCustomEndpoint?: string | undefined; 
  public get networkServicesCustomEndpoint() {
    return this._networkServicesCustomEndpoint;
  }
  public set networkServicesCustomEndpoint(value: string | undefined| undefined) {
    this._networkServicesCustomEndpoint = value;
  }
  public resetNetworkServicesCustomEndpoint() {
    this._networkServicesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServicesCustomEndpointInput() {
    return this._networkServicesCustomEndpoint
  }

  // notebooks_custom_endpoint - computed: false, optional: true, required: false
  private _notebooksCustomEndpoint?: string | undefined; 
  public get notebooksCustomEndpoint() {
    return this._notebooksCustomEndpoint;
  }
  public set notebooksCustomEndpoint(value: string | undefined| undefined) {
    this._notebooksCustomEndpoint = value;
  }
  public resetNotebooksCustomEndpoint() {
    this._notebooksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksCustomEndpointInput() {
    return this._notebooksCustomEndpoint
  }

  // org_policy_custom_endpoint - computed: false, optional: true, required: false
  private _orgPolicyCustomEndpoint?: string | undefined; 
  public get orgPolicyCustomEndpoint() {
    return this._orgPolicyCustomEndpoint;
  }
  public set orgPolicyCustomEndpoint(value: string | undefined| undefined) {
    this._orgPolicyCustomEndpoint = value;
  }
  public resetOrgPolicyCustomEndpoint() {
    this._orgPolicyCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgPolicyCustomEndpointInput() {
    return this._orgPolicyCustomEndpoint
  }

  // os_config_custom_endpoint - computed: false, optional: true, required: false
  private _osConfigCustomEndpoint?: string | undefined; 
  public get osConfigCustomEndpoint() {
    return this._osConfigCustomEndpoint;
  }
  public set osConfigCustomEndpoint(value: string | undefined| undefined) {
    this._osConfigCustomEndpoint = value;
  }
  public resetOsConfigCustomEndpoint() {
    this._osConfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConfigCustomEndpointInput() {
    return this._osConfigCustomEndpoint
  }

  // os_login_custom_endpoint - computed: false, optional: true, required: false
  private _osLoginCustomEndpoint?: string | undefined; 
  public get osLoginCustomEndpoint() {
    return this._osLoginCustomEndpoint;
  }
  public set osLoginCustomEndpoint(value: string | undefined| undefined) {
    this._osLoginCustomEndpoint = value;
  }
  public resetOsLoginCustomEndpoint() {
    this._osLoginCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osLoginCustomEndpointInput() {
    return this._osLoginCustomEndpoint
  }

  // privateca_custom_endpoint - computed: false, optional: true, required: false
  private _privatecaCustomEndpoint?: string | undefined; 
  public get privatecaCustomEndpoint() {
    return this._privatecaCustomEndpoint;
  }
  public set privatecaCustomEndpoint(value: string | undefined| undefined) {
    this._privatecaCustomEndpoint = value;
  }
  public resetPrivatecaCustomEndpoint() {
    this._privatecaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatecaCustomEndpointInput() {
    return this._privatecaCustomEndpoint
  }

  // project - computed: false, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined| undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // pubsub_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubCustomEndpoint?: string | undefined; 
  public get pubsubCustomEndpoint() {
    return this._pubsubCustomEndpoint;
  }
  public set pubsubCustomEndpoint(value: string | undefined| undefined) {
    this._pubsubCustomEndpoint = value;
  }
  public resetPubsubCustomEndpoint() {
    this._pubsubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubCustomEndpointInput() {
    return this._pubsubCustomEndpoint
  }

  // pubsub_lite_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubLiteCustomEndpoint?: string | undefined; 
  public get pubsubLiteCustomEndpoint() {
    return this._pubsubLiteCustomEndpoint;
  }
  public set pubsubLiteCustomEndpoint(value: string | undefined| undefined) {
    this._pubsubLiteCustomEndpoint = value;
  }
  public resetPubsubLiteCustomEndpoint() {
    this._pubsubLiteCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubLiteCustomEndpointInput() {
    return this._pubsubLiteCustomEndpoint
  }

  // redis_custom_endpoint - computed: false, optional: true, required: false
  private _redisCustomEndpoint?: string | undefined; 
  public get redisCustomEndpoint() {
    return this._redisCustomEndpoint;
  }
  public set redisCustomEndpoint(value: string | undefined| undefined) {
    this._redisCustomEndpoint = value;
  }
  public resetRedisCustomEndpoint() {
    this._redisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCustomEndpointInput() {
    return this._redisCustomEndpoint
  }

  // region - computed: false, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined| undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // request_reason - computed: false, optional: true, required: false
  private _requestReason?: string | undefined; 
  public get requestReason() {
    return this._requestReason;
  }
  public set requestReason(value: string | undefined| undefined) {
    this._requestReason = value;
  }
  public resetRequestReason() {
    this._requestReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestReasonInput() {
    return this._requestReason
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string | undefined; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string | undefined| undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout
  }

  // resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerCustomEndpoint?: string | undefined; 
  public get resourceManagerCustomEndpoint() {
    return this._resourceManagerCustomEndpoint;
  }
  public set resourceManagerCustomEndpoint(value: string | undefined| undefined) {
    this._resourceManagerCustomEndpoint = value;
  }
  public resetResourceManagerCustomEndpoint() {
    this._resourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerCustomEndpointInput() {
    return this._resourceManagerCustomEndpoint
  }

  // resource_manager_v2_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerV2CustomEndpoint?: string | undefined; 
  public get resourceManagerV2CustomEndpoint() {
    return this._resourceManagerV2CustomEndpoint;
  }
  public set resourceManagerV2CustomEndpoint(value: string | undefined| undefined) {
    this._resourceManagerV2CustomEndpoint = value;
  }
  public resetResourceManagerV2CustomEndpoint() {
    this._resourceManagerV2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerV2CustomEndpointInput() {
    return this._resourceManagerV2CustomEndpoint
  }

  // runtime_config_custom_endpoint - computed: false, optional: true, required: false
  private _runtimeConfigCustomEndpoint?: string | undefined; 
  public get runtimeConfigCustomEndpoint() {
    return this._runtimeConfigCustomEndpoint;
  }
  public set runtimeConfigCustomEndpoint(value: string | undefined| undefined) {
    this._runtimeConfigCustomEndpoint = value;
  }
  public resetRuntimeConfigCustomEndpoint() {
    this._runtimeConfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigCustomEndpointInput() {
    return this._runtimeConfigCustomEndpoint
  }

  // runtimeconfig_custom_endpoint - computed: false, optional: true, required: false
  private _runtimeconfigCustomEndpoint?: string | undefined; 
  public get runtimeconfigCustomEndpoint() {
    return this._runtimeconfigCustomEndpoint;
  }
  public set runtimeconfigCustomEndpoint(value: string | undefined| undefined) {
    this._runtimeconfigCustomEndpoint = value;
  }
  public resetRuntimeconfigCustomEndpoint() {
    this._runtimeconfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeconfigCustomEndpointInput() {
    return this._runtimeconfigCustomEndpoint
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[] | undefined; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined| undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes
  }

  // secret_manager_custom_endpoint - computed: false, optional: true, required: false
  private _secretManagerCustomEndpoint?: string | undefined; 
  public get secretManagerCustomEndpoint() {
    return this._secretManagerCustomEndpoint;
  }
  public set secretManagerCustomEndpoint(value: string | undefined| undefined) {
    this._secretManagerCustomEndpoint = value;
  }
  public resetSecretManagerCustomEndpoint() {
    this._secretManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerCustomEndpointInput() {
    return this._secretManagerCustomEndpoint
  }

  // security_center_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterCustomEndpoint?: string | undefined; 
  public get securityCenterCustomEndpoint() {
    return this._securityCenterCustomEndpoint;
  }
  public set securityCenterCustomEndpoint(value: string | undefined| undefined) {
    this._securityCenterCustomEndpoint = value;
  }
  public resetSecurityCenterCustomEndpoint() {
    this._securityCenterCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCenterCustomEndpointInput() {
    return this._securityCenterCustomEndpoint
  }

  // service_management_custom_endpoint - computed: false, optional: true, required: false
  private _serviceManagementCustomEndpoint?: string | undefined; 
  public get serviceManagementCustomEndpoint() {
    return this._serviceManagementCustomEndpoint;
  }
  public set serviceManagementCustomEndpoint(value: string | undefined| undefined) {
    this._serviceManagementCustomEndpoint = value;
  }
  public resetServiceManagementCustomEndpoint() {
    this._serviceManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagementCustomEndpointInput() {
    return this._serviceManagementCustomEndpoint
  }

  // service_networking_custom_endpoint - computed: false, optional: true, required: false
  private _serviceNetworkingCustomEndpoint?: string | undefined; 
  public get serviceNetworkingCustomEndpoint() {
    return this._serviceNetworkingCustomEndpoint;
  }
  public set serviceNetworkingCustomEndpoint(value: string | undefined| undefined) {
    this._serviceNetworkingCustomEndpoint = value;
  }
  public resetServiceNetworkingCustomEndpoint() {
    this._serviceNetworkingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingCustomEndpointInput() {
    return this._serviceNetworkingCustomEndpoint
  }

  // service_usage_custom_endpoint - computed: false, optional: true, required: false
  private _serviceUsageCustomEndpoint?: string | undefined; 
  public get serviceUsageCustomEndpoint() {
    return this._serviceUsageCustomEndpoint;
  }
  public set serviceUsageCustomEndpoint(value: string | undefined| undefined) {
    this._serviceUsageCustomEndpoint = value;
  }
  public resetServiceUsageCustomEndpoint() {
    this._serviceUsageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUsageCustomEndpointInput() {
    return this._serviceUsageCustomEndpoint
  }

  // source_repo_custom_endpoint - computed: false, optional: true, required: false
  private _sourceRepoCustomEndpoint?: string | undefined; 
  public get sourceRepoCustomEndpoint() {
    return this._sourceRepoCustomEndpoint;
  }
  public set sourceRepoCustomEndpoint(value: string | undefined| undefined) {
    this._sourceRepoCustomEndpoint = value;
  }
  public resetSourceRepoCustomEndpoint() {
    this._sourceRepoCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepoCustomEndpointInput() {
    return this._sourceRepoCustomEndpoint
  }

  // spanner_custom_endpoint - computed: false, optional: true, required: false
  private _spannerCustomEndpoint?: string | undefined; 
  public get spannerCustomEndpoint() {
    return this._spannerCustomEndpoint;
  }
  public set spannerCustomEndpoint(value: string | undefined| undefined) {
    this._spannerCustomEndpoint = value;
  }
  public resetSpannerCustomEndpoint() {
    this._spannerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerCustomEndpointInput() {
    return this._spannerCustomEndpoint
  }

  // sql_custom_endpoint - computed: false, optional: true, required: false
  private _sqlCustomEndpoint?: string | undefined; 
  public get sqlCustomEndpoint() {
    return this._sqlCustomEndpoint;
  }
  public set sqlCustomEndpoint(value: string | undefined| undefined) {
    this._sqlCustomEndpoint = value;
  }
  public resetSqlCustomEndpoint() {
    this._sqlCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCustomEndpointInput() {
    return this._sqlCustomEndpoint
  }

  // storage_custom_endpoint - computed: false, optional: true, required: false
  private _storageCustomEndpoint?: string | undefined; 
  public get storageCustomEndpoint() {
    return this._storageCustomEndpoint;
  }
  public set storageCustomEndpoint(value: string | undefined| undefined) {
    this._storageCustomEndpoint = value;
  }
  public resetStorageCustomEndpoint() {
    this._storageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCustomEndpointInput() {
    return this._storageCustomEndpoint
  }

  // storage_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _storageTransferCustomEndpoint?: string | undefined; 
  public get storageTransferCustomEndpoint() {
    return this._storageTransferCustomEndpoint;
  }
  public set storageTransferCustomEndpoint(value: string | undefined| undefined) {
    this._storageTransferCustomEndpoint = value;
  }
  public resetStorageTransferCustomEndpoint() {
    this._storageTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTransferCustomEndpointInput() {
    return this._storageTransferCustomEndpoint
  }

  // tags_custom_endpoint - computed: false, optional: true, required: false
  private _tagsCustomEndpoint?: string | undefined; 
  public get tagsCustomEndpoint() {
    return this._tagsCustomEndpoint;
  }
  public set tagsCustomEndpoint(value: string | undefined| undefined) {
    this._tagsCustomEndpoint = value;
  }
  public resetTagsCustomEndpoint() {
    this._tagsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsCustomEndpointInput() {
    return this._tagsCustomEndpoint
  }

  // tpu_custom_endpoint - computed: false, optional: true, required: false
  private _tpuCustomEndpoint?: string | undefined; 
  public get tpuCustomEndpoint() {
    return this._tpuCustomEndpoint;
  }
  public set tpuCustomEndpoint(value: string | undefined| undefined) {
    this._tpuCustomEndpoint = value;
  }
  public resetTpuCustomEndpoint() {
    this._tpuCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuCustomEndpointInput() {
    return this._tpuCustomEndpoint
  }

  // user_project_override - computed: false, optional: true, required: false
  private _userProjectOverride?: boolean | cdktf.IResolvable | undefined; 
  public get userProjectOverride() {
    return this._userProjectOverride;
  }
  public set userProjectOverride(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._userProjectOverride = value;
  }
  public resetUserProjectOverride() {
    this._userProjectOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProjectOverrideInput() {
    return this._userProjectOverride
  }

  // vertex_ai_custom_endpoint - computed: false, optional: true, required: false
  private _vertexAiCustomEndpoint?: string | undefined; 
  public get vertexAiCustomEndpoint() {
    return this._vertexAiCustomEndpoint;
  }
  public set vertexAiCustomEndpoint(value: string | undefined| undefined) {
    this._vertexAiCustomEndpoint = value;
  }
  public resetVertexAiCustomEndpoint() {
    this._vertexAiCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexAiCustomEndpointInput() {
    return this._vertexAiCustomEndpoint
  }

  // vpc_access_custom_endpoint - computed: false, optional: true, required: false
  private _vpcAccessCustomEndpoint?: string | undefined; 
  public get vpcAccessCustomEndpoint() {
    return this._vpcAccessCustomEndpoint;
  }
  public set vpcAccessCustomEndpoint(value: string | undefined| undefined) {
    this._vpcAccessCustomEndpoint = value;
  }
  public resetVpcAccessCustomEndpoint() {
    this._vpcAccessCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessCustomEndpointInput() {
    return this._vpcAccessCustomEndpoint
  }

  // workflows_custom_endpoint - computed: false, optional: true, required: false
  private _workflowsCustomEndpoint?: string | undefined; 
  public get workflowsCustomEndpoint() {
    return this._workflowsCustomEndpoint;
  }
  public set workflowsCustomEndpoint(value: string | undefined| undefined) {
    this._workflowsCustomEndpoint = value;
  }
  public resetWorkflowsCustomEndpoint() {
    this._workflowsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsCustomEndpointInput() {
    return this._workflowsCustomEndpoint
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string | undefined; 
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined| undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string | undefined; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined| undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // batching - computed: false, optional: true, required: false
  private _batching?: GoogleProviderBatching | undefined; 
  public get batching() {
    return this._batching;
  }
  public set batching(value: GoogleProviderBatching | undefined| undefined) {
    this._batching = value;
  }
  public resetBatching() {
    this._batching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingInput() {
    return this._batching
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_approval_custom_endpoint: cdktf.stringToTerraform(this._accessApprovalCustomEndpoint),
      access_context_manager_custom_endpoint: cdktf.stringToTerraform(this._accessContextManagerCustomEndpoint),
      access_token: cdktf.stringToTerraform(this._accessToken),
      active_directory_custom_endpoint: cdktf.stringToTerraform(this._activeDirectoryCustomEndpoint),
      apigee_custom_endpoint: cdktf.stringToTerraform(this._apigeeCustomEndpoint),
      app_engine_custom_endpoint: cdktf.stringToTerraform(this._appEngineCustomEndpoint),
      assured_workloads_custom_endpoint: cdktf.stringToTerraform(this._assuredWorkloadsCustomEndpoint),
      big_query_custom_endpoint: cdktf.stringToTerraform(this._bigQueryCustomEndpoint),
      bigquery_data_transfer_custom_endpoint: cdktf.stringToTerraform(this._bigqueryDataTransferCustomEndpoint),
      bigquery_reservation_custom_endpoint: cdktf.stringToTerraform(this._bigqueryReservationCustomEndpoint),
      bigtable_custom_endpoint: cdktf.stringToTerraform(this._bigtableCustomEndpoint),
      billing_custom_endpoint: cdktf.stringToTerraform(this._billingCustomEndpoint),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      binary_authorization_custom_endpoint: cdktf.stringToTerraform(this._binaryAuthorizationCustomEndpoint),
      cloud_asset_custom_endpoint: cdktf.stringToTerraform(this._cloudAssetCustomEndpoint),
      cloud_billing_custom_endpoint: cdktf.stringToTerraform(this._cloudBillingCustomEndpoint),
      cloud_build_custom_endpoint: cdktf.stringToTerraform(this._cloudBuildCustomEndpoint),
      cloud_functions_custom_endpoint: cdktf.stringToTerraform(this._cloudFunctionsCustomEndpoint),
      cloud_identity_custom_endpoint: cdktf.stringToTerraform(this._cloudIdentityCustomEndpoint),
      cloud_iot_custom_endpoint: cdktf.stringToTerraform(this._cloudIotCustomEndpoint),
      cloud_resource_manager_custom_endpoint: cdktf.stringToTerraform(this._cloudResourceManagerCustomEndpoint),
      cloud_run_custom_endpoint: cdktf.stringToTerraform(this._cloudRunCustomEndpoint),
      cloud_scheduler_custom_endpoint: cdktf.stringToTerraform(this._cloudSchedulerCustomEndpoint),
      cloud_tasks_custom_endpoint: cdktf.stringToTerraform(this._cloudTasksCustomEndpoint),
      composer_custom_endpoint: cdktf.stringToTerraform(this._composerCustomEndpoint),
      compute_beta_custom_endpoint: cdktf.stringToTerraform(this._computeBetaCustomEndpoint),
      compute_custom_endpoint: cdktf.stringToTerraform(this._computeCustomEndpoint),
      container_analysis_custom_endpoint: cdktf.stringToTerraform(this._containerAnalysisCustomEndpoint),
      container_beta_custom_endpoint: cdktf.stringToTerraform(this._containerBetaCustomEndpoint),
      container_custom_endpoint: cdktf.stringToTerraform(this._containerCustomEndpoint),
      credentials: cdktf.stringToTerraform(this._credentials),
      data_catalog_custom_endpoint: cdktf.stringToTerraform(this._dataCatalogCustomEndpoint),
      data_loss_prevention_custom_endpoint: cdktf.stringToTerraform(this._dataLossPreventionCustomEndpoint),
      dataflow_custom_endpoint: cdktf.stringToTerraform(this._dataflowCustomEndpoint),
      dataproc_beta_custom_endpoint: cdktf.stringToTerraform(this._dataprocBetaCustomEndpoint),
      dataproc_custom_endpoint: cdktf.stringToTerraform(this._dataprocCustomEndpoint),
      datastore_custom_endpoint: cdktf.stringToTerraform(this._datastoreCustomEndpoint),
      deployment_manager_custom_endpoint: cdktf.stringToTerraform(this._deploymentManagerCustomEndpoint),
      dialogflow_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCustomEndpoint),
      dialogflow_cx_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCxCustomEndpoint),
      dns_custom_endpoint: cdktf.stringToTerraform(this._dnsCustomEndpoint),
      essential_contacts_custom_endpoint: cdktf.stringToTerraform(this._essentialContactsCustomEndpoint),
      eventarc_custom_endpoint: cdktf.stringToTerraform(this._eventarcCustomEndpoint),
      filestore_custom_endpoint: cdktf.stringToTerraform(this._filestoreCustomEndpoint),
      firestore_custom_endpoint: cdktf.stringToTerraform(this._firestoreCustomEndpoint),
      game_services_custom_endpoint: cdktf.stringToTerraform(this._gameServicesCustomEndpoint),
      gke_hub_custom_endpoint: cdktf.stringToTerraform(this._gkeHubCustomEndpoint),
      gkehub_feature_custom_endpoint: cdktf.stringToTerraform(this._gkehubFeatureCustomEndpoint),
      healthcare_custom_endpoint: cdktf.stringToTerraform(this._healthcareCustomEndpoint),
      iam_credentials_custom_endpoint: cdktf.stringToTerraform(this._iamCredentialsCustomEndpoint),
      iam_custom_endpoint: cdktf.stringToTerraform(this._iamCustomEndpoint),
      iap_custom_endpoint: cdktf.stringToTerraform(this._iapCustomEndpoint),
      identity_platform_custom_endpoint: cdktf.stringToTerraform(this._identityPlatformCustomEndpoint),
      impersonate_service_account: cdktf.stringToTerraform(this._impersonateServiceAccount),
      impersonate_service_account_delegates: cdktf.listMapper(cdktf.stringToTerraform)(this._impersonateServiceAccountDelegates),
      kms_custom_endpoint: cdktf.stringToTerraform(this._kmsCustomEndpoint),
      logging_custom_endpoint: cdktf.stringToTerraform(this._loggingCustomEndpoint),
      memcache_custom_endpoint: cdktf.stringToTerraform(this._memcacheCustomEndpoint),
      ml_engine_custom_endpoint: cdktf.stringToTerraform(this._mlEngineCustomEndpoint),
      monitoring_custom_endpoint: cdktf.stringToTerraform(this._monitoringCustomEndpoint),
      network_management_custom_endpoint: cdktf.stringToTerraform(this._networkManagementCustomEndpoint),
      network_services_custom_endpoint: cdktf.stringToTerraform(this._networkServicesCustomEndpoint),
      notebooks_custom_endpoint: cdktf.stringToTerraform(this._notebooksCustomEndpoint),
      org_policy_custom_endpoint: cdktf.stringToTerraform(this._orgPolicyCustomEndpoint),
      os_config_custom_endpoint: cdktf.stringToTerraform(this._osConfigCustomEndpoint),
      os_login_custom_endpoint: cdktf.stringToTerraform(this._osLoginCustomEndpoint),
      privateca_custom_endpoint: cdktf.stringToTerraform(this._privatecaCustomEndpoint),
      project: cdktf.stringToTerraform(this._project),
      pubsub_custom_endpoint: cdktf.stringToTerraform(this._pubsubCustomEndpoint),
      pubsub_lite_custom_endpoint: cdktf.stringToTerraform(this._pubsubLiteCustomEndpoint),
      redis_custom_endpoint: cdktf.stringToTerraform(this._redisCustomEndpoint),
      region: cdktf.stringToTerraform(this._region),
      request_reason: cdktf.stringToTerraform(this._requestReason),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      resource_manager_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerCustomEndpoint),
      resource_manager_v2_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerV2CustomEndpoint),
      runtime_config_custom_endpoint: cdktf.stringToTerraform(this._runtimeConfigCustomEndpoint),
      runtimeconfig_custom_endpoint: cdktf.stringToTerraform(this._runtimeconfigCustomEndpoint),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      secret_manager_custom_endpoint: cdktf.stringToTerraform(this._secretManagerCustomEndpoint),
      security_center_custom_endpoint: cdktf.stringToTerraform(this._securityCenterCustomEndpoint),
      service_management_custom_endpoint: cdktf.stringToTerraform(this._serviceManagementCustomEndpoint),
      service_networking_custom_endpoint: cdktf.stringToTerraform(this._serviceNetworkingCustomEndpoint),
      service_usage_custom_endpoint: cdktf.stringToTerraform(this._serviceUsageCustomEndpoint),
      source_repo_custom_endpoint: cdktf.stringToTerraform(this._sourceRepoCustomEndpoint),
      spanner_custom_endpoint: cdktf.stringToTerraform(this._spannerCustomEndpoint),
      sql_custom_endpoint: cdktf.stringToTerraform(this._sqlCustomEndpoint),
      storage_custom_endpoint: cdktf.stringToTerraform(this._storageCustomEndpoint),
      storage_transfer_custom_endpoint: cdktf.stringToTerraform(this._storageTransferCustomEndpoint),
      tags_custom_endpoint: cdktf.stringToTerraform(this._tagsCustomEndpoint),
      tpu_custom_endpoint: cdktf.stringToTerraform(this._tpuCustomEndpoint),
      user_project_override: cdktf.booleanToTerraform(this._userProjectOverride),
      vertex_ai_custom_endpoint: cdktf.stringToTerraform(this._vertexAiCustomEndpoint),
      vpc_access_custom_endpoint: cdktf.stringToTerraform(this._vpcAccessCustomEndpoint),
      workflows_custom_endpoint: cdktf.stringToTerraform(this._workflowsCustomEndpoint),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
      batching: googleProviderBatchingToTerraform(this._batching),
    };
  }
}
