# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProvider <a name="GoogleProvider" id="@cdktf/provider-google.provider.GoogleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs google}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.provider.GoogleProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProvider;

GoogleProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessApprovalCustomEndpoint(java.lang.String)
//  .accessContextManagerCustomEndpoint(java.lang.String)
//  .accessToken(java.lang.String)
//  .activeDirectoryCustomEndpoint(java.lang.String)
//  .addTerraformAttributionLabel(java.lang.Boolean)
//  .addTerraformAttributionLabel(IResolvable)
//  .alias(java.lang.String)
//  .alloydbCustomEndpoint(java.lang.String)
//  .apigeeCustomEndpoint(java.lang.String)
//  .apihubCustomEndpoint(java.lang.String)
//  .apikeysCustomEndpoint(java.lang.String)
//  .appEngineCustomEndpoint(java.lang.String)
//  .apphubCustomEndpoint(java.lang.String)
//  .artifactRegistryCustomEndpoint(java.lang.String)
//  .assuredWorkloadsCustomEndpoint(java.lang.String)
//  .backupDrCustomEndpoint(java.lang.String)
//  .batching(IResolvable)
//  .batching(java.util.List<GoogleProviderBatching>)
//  .beyondcorpCustomEndpoint(java.lang.String)
//  .biglakeCustomEndpoint(java.lang.String)
//  .bigqueryAnalyticsHubCustomEndpoint(java.lang.String)
//  .bigqueryConnectionCustomEndpoint(java.lang.String)
//  .bigQueryCustomEndpoint(java.lang.String)
//  .bigqueryDatapolicyCustomEndpoint(java.lang.String)
//  .bigqueryDataTransferCustomEndpoint(java.lang.String)
//  .bigqueryReservationCustomEndpoint(java.lang.String)
//  .bigtableCustomEndpoint(java.lang.String)
//  .billingCustomEndpoint(java.lang.String)
//  .billingProject(java.lang.String)
//  .binaryAuthorizationCustomEndpoint(java.lang.String)
//  .blockchainNodeEngineCustomEndpoint(java.lang.String)
//  .certificateManagerCustomEndpoint(java.lang.String)
//  .chronicleCustomEndpoint(java.lang.String)
//  .cloudAssetCustomEndpoint(java.lang.String)
//  .cloudBillingCustomEndpoint(java.lang.String)
//  .cloudBuildCustomEndpoint(java.lang.String)
//  .cloudbuildv2CustomEndpoint(java.lang.String)
//  .cloudBuildWorkerPoolCustomEndpoint(java.lang.String)
//  .clouddeployCustomEndpoint(java.lang.String)
//  .clouddomainsCustomEndpoint(java.lang.String)
//  .cloudfunctions2CustomEndpoint(java.lang.String)
//  .cloudFunctionsCustomEndpoint(java.lang.String)
//  .cloudIdentityCustomEndpoint(java.lang.String)
//  .cloudIdsCustomEndpoint(java.lang.String)
//  .cloudQuotasCustomEndpoint(java.lang.String)
//  .cloudResourceManagerCustomEndpoint(java.lang.String)
//  .cloudRunCustomEndpoint(java.lang.String)
//  .cloudRunV2CustomEndpoint(java.lang.String)
//  .cloudSchedulerCustomEndpoint(java.lang.String)
//  .cloudTasksCustomEndpoint(java.lang.String)
//  .colabCustomEndpoint(java.lang.String)
//  .composerCustomEndpoint(java.lang.String)
//  .computeCustomEndpoint(java.lang.String)
//  .contactCenterInsightsCustomEndpoint(java.lang.String)
//  .containerAnalysisCustomEndpoint(java.lang.String)
//  .containerAttachedCustomEndpoint(java.lang.String)
//  .containerAwsCustomEndpoint(java.lang.String)
//  .containerAzureCustomEndpoint(java.lang.String)
//  .containerCustomEndpoint(java.lang.String)
//  .coreBillingCustomEndpoint(java.lang.String)
//  .credentials(java.lang.String)
//  .databaseMigrationServiceCustomEndpoint(java.lang.String)
//  .dataCatalogCustomEndpoint(java.lang.String)
//  .dataflowCustomEndpoint(java.lang.String)
//  .dataFusionCustomEndpoint(java.lang.String)
//  .dataLossPreventionCustomEndpoint(java.lang.String)
//  .dataPipelineCustomEndpoint(java.lang.String)
//  .dataplexCustomEndpoint(java.lang.String)
//  .dataprocCustomEndpoint(java.lang.String)
//  .dataprocGdcCustomEndpoint(java.lang.String)
//  .dataprocMetastoreCustomEndpoint(java.lang.String)
//  .datastreamCustomEndpoint(java.lang.String)
//  .defaultLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentManagerCustomEndpoint(java.lang.String)
//  .developerConnectCustomEndpoint(java.lang.String)
//  .dialogflowCustomEndpoint(java.lang.String)
//  .dialogflowCxCustomEndpoint(java.lang.String)
//  .discoveryEngineCustomEndpoint(java.lang.String)
//  .dnsCustomEndpoint(java.lang.String)
//  .documentAiCustomEndpoint(java.lang.String)
//  .documentAiWarehouseCustomEndpoint(java.lang.String)
//  .edgecontainerCustomEndpoint(java.lang.String)
//  .edgenetworkCustomEndpoint(java.lang.String)
//  .essentialContactsCustomEndpoint(java.lang.String)
//  .eventarcCustomEndpoint(java.lang.String)
//  .externalCredentials(IResolvable)
//  .externalCredentials(java.util.List<GoogleProviderExternalCredentials>)
//  .filestoreCustomEndpoint(java.lang.String)
//  .firebaseAppCheckCustomEndpoint(java.lang.String)
//  .firebaseAppHostingCustomEndpoint(java.lang.String)
//  .firebaseDataConnectCustomEndpoint(java.lang.String)
//  .firebaserulesCustomEndpoint(java.lang.String)
//  .firestoreCustomEndpoint(java.lang.String)
//  .geminiCustomEndpoint(java.lang.String)
//  .gkeBackupCustomEndpoint(java.lang.String)
//  .gkeHub2CustomEndpoint(java.lang.String)
//  .gkeHubCustomEndpoint(java.lang.String)
//  .gkehubFeatureCustomEndpoint(java.lang.String)
//  .gkeonpremCustomEndpoint(java.lang.String)
//  .healthcareCustomEndpoint(java.lang.String)
//  .iam2CustomEndpoint(java.lang.String)
//  .iam3CustomEndpoint(java.lang.String)
//  .iamBetaCustomEndpoint(java.lang.String)
//  .iamCredentialsCustomEndpoint(java.lang.String)
//  .iamCustomEndpoint(java.lang.String)
//  .iamWorkforcePoolCustomEndpoint(java.lang.String)
//  .iapCustomEndpoint(java.lang.String)
//  .identityPlatformCustomEndpoint(java.lang.String)
//  .impersonateServiceAccount(java.lang.String)
//  .impersonateServiceAccountDelegates(java.util.List<java.lang.String>)
//  .integrationConnectorsCustomEndpoint(java.lang.String)
//  .integrationsCustomEndpoint(java.lang.String)
//  .kmsCustomEndpoint(java.lang.String)
//  .loggingCustomEndpoint(java.lang.String)
//  .lookerCustomEndpoint(java.lang.String)
//  .lustreCustomEndpoint(java.lang.String)
//  .managedKafkaCustomEndpoint(java.lang.String)
//  .memcacheCustomEndpoint(java.lang.String)
//  .memorystoreCustomEndpoint(java.lang.String)
//  .migrationCenterCustomEndpoint(java.lang.String)
//  .mlEngineCustomEndpoint(java.lang.String)
//  .modelArmorCustomEndpoint(java.lang.String)
//  .modelArmorGlobalCustomEndpoint(java.lang.String)
//  .monitoringCustomEndpoint(java.lang.String)
//  .netappCustomEndpoint(java.lang.String)
//  .networkConnectivityCustomEndpoint(java.lang.String)
//  .networkManagementCustomEndpoint(java.lang.String)
//  .networkSecurityCustomEndpoint(java.lang.String)
//  .networkServicesCustomEndpoint(java.lang.String)
//  .notebooksCustomEndpoint(java.lang.String)
//  .oracleDatabaseCustomEndpoint(java.lang.String)
//  .orgPolicyCustomEndpoint(java.lang.String)
//  .osConfigCustomEndpoint(java.lang.String)
//  .osConfigV2CustomEndpoint(java.lang.String)
//  .osLoginCustomEndpoint(java.lang.String)
//  .parallelstoreCustomEndpoint(java.lang.String)
//  .parameterManagerCustomEndpoint(java.lang.String)
//  .parameterManagerRegionalCustomEndpoint(java.lang.String)
//  .privatecaCustomEndpoint(java.lang.String)
//  .privilegedAccessManagerCustomEndpoint(java.lang.String)
//  .project(java.lang.String)
//  .publicCaCustomEndpoint(java.lang.String)
//  .pubsubCustomEndpoint(java.lang.String)
//  .pubsubLiteCustomEndpoint(java.lang.String)
//  .recaptchaEnterpriseCustomEndpoint(java.lang.String)
//  .redisCustomEndpoint(java.lang.String)
//  .region(java.lang.String)
//  .requestReason(java.lang.String)
//  .requestTimeout(java.lang.String)
//  .resourceManagerCustomEndpoint(java.lang.String)
//  .resourceManagerV3CustomEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretManagerCustomEndpoint(java.lang.String)
//  .secretManagerRegionalCustomEndpoint(java.lang.String)
//  .secureSourceManagerCustomEndpoint(java.lang.String)
//  .securityCenterCustomEndpoint(java.lang.String)
//  .securityCenterManagementCustomEndpoint(java.lang.String)
//  .securityCenterV2CustomEndpoint(java.lang.String)
//  .securitypostureCustomEndpoint(java.lang.String)
//  .serviceManagementCustomEndpoint(java.lang.String)
//  .serviceNetworkingCustomEndpoint(java.lang.String)
//  .serviceUsageCustomEndpoint(java.lang.String)
//  .siteVerificationCustomEndpoint(java.lang.String)
//  .sourceRepoCustomEndpoint(java.lang.String)
//  .spannerCustomEndpoint(java.lang.String)
//  .sqlCustomEndpoint(java.lang.String)
//  .storageBatchOperationsCustomEndpoint(java.lang.String)
//  .storageControlCustomEndpoint(java.lang.String)
//  .storageCustomEndpoint(java.lang.String)
//  .storageInsightsCustomEndpoint(java.lang.String)
//  .storageTransferCustomEndpoint(java.lang.String)
//  .tagsCustomEndpoint(java.lang.String)
//  .tagsLocationCustomEndpoint(java.lang.String)
//  .terraformAttributionLabelAdditionStrategy(java.lang.String)
//  .tpuCustomEndpoint(java.lang.String)
//  .transcoderCustomEndpoint(java.lang.String)
//  .universeDomain(java.lang.String)
//  .userProjectOverride(java.lang.Boolean)
//  .userProjectOverride(IResolvable)
//  .vertexAiCustomEndpoint(java.lang.String)
//  .vmwareengineCustomEndpoint(java.lang.String)
//  .vpcAccessCustomEndpoint(java.lang.String)
//  .workbenchCustomEndpoint(java.lang.String)
//  .workflowsCustomEndpoint(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.batching">batching</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>></code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingProject">billingProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.contactCenterInsightsCustomEndpoint">contactCenterInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.defaultLabels">defaultLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.externalCredentials">externalCredentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>></code> | external_credentials block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseAppHostingCustomEndpoint">firebaseAppHostingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseDataConnectCustomEndpoint">firebaseDataConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.lustreCustomEndpoint">lustreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.modelArmorCustomEndpoint">modelArmorCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.modelArmorGlobalCustomEndpoint">modelArmorGlobalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osConfigV2CustomEndpoint">osConfigV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestReason">requestReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageBatchOperationsCustomEndpoint">storageBatchOperationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageControlCustomEndpoint">storageControlCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.universeDomain">universeDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.userProjectOverride">userProjectOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#zone GoogleProvider#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessApprovalCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessContextManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_token GoogleProvider#access_token}.

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.activeDirectoryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.addTerraformAttributionLabel"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#alias GoogleProvider#alias}

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alloydbCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apigeeCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apihubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}.

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apikeysCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.appEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apphubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.artifactRegistryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.backupDrCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.batching"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#batching GoogleProvider#batching}

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.beyondcorpCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.biglakeCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigQueryCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryReservationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigtableCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingProject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_project GoogleProvider#billing_project}.

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.certificateManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.chronicleCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}.

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudAssetCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBillingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudbuildv2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddeployCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddomainsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudfunctions2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudFunctionsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdentityCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudQuotasCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunV2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudSchedulerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudTasksCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.colabCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}.

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.composerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.computeCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `contactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.contactCenterInsightsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}.

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAnalysisCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAttachedCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAwsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAzureCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.coreBillingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#credentials GoogleProvider#credentials}.

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataCatalogCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataflowCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataFusionCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataLossPreventionCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataPipelineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataplexCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocGdcCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.datastreamCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.defaultLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#default_labels GoogleProvider#default_labels}.

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.deploymentManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.developerConnectCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}.

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCxCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.discoveryEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dnsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgecontainerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgenetworkCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.essentialContactsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.eventarcCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `externalCredentials`<sup>Optional</sup> <a name="externalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.externalCredentials"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>>

external_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#external_credentials GoogleProvider#external_credentials}

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.filestoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseAppHostingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}.

---

##### `firebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseDataConnectCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}.

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaserulesCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firestoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.geminiCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}.

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeBackupCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHub2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkehubFeatureCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeonpremCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.healthcareCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iam2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iam3CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}.

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamBetaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCredentialsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iapCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.identityPlatformCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccountDelegates"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationConnectorsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.kmsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.loggingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.lookerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `lustreCustomEndpoint`<sup>Optional</sup> <a name="lustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.lustreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}.

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.managedKafkaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}.

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.memcacheCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.memorystoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}.

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.migrationCenterCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.mlEngineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `modelArmorCustomEndpoint`<sup>Optional</sup> <a name="modelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.modelArmorCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}.

---

##### `modelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.modelArmorGlobalCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}.

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.monitoringCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.netappCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkConnectivityCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkManagementCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkSecurityCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkServicesCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.notebooksCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.oracleDatabaseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}.

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.orgPolicyCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osConfigCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `osConfigV2CustomEndpoint`<sup>Optional</sup> <a name="osConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osConfigV2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}.

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osLoginCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.parallelstoreCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}.

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.parameterManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}.

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.parameterManagerRegionalCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}.

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.privatecaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.privilegedAccessManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#project GoogleProvider#project}.

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.publicCaCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubLiteCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.redisCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#region GoogleProvider#region}.

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestReason"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_reason GoogleProvider#request_reason}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerV3CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#scopes GoogleProvider#scopes}.

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secretManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secretManagerRegionalCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}.

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secureSourceManagerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterManagementCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}.

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterV2CustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}.

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securitypostureCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceManagementCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceNetworkingCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceUsageCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.siteVerificationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}.

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sourceRepoCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.spannerCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sqlCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `storageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageBatchOperationsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}.

---

##### `storageControlCustomEndpoint`<sup>Optional</sup> <a name="storageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageControlCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}.

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageInsightsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageTransferCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsLocationCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tpuCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.transcoderCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}.

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.universeDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.userProjectOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vertexAiCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vmwareengineCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vpcAccessCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workbenchCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workflowsCustomEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#zone GoogleProvider#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint">resetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint">resetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint">resetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel">resetAddTerraformAttributionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint">resetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint">resetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint">resetApihubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint">resetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint">resetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint">resetApphubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint">resetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint">resetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint">resetBackupDrCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBatching">resetBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint">resetBeyondcorpCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint">resetBiglakeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint">resetBigqueryAnalyticsHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint">resetBigqueryConnectionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint">resetBigQueryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint">resetBigqueryDatapolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint">resetBigqueryDataTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint">resetBigqueryReservationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint">resetBigtableCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint">resetBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBillingProject">resetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint">resetBinaryAuthorizationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint">resetBlockchainNodeEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint">resetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint">resetChronicleCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint">resetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint">resetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint">resetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint">resetCloudbuildv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint">resetCloudBuildWorkerPoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint">resetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint">resetClouddomainsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint">resetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint">resetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint">resetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint">resetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint">resetCloudQuotasCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint">resetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint">resetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint">resetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint">resetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint">resetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetColabCustomEndpoint">resetColabCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint">resetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint">resetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContactCenterInsightsCustomEndpoint">resetContactCenterInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint">resetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint">resetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint">resetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint">resetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint">resetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint">resetCoreBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint">resetDatabaseMigrationServiceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint">resetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint">resetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint">resetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint">resetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint">resetDataPipelineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint">resetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint">resetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint">resetDataprocGdcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint">resetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint">resetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels">resetDefaultLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint">resetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint">resetDeveloperConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint">resetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint">resetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint">resetDiscoveryEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint">resetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint">resetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint">resetDocumentAiWarehouseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint">resetEdgecontainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint">resetEdgenetworkCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint">resetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint">resetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetExternalCredentials">resetExternalCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint">resetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint">resetFirebaseAppCheckCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint">resetFirebaseAppHostingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint">resetFirebaseDataConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint">resetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint">resetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint">resetGeminiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint">resetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint">resetGkeHub2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint">resetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkehubFeatureCustomEndpoint">resetGkehubFeatureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint">resetGkeonpremCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint">resetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint">resetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint">resetIam3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint">resetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint">resetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint">resetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint">resetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint">resetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint">resetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount">resetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates">resetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint">resetIntegrationConnectorsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint">resetIntegrationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint">resetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint">resetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint">resetLookerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint">resetLustreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint">resetManagedKafkaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint">resetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint">resetMemorystoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint">resetMigrationCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint">resetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetModelArmorCustomEndpoint">resetModelArmorCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetModelArmorGlobalCustomEndpoint">resetModelArmorGlobalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint">resetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint">resetNetappCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint">resetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint">resetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint">resetNetworkSecurityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint">resetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint">resetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint">resetOracleDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint">resetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint">resetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint">resetOsConfigV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint">resetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint">resetParallelstoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint">resetParameterManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint">resetParameterManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint">resetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint">resetPrivilegedAccessManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint">resetPublicCaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint">resetPubsubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint">resetPubsubLiteCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint">resetRecaptchaEnterpriseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint">resetRedisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRequestReason">resetRequestReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint">resetResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint">resetResourceManagerV3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint">resetSecretManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint">resetSecretManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint">resetSecureSourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint">resetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint">resetSecurityCenterManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint">resetSecurityCenterV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint">resetSecuritypostureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint">resetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint">resetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint">resetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint">resetSiteVerificationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint">resetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint">resetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint">resetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint">resetStorageBatchOperationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint">resetStorageControlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint">resetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint">resetStorageInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint">resetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint">resetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint">resetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy">resetTerraformAttributionLabelAdditionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint">resetTpuCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint">resetTranscoderCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain">resetUniverseDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride">resetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint">resetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint">resetVmwareengineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint">resetVpcAccessCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint">resetWorkbenchCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint">resetWorkflowsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.provider.GoogleProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.provider.GoogleProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.provider.GoogleProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.provider.GoogleProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.provider.GoogleProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessApprovalCustomEndpoint` <a name="resetAccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint"></a>

```java
public void resetAccessApprovalCustomEndpoint()
```

##### `resetAccessContextManagerCustomEndpoint` <a name="resetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint"></a>

```java
public void resetAccessContextManagerCustomEndpoint()
```

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetActiveDirectoryCustomEndpoint` <a name="resetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint"></a>

```java
public void resetActiveDirectoryCustomEndpoint()
```

##### `resetAddTerraformAttributionLabel` <a name="resetAddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel"></a>

```java
public void resetAddTerraformAttributionLabel()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-google.provider.GoogleProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAlloydbCustomEndpoint` <a name="resetAlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint"></a>

```java
public void resetAlloydbCustomEndpoint()
```

##### `resetApigeeCustomEndpoint` <a name="resetApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint"></a>

```java
public void resetApigeeCustomEndpoint()
```

##### `resetApihubCustomEndpoint` <a name="resetApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint"></a>

```java
public void resetApihubCustomEndpoint()
```

##### `resetApikeysCustomEndpoint` <a name="resetApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint"></a>

```java
public void resetApikeysCustomEndpoint()
```

##### `resetAppEngineCustomEndpoint` <a name="resetAppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint"></a>

```java
public void resetAppEngineCustomEndpoint()
```

##### `resetApphubCustomEndpoint` <a name="resetApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint"></a>

```java
public void resetApphubCustomEndpoint()
```

##### `resetArtifactRegistryCustomEndpoint` <a name="resetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint"></a>

```java
public void resetArtifactRegistryCustomEndpoint()
```

##### `resetAssuredWorkloadsCustomEndpoint` <a name="resetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```java
public void resetAssuredWorkloadsCustomEndpoint()
```

##### `resetBackupDrCustomEndpoint` <a name="resetBackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint"></a>

```java
public void resetBackupDrCustomEndpoint()
```

##### `resetBatching` <a name="resetBatching" id="@cdktf/provider-google.provider.GoogleProvider.resetBatching"></a>

```java
public void resetBatching()
```

##### `resetBeyondcorpCustomEndpoint` <a name="resetBeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint"></a>

```java
public void resetBeyondcorpCustomEndpoint()
```

##### `resetBiglakeCustomEndpoint` <a name="resetBiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint"></a>

```java
public void resetBiglakeCustomEndpoint()
```

##### `resetBigqueryAnalyticsHubCustomEndpoint` <a name="resetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```java
public void resetBigqueryAnalyticsHubCustomEndpoint()
```

##### `resetBigqueryConnectionCustomEndpoint` <a name="resetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint"></a>

```java
public void resetBigqueryConnectionCustomEndpoint()
```

##### `resetBigQueryCustomEndpoint` <a name="resetBigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint"></a>

```java
public void resetBigQueryCustomEndpoint()
```

##### `resetBigqueryDatapolicyCustomEndpoint` <a name="resetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```java
public void resetBigqueryDatapolicyCustomEndpoint()
```

##### `resetBigqueryDataTransferCustomEndpoint` <a name="resetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```java
public void resetBigqueryDataTransferCustomEndpoint()
```

##### `resetBigqueryReservationCustomEndpoint` <a name="resetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint"></a>

```java
public void resetBigqueryReservationCustomEndpoint()
```

##### `resetBigtableCustomEndpoint` <a name="resetBigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint"></a>

```java
public void resetBigtableCustomEndpoint()
```

##### `resetBillingCustomEndpoint` <a name="resetBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint"></a>

```java
public void resetBillingCustomEndpoint()
```

##### `resetBillingProject` <a name="resetBillingProject" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingProject"></a>

```java
public void resetBillingProject()
```

##### `resetBinaryAuthorizationCustomEndpoint` <a name="resetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```java
public void resetBinaryAuthorizationCustomEndpoint()
```

##### `resetBlockchainNodeEngineCustomEndpoint` <a name="resetBlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```java
public void resetBlockchainNodeEngineCustomEndpoint()
```

##### `resetCertificateManagerCustomEndpoint` <a name="resetCertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint"></a>

```java
public void resetCertificateManagerCustomEndpoint()
```

##### `resetChronicleCustomEndpoint` <a name="resetChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint"></a>

```java
public void resetChronicleCustomEndpoint()
```

##### `resetCloudAssetCustomEndpoint` <a name="resetCloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint"></a>

```java
public void resetCloudAssetCustomEndpoint()
```

##### `resetCloudBillingCustomEndpoint` <a name="resetCloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint"></a>

```java
public void resetCloudBillingCustomEndpoint()
```

##### `resetCloudBuildCustomEndpoint` <a name="resetCloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint"></a>

```java
public void resetCloudBuildCustomEndpoint()
```

##### `resetCloudbuildv2CustomEndpoint` <a name="resetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint"></a>

```java
public void resetCloudbuildv2CustomEndpoint()
```

##### `resetCloudBuildWorkerPoolCustomEndpoint` <a name="resetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```java
public void resetCloudBuildWorkerPoolCustomEndpoint()
```

##### `resetClouddeployCustomEndpoint` <a name="resetClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint"></a>

```java
public void resetClouddeployCustomEndpoint()
```

##### `resetClouddomainsCustomEndpoint` <a name="resetClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint"></a>

```java
public void resetClouddomainsCustomEndpoint()
```

##### `resetCloudfunctions2CustomEndpoint` <a name="resetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint"></a>

```java
public void resetCloudfunctions2CustomEndpoint()
```

##### `resetCloudFunctionsCustomEndpoint` <a name="resetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint"></a>

```java
public void resetCloudFunctionsCustomEndpoint()
```

##### `resetCloudIdentityCustomEndpoint` <a name="resetCloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint"></a>

```java
public void resetCloudIdentityCustomEndpoint()
```

##### `resetCloudIdsCustomEndpoint` <a name="resetCloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint"></a>

```java
public void resetCloudIdsCustomEndpoint()
```

##### `resetCloudQuotasCustomEndpoint` <a name="resetCloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint"></a>

```java
public void resetCloudQuotasCustomEndpoint()
```

##### `resetCloudResourceManagerCustomEndpoint` <a name="resetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint"></a>

```java
public void resetCloudResourceManagerCustomEndpoint()
```

##### `resetCloudRunCustomEndpoint` <a name="resetCloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint"></a>

```java
public void resetCloudRunCustomEndpoint()
```

##### `resetCloudRunV2CustomEndpoint` <a name="resetCloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint"></a>

```java
public void resetCloudRunV2CustomEndpoint()
```

##### `resetCloudSchedulerCustomEndpoint` <a name="resetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint"></a>

```java
public void resetCloudSchedulerCustomEndpoint()
```

##### `resetCloudTasksCustomEndpoint` <a name="resetCloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint"></a>

```java
public void resetCloudTasksCustomEndpoint()
```

##### `resetColabCustomEndpoint` <a name="resetColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetColabCustomEndpoint"></a>

```java
public void resetColabCustomEndpoint()
```

##### `resetComposerCustomEndpoint` <a name="resetComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint"></a>

```java
public void resetComposerCustomEndpoint()
```

##### `resetComputeCustomEndpoint` <a name="resetComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint"></a>

```java
public void resetComputeCustomEndpoint()
```

##### `resetContactCenterInsightsCustomEndpoint` <a name="resetContactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContactCenterInsightsCustomEndpoint"></a>

```java
public void resetContactCenterInsightsCustomEndpoint()
```

##### `resetContainerAnalysisCustomEndpoint` <a name="resetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint"></a>

```java
public void resetContainerAnalysisCustomEndpoint()
```

##### `resetContainerAttachedCustomEndpoint` <a name="resetContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint"></a>

```java
public void resetContainerAttachedCustomEndpoint()
```

##### `resetContainerAwsCustomEndpoint` <a name="resetContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint"></a>

```java
public void resetContainerAwsCustomEndpoint()
```

##### `resetContainerAzureCustomEndpoint` <a name="resetContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint"></a>

```java
public void resetContainerAzureCustomEndpoint()
```

##### `resetContainerCustomEndpoint` <a name="resetContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint"></a>

```java
public void resetContainerCustomEndpoint()
```

##### `resetCoreBillingCustomEndpoint` <a name="resetCoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint"></a>

```java
public void resetCoreBillingCustomEndpoint()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDatabaseMigrationServiceCustomEndpoint` <a name="resetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```java
public void resetDatabaseMigrationServiceCustomEndpoint()
```

##### `resetDataCatalogCustomEndpoint` <a name="resetDataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint"></a>

```java
public void resetDataCatalogCustomEndpoint()
```

##### `resetDataflowCustomEndpoint` <a name="resetDataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint"></a>

```java
public void resetDataflowCustomEndpoint()
```

##### `resetDataFusionCustomEndpoint` <a name="resetDataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint"></a>

```java
public void resetDataFusionCustomEndpoint()
```

##### `resetDataLossPreventionCustomEndpoint` <a name="resetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint"></a>

```java
public void resetDataLossPreventionCustomEndpoint()
```

##### `resetDataPipelineCustomEndpoint` <a name="resetDataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint"></a>

```java
public void resetDataPipelineCustomEndpoint()
```

##### `resetDataplexCustomEndpoint` <a name="resetDataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint"></a>

```java
public void resetDataplexCustomEndpoint()
```

##### `resetDataprocCustomEndpoint` <a name="resetDataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint"></a>

```java
public void resetDataprocCustomEndpoint()
```

##### `resetDataprocGdcCustomEndpoint` <a name="resetDataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint"></a>

```java
public void resetDataprocGdcCustomEndpoint()
```

##### `resetDataprocMetastoreCustomEndpoint` <a name="resetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint"></a>

```java
public void resetDataprocMetastoreCustomEndpoint()
```

##### `resetDatastreamCustomEndpoint` <a name="resetDatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint"></a>

```java
public void resetDatastreamCustomEndpoint()
```

##### `resetDefaultLabels` <a name="resetDefaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels"></a>

```java
public void resetDefaultLabels()
```

##### `resetDeploymentManagerCustomEndpoint` <a name="resetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint"></a>

```java
public void resetDeploymentManagerCustomEndpoint()
```

##### `resetDeveloperConnectCustomEndpoint` <a name="resetDeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint"></a>

```java
public void resetDeveloperConnectCustomEndpoint()
```

##### `resetDialogflowCustomEndpoint` <a name="resetDialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint"></a>

```java
public void resetDialogflowCustomEndpoint()
```

##### `resetDialogflowCxCustomEndpoint` <a name="resetDialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint"></a>

```java
public void resetDialogflowCxCustomEndpoint()
```

##### `resetDiscoveryEngineCustomEndpoint` <a name="resetDiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint"></a>

```java
public void resetDiscoveryEngineCustomEndpoint()
```

##### `resetDnsCustomEndpoint` <a name="resetDnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint"></a>

```java
public void resetDnsCustomEndpoint()
```

##### `resetDocumentAiCustomEndpoint` <a name="resetDocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint"></a>

```java
public void resetDocumentAiCustomEndpoint()
```

##### `resetDocumentAiWarehouseCustomEndpoint` <a name="resetDocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```java
public void resetDocumentAiWarehouseCustomEndpoint()
```

##### `resetEdgecontainerCustomEndpoint` <a name="resetEdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint"></a>

```java
public void resetEdgecontainerCustomEndpoint()
```

##### `resetEdgenetworkCustomEndpoint` <a name="resetEdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint"></a>

```java
public void resetEdgenetworkCustomEndpoint()
```

##### `resetEssentialContactsCustomEndpoint` <a name="resetEssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint"></a>

```java
public void resetEssentialContactsCustomEndpoint()
```

##### `resetEventarcCustomEndpoint` <a name="resetEventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint"></a>

```java
public void resetEventarcCustomEndpoint()
```

##### `resetExternalCredentials` <a name="resetExternalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetExternalCredentials"></a>

```java
public void resetExternalCredentials()
```

##### `resetFilestoreCustomEndpoint` <a name="resetFilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint"></a>

```java
public void resetFilestoreCustomEndpoint()
```

##### `resetFirebaseAppCheckCustomEndpoint` <a name="resetFirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```java
public void resetFirebaseAppCheckCustomEndpoint()
```

##### `resetFirebaseAppHostingCustomEndpoint` <a name="resetFirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint"></a>

```java
public void resetFirebaseAppHostingCustomEndpoint()
```

##### `resetFirebaseDataConnectCustomEndpoint` <a name="resetFirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint"></a>

```java
public void resetFirebaseDataConnectCustomEndpoint()
```

##### `resetFirebaserulesCustomEndpoint` <a name="resetFirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint"></a>

```java
public void resetFirebaserulesCustomEndpoint()
```

##### `resetFirestoreCustomEndpoint` <a name="resetFirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint"></a>

```java
public void resetFirestoreCustomEndpoint()
```

##### `resetGeminiCustomEndpoint` <a name="resetGeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint"></a>

```java
public void resetGeminiCustomEndpoint()
```

##### `resetGkeBackupCustomEndpoint` <a name="resetGkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint"></a>

```java
public void resetGkeBackupCustomEndpoint()
```

##### `resetGkeHub2CustomEndpoint` <a name="resetGkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint"></a>

```java
public void resetGkeHub2CustomEndpoint()
```

##### `resetGkeHubCustomEndpoint` <a name="resetGkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint"></a>

```java
public void resetGkeHubCustomEndpoint()
```

##### `resetGkehubFeatureCustomEndpoint` <a name="resetGkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkehubFeatureCustomEndpoint"></a>

```java
public void resetGkehubFeatureCustomEndpoint()
```

##### `resetGkeonpremCustomEndpoint` <a name="resetGkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint"></a>

```java
public void resetGkeonpremCustomEndpoint()
```

##### `resetHealthcareCustomEndpoint` <a name="resetHealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint"></a>

```java
public void resetHealthcareCustomEndpoint()
```

##### `resetIam2CustomEndpoint` <a name="resetIam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint"></a>

```java
public void resetIam2CustomEndpoint()
```

##### `resetIam3CustomEndpoint` <a name="resetIam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint"></a>

```java
public void resetIam3CustomEndpoint()
```

##### `resetIamBetaCustomEndpoint` <a name="resetIamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint"></a>

```java
public void resetIamBetaCustomEndpoint()
```

##### `resetIamCredentialsCustomEndpoint` <a name="resetIamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint"></a>

```java
public void resetIamCredentialsCustomEndpoint()
```

##### `resetIamCustomEndpoint` <a name="resetIamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint"></a>

```java
public void resetIamCustomEndpoint()
```

##### `resetIamWorkforcePoolCustomEndpoint` <a name="resetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```java
public void resetIamWorkforcePoolCustomEndpoint()
```

##### `resetIapCustomEndpoint` <a name="resetIapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint"></a>

```java
public void resetIapCustomEndpoint()
```

##### `resetIdentityPlatformCustomEndpoint` <a name="resetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint"></a>

```java
public void resetIdentityPlatformCustomEndpoint()
```

##### `resetImpersonateServiceAccount` <a name="resetImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount"></a>

```java
public void resetImpersonateServiceAccount()
```

##### `resetImpersonateServiceAccountDelegates` <a name="resetImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates"></a>

```java
public void resetImpersonateServiceAccountDelegates()
```

##### `resetIntegrationConnectorsCustomEndpoint` <a name="resetIntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```java
public void resetIntegrationConnectorsCustomEndpoint()
```

##### `resetIntegrationsCustomEndpoint` <a name="resetIntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint"></a>

```java
public void resetIntegrationsCustomEndpoint()
```

##### `resetKmsCustomEndpoint` <a name="resetKmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint"></a>

```java
public void resetKmsCustomEndpoint()
```

##### `resetLoggingCustomEndpoint` <a name="resetLoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint"></a>

```java
public void resetLoggingCustomEndpoint()
```

##### `resetLookerCustomEndpoint` <a name="resetLookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint"></a>

```java
public void resetLookerCustomEndpoint()
```

##### `resetLustreCustomEndpoint` <a name="resetLustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint"></a>

```java
public void resetLustreCustomEndpoint()
```

##### `resetManagedKafkaCustomEndpoint` <a name="resetManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint"></a>

```java
public void resetManagedKafkaCustomEndpoint()
```

##### `resetMemcacheCustomEndpoint` <a name="resetMemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint"></a>

```java
public void resetMemcacheCustomEndpoint()
```

##### `resetMemorystoreCustomEndpoint` <a name="resetMemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint"></a>

```java
public void resetMemorystoreCustomEndpoint()
```

##### `resetMigrationCenterCustomEndpoint` <a name="resetMigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint"></a>

```java
public void resetMigrationCenterCustomEndpoint()
```

##### `resetMlEngineCustomEndpoint` <a name="resetMlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint"></a>

```java
public void resetMlEngineCustomEndpoint()
```

##### `resetModelArmorCustomEndpoint` <a name="resetModelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetModelArmorCustomEndpoint"></a>

```java
public void resetModelArmorCustomEndpoint()
```

##### `resetModelArmorGlobalCustomEndpoint` <a name="resetModelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetModelArmorGlobalCustomEndpoint"></a>

```java
public void resetModelArmorGlobalCustomEndpoint()
```

##### `resetMonitoringCustomEndpoint` <a name="resetMonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint"></a>

```java
public void resetMonitoringCustomEndpoint()
```

##### `resetNetappCustomEndpoint` <a name="resetNetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint"></a>

```java
public void resetNetappCustomEndpoint()
```

##### `resetNetworkConnectivityCustomEndpoint` <a name="resetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint"></a>

```java
public void resetNetworkConnectivityCustomEndpoint()
```

##### `resetNetworkManagementCustomEndpoint` <a name="resetNetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint"></a>

```java
public void resetNetworkManagementCustomEndpoint()
```

##### `resetNetworkSecurityCustomEndpoint` <a name="resetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint"></a>

```java
public void resetNetworkSecurityCustomEndpoint()
```

##### `resetNetworkServicesCustomEndpoint` <a name="resetNetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint"></a>

```java
public void resetNetworkServicesCustomEndpoint()
```

##### `resetNotebooksCustomEndpoint` <a name="resetNotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint"></a>

```java
public void resetNotebooksCustomEndpoint()
```

##### `resetOracleDatabaseCustomEndpoint` <a name="resetOracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint"></a>

```java
public void resetOracleDatabaseCustomEndpoint()
```

##### `resetOrgPolicyCustomEndpoint` <a name="resetOrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint"></a>

```java
public void resetOrgPolicyCustomEndpoint()
```

##### `resetOsConfigCustomEndpoint` <a name="resetOsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint"></a>

```java
public void resetOsConfigCustomEndpoint()
```

##### `resetOsConfigV2CustomEndpoint` <a name="resetOsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint"></a>

```java
public void resetOsConfigV2CustomEndpoint()
```

##### `resetOsLoginCustomEndpoint` <a name="resetOsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint"></a>

```java
public void resetOsLoginCustomEndpoint()
```

##### `resetParallelstoreCustomEndpoint` <a name="resetParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint"></a>

```java
public void resetParallelstoreCustomEndpoint()
```

##### `resetParameterManagerCustomEndpoint` <a name="resetParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint"></a>

```java
public void resetParameterManagerCustomEndpoint()
```

##### `resetParameterManagerRegionalCustomEndpoint` <a name="resetParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint"></a>

```java
public void resetParameterManagerRegionalCustomEndpoint()
```

##### `resetPrivatecaCustomEndpoint` <a name="resetPrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint"></a>

```java
public void resetPrivatecaCustomEndpoint()
```

##### `resetPrivilegedAccessManagerCustomEndpoint` <a name="resetPrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```java
public void resetPrivilegedAccessManagerCustomEndpoint()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.provider.GoogleProvider.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicCaCustomEndpoint` <a name="resetPublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint"></a>

```java
public void resetPublicCaCustomEndpoint()
```

##### `resetPubsubCustomEndpoint` <a name="resetPubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint"></a>

```java
public void resetPubsubCustomEndpoint()
```

##### `resetPubsubLiteCustomEndpoint` <a name="resetPubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint"></a>

```java
public void resetPubsubLiteCustomEndpoint()
```

##### `resetRecaptchaEnterpriseCustomEndpoint` <a name="resetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```java
public void resetRecaptchaEnterpriseCustomEndpoint()
```

##### `resetRedisCustomEndpoint` <a name="resetRedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint"></a>

```java
public void resetRedisCustomEndpoint()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.provider.GoogleProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRequestReason` <a name="resetRequestReason" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestReason"></a>

```java
public void resetRequestReason()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetResourceManagerCustomEndpoint` <a name="resetResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint"></a>

```java
public void resetResourceManagerCustomEndpoint()
```

##### `resetResourceManagerV3CustomEndpoint` <a name="resetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint"></a>

```java
public void resetResourceManagerV3CustomEndpoint()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-google.provider.GoogleProvider.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSecretManagerCustomEndpoint` <a name="resetSecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint"></a>

```java
public void resetSecretManagerCustomEndpoint()
```

##### `resetSecretManagerRegionalCustomEndpoint` <a name="resetSecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```java
public void resetSecretManagerRegionalCustomEndpoint()
```

##### `resetSecureSourceManagerCustomEndpoint` <a name="resetSecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint"></a>

```java
public void resetSecureSourceManagerCustomEndpoint()
```

##### `resetSecurityCenterCustomEndpoint` <a name="resetSecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint"></a>

```java
public void resetSecurityCenterCustomEndpoint()
```

##### `resetSecurityCenterManagementCustomEndpoint` <a name="resetSecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```java
public void resetSecurityCenterManagementCustomEndpoint()
```

##### `resetSecurityCenterV2CustomEndpoint` <a name="resetSecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint"></a>

```java
public void resetSecurityCenterV2CustomEndpoint()
```

##### `resetSecuritypostureCustomEndpoint` <a name="resetSecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint"></a>

```java
public void resetSecuritypostureCustomEndpoint()
```

##### `resetServiceManagementCustomEndpoint` <a name="resetServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint"></a>

```java
public void resetServiceManagementCustomEndpoint()
```

##### `resetServiceNetworkingCustomEndpoint` <a name="resetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint"></a>

```java
public void resetServiceNetworkingCustomEndpoint()
```

##### `resetServiceUsageCustomEndpoint` <a name="resetServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint"></a>

```java
public void resetServiceUsageCustomEndpoint()
```

##### `resetSiteVerificationCustomEndpoint` <a name="resetSiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint"></a>

```java
public void resetSiteVerificationCustomEndpoint()
```

##### `resetSourceRepoCustomEndpoint` <a name="resetSourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint"></a>

```java
public void resetSourceRepoCustomEndpoint()
```

##### `resetSpannerCustomEndpoint` <a name="resetSpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint"></a>

```java
public void resetSpannerCustomEndpoint()
```

##### `resetSqlCustomEndpoint` <a name="resetSqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint"></a>

```java
public void resetSqlCustomEndpoint()
```

##### `resetStorageBatchOperationsCustomEndpoint` <a name="resetStorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint"></a>

```java
public void resetStorageBatchOperationsCustomEndpoint()
```

##### `resetStorageControlCustomEndpoint` <a name="resetStorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint"></a>

```java
public void resetStorageControlCustomEndpoint()
```

##### `resetStorageCustomEndpoint` <a name="resetStorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint"></a>

```java
public void resetStorageCustomEndpoint()
```

##### `resetStorageInsightsCustomEndpoint` <a name="resetStorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint"></a>

```java
public void resetStorageInsightsCustomEndpoint()
```

##### `resetStorageTransferCustomEndpoint` <a name="resetStorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint"></a>

```java
public void resetStorageTransferCustomEndpoint()
```

##### `resetTagsCustomEndpoint` <a name="resetTagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint"></a>

```java
public void resetTagsCustomEndpoint()
```

##### `resetTagsLocationCustomEndpoint` <a name="resetTagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint"></a>

```java
public void resetTagsLocationCustomEndpoint()
```

##### `resetTerraformAttributionLabelAdditionStrategy` <a name="resetTerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```java
public void resetTerraformAttributionLabelAdditionStrategy()
```

##### `resetTpuCustomEndpoint` <a name="resetTpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint"></a>

```java
public void resetTpuCustomEndpoint()
```

##### `resetTranscoderCustomEndpoint` <a name="resetTranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint"></a>

```java
public void resetTranscoderCustomEndpoint()
```

##### `resetUniverseDomain` <a name="resetUniverseDomain" id="@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain"></a>

```java
public void resetUniverseDomain()
```

##### `resetUserProjectOverride` <a name="resetUserProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride"></a>

```java
public void resetUserProjectOverride()
```

##### `resetVertexAiCustomEndpoint` <a name="resetVertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint"></a>

```java
public void resetVertexAiCustomEndpoint()
```

##### `resetVmwareengineCustomEndpoint` <a name="resetVmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint"></a>

```java
public void resetVmwareengineCustomEndpoint()
```

##### `resetVpcAccessCustomEndpoint` <a name="resetVpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint"></a>

```java
public void resetVpcAccessCustomEndpoint()
```

##### `resetWorkbenchCustomEndpoint` <a name="resetWorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint"></a>

```java
public void resetWorkbenchCustomEndpoint()
```

##### `resetWorkflowsCustomEndpoint` <a name="resetWorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint"></a>

```java
public void resetWorkflowsCustomEndpoint()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.provider.GoogleProvider.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProvider;

GoogleProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProvider;

GoogleProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProvider;

GoogleProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProvider;

GoogleProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput">accessApprovalCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput">accessContextManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput">activeDirectoryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput">addTerraformAttributionLabelInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput">alloydbCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput">apigeeCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput">apihubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput">apikeysCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput">appEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput">apphubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput">artifactRegistryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput">assuredWorkloadsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput">backupDrCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batchingInput">batchingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput">beyondcorpCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput">biglakeCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput">bigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput">bigqueryConnectionCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput">bigQueryCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput">bigqueryDatapolicyCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput">bigqueryDataTransferCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput">bigqueryReservationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput">bigtableCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput">billingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput">billingProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput">binaryAuthorizationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput">blockchainNodeEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput">certificateManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput">chronicleCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput">cloudAssetCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput">cloudBillingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput">cloudBuildCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput">cloudbuildv2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput">cloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput">clouddeployCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput">clouddomainsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput">cloudfunctions2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput">cloudFunctionsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput">cloudIdentityCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput">cloudIdsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput">cloudQuotasCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput">cloudResourceManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput">cloudRunCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput">cloudRunV2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput">cloudSchedulerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput">cloudTasksCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput">colabCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput">composerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput">computeCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpointInput">contactCenterInsightsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput">containerAnalysisCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput">containerAttachedCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput">containerAwsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput">containerAzureCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput">containerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput">coreBillingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput">databaseMigrationServiceCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput">dataCatalogCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput">dataflowCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput">dataFusionCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput">dataLossPreventionCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput">dataPipelineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput">dataplexCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput">dataprocCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput">dataprocGdcCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput">dataprocMetastoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput">datastreamCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput">defaultLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput">deploymentManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput">developerConnectCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput">dialogflowCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput">dialogflowCxCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput">discoveryEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput">dnsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput">documentAiCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput">documentAiWarehouseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput">edgecontainerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput">edgenetworkCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput">essentialContactsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput">eventarcCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.externalCredentialsInput">externalCredentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput">filestoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput">firebaseAppCheckCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput">firebaseAppHostingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput">firebaseDataConnectCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput">firebaserulesCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput">firestoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput">geminiCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput">gkeBackupCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput">gkeHub2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput">gkeHubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpointInput">gkehubFeatureCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput">gkeonpremCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput">healthcareCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput">iam2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput">iam3CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput">iamBetaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput">iamCredentialsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput">iamCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput">iamWorkforcePoolCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput">iapCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput">identityPlatformCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput">impersonateServiceAccountDelegatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput">impersonateServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput">integrationConnectorsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput">integrationsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput">kmsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput">loggingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput">lookerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput">lustreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput">managedKafkaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput">memcacheCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput">memorystoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput">migrationCenterCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput">mlEngineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpointInput">modelArmorCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpointInput">modelArmorGlobalCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput">monitoringCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput">netappCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput">networkConnectivityCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput">networkManagementCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput">networkSecurityCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput">networkServicesCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput">notebooksCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput">oracleDatabaseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput">orgPolicyCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput">osConfigCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput">osConfigV2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput">osLoginCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput">parallelstoreCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput">parameterManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput">parameterManagerRegionalCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput">privatecaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput">privilegedAccessManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput">publicCaCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput">pubsubCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput">pubsubLiteCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput">recaptchaEnterpriseCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput">redisCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput">requestReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput">resourceManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput">resourceManagerV3CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput">secretManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput">secretManagerRegionalCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput">secureSourceManagerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput">securityCenterCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput">securityCenterManagementCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput">securityCenterV2CustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput">securitypostureCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput">serviceManagementCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput">serviceNetworkingCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput">serviceUsageCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput">siteVerificationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput">sourceRepoCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput">spannerCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput">sqlCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput">storageBatchOperationsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput">storageControlCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput">storageCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput">storageInsightsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput">storageTransferCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput">tagsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput">tagsLocationCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput">terraformAttributionLabelAdditionStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput">tpuCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput">transcoderCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput">universeDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput">userProjectOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput">vertexAiCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput">vmwareengineCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput">vpcAccessCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput">workbenchCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput">workflowsCustomEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batching">batching</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpoint">contactCenterInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels">defaultLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.externalCredentials">externalCredentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint">firebaseAppHostingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint">firebaseDataConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint">lustreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpoint">modelArmorCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpoint">modelArmorGlobalCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint">osConfigV2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReason">requestReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint">storageBatchOperationsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint">storageControlCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomain">universeDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride">userProjectOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.provider.GoogleProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.provider.GoogleProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google.provider.GoogleProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="accessApprovalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput"></a>

```java
public java.lang.String getAccessApprovalCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `accessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="accessContextManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput"></a>

```java
public java.lang.String getAccessContextManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="activeDirectoryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput"></a>

```java
public java.lang.String getActiveDirectoryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `addTerraformAttributionLabelInput`<sup>Optional</sup> <a name="addTerraformAttributionLabelInput" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput"></a>

```java
public java.lang.Object getAddTerraformAttributionLabelInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google.provider.GoogleProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `alloydbCustomEndpointInput`<sup>Optional</sup> <a name="alloydbCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput"></a>

```java
public java.lang.String getAlloydbCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apigeeCustomEndpointInput`<sup>Optional</sup> <a name="apigeeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput"></a>

```java
public java.lang.String getApigeeCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apihubCustomEndpointInput`<sup>Optional</sup> <a name="apihubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput"></a>

```java
public java.lang.String getApihubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apikeysCustomEndpointInput`<sup>Optional</sup> <a name="apikeysCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput"></a>

```java
public java.lang.String getApikeysCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `appEngineCustomEndpointInput`<sup>Optional</sup> <a name="appEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput"></a>

```java
public java.lang.String getAppEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `apphubCustomEndpointInput`<sup>Optional</sup> <a name="apphubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput"></a>

```java
public java.lang.String getApphubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `artifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="artifactRegistryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput"></a>

```java
public java.lang.String getArtifactRegistryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `assuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```java
public java.lang.String getAssuredWorkloadsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `backupDrCustomEndpointInput`<sup>Optional</sup> <a name="backupDrCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput"></a>

```java
public java.lang.String getBackupDrCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `batchingInput`<sup>Optional</sup> <a name="batchingInput" id="@cdktf/provider-google.provider.GoogleProvider.property.batchingInput"></a>

```java
public java.lang.Object getBatchingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>>

---

##### `beyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="beyondcorpCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput"></a>

```java
public java.lang.String getBeyondcorpCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `biglakeCustomEndpointInput`<sup>Optional</sup> <a name="biglakeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput"></a>

```java
public java.lang.String getBiglakeCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryAnalyticsHubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryConnectionCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigQueryCustomEndpointInput`<sup>Optional</sup> <a name="bigQueryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput"></a>

```java
public java.lang.String getBigQueryCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryDatapolicyCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryDataTransferCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput"></a>

```java
public java.lang.String getBigqueryReservationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `bigtableCustomEndpointInput`<sup>Optional</sup> <a name="bigtableCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput"></a>

```java
public java.lang.String getBigtableCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `billingCustomEndpointInput`<sup>Optional</sup> <a name="billingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput"></a>

```java
public java.lang.String getBillingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput"></a>

```java
public java.lang.String getBillingProjectInput();
```

- *Type:* java.lang.String

---

##### `binaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```java
public java.lang.String getBinaryAuthorizationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `blockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```java
public java.lang.String getBlockchainNodeEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `certificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="certificateManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput"></a>

```java
public java.lang.String getCertificateManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `chronicleCustomEndpointInput`<sup>Optional</sup> <a name="chronicleCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput"></a>

```java
public java.lang.String getChronicleCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="cloudAssetCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput"></a>

```java
public java.lang.String getCloudAssetCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="cloudBillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput"></a>

```java
public java.lang.String getCloudBillingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput"></a>

```java
public java.lang.String getCloudBuildCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput"></a>

```java
public java.lang.String getCloudbuildv2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudBuildWorkerPoolCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```java
public java.lang.String getCloudBuildWorkerPoolCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `clouddeployCustomEndpointInput`<sup>Optional</sup> <a name="clouddeployCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput"></a>

```java
public java.lang.String getClouddeployCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `clouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="clouddomainsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput"></a>

```java
public java.lang.String getClouddomainsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput"></a>

```java
public java.lang.String getCloudfunctions2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput"></a>

```java
public java.lang.String getCloudFunctionsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdentityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput"></a>

```java
public java.lang.String getCloudIdentityCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput"></a>

```java
public java.lang.String getCloudIdsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="cloudQuotasCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput"></a>

```java
public java.lang.String getCloudQuotasCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```java
public java.lang.String getCloudResourceManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudRunCustomEndpointInput`<sup>Optional</sup> <a name="cloudRunCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput"></a>

```java
public java.lang.String getCloudRunCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="cloudRunV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput"></a>

```java
public java.lang.String getCloudRunV2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput"></a>

```java
public java.lang.String getCloudSchedulerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `cloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="cloudTasksCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput"></a>

```java
public java.lang.String getCloudTasksCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `colabCustomEndpointInput`<sup>Optional</sup> <a name="colabCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput"></a>

```java
public java.lang.String getColabCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `composerCustomEndpointInput`<sup>Optional</sup> <a name="composerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput"></a>

```java
public java.lang.String getComposerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `computeCustomEndpointInput`<sup>Optional</sup> <a name="computeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput"></a>

```java
public java.lang.String getComputeCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `contactCenterInsightsCustomEndpointInput`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpointInput"></a>

```java
public java.lang.String getContactCenterInsightsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="containerAnalysisCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput"></a>

```java
public java.lang.String getContainerAnalysisCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="containerAttachedCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput"></a>

```java
public java.lang.String getContainerAttachedCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAwsCustomEndpointInput`<sup>Optional</sup> <a name="containerAwsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput"></a>

```java
public java.lang.String getContainerAwsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerAzureCustomEndpointInput`<sup>Optional</sup> <a name="containerAzureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput"></a>

```java
public java.lang.String getContainerAzureCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `containerCustomEndpointInput`<sup>Optional</sup> <a name="containerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput"></a>

```java
public java.lang.String getContainerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `coreBillingCustomEndpointInput`<sup>Optional</sup> <a name="coreBillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput"></a>

```java
public java.lang.String getCoreBillingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `databaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```java
public java.lang.String getDatabaseMigrationServiceCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="dataCatalogCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput"></a>

```java
public java.lang.String getDataCatalogCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataflowCustomEndpointInput`<sup>Optional</sup> <a name="dataflowCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput"></a>

```java
public java.lang.String getDataflowCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataFusionCustomEndpointInput`<sup>Optional</sup> <a name="dataFusionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput"></a>

```java
public java.lang.String getDataFusionCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput"></a>

```java
public java.lang.String getDataLossPreventionCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="dataPipelineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput"></a>

```java
public java.lang.String getDataPipelineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataplexCustomEndpointInput`<sup>Optional</sup> <a name="dataplexCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput"></a>

```java
public java.lang.String getDataplexCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataprocCustomEndpointInput`<sup>Optional</sup> <a name="dataprocCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput"></a>

```java
public java.lang.String getDataprocCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="dataprocGdcCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput"></a>

```java
public java.lang.String getDataprocGdcCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```java
public java.lang.String getDataprocMetastoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `datastreamCustomEndpointInput`<sup>Optional</sup> <a name="datastreamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput"></a>

```java
public java.lang.String getDatastreamCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `defaultLabelsInput`<sup>Optional</sup> <a name="defaultLabelsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="deploymentManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput"></a>

```java
public java.lang.String getDeploymentManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `developerConnectCustomEndpointInput`<sup>Optional</sup> <a name="developerConnectCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput"></a>

```java
public java.lang.String getDeveloperConnectCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dialogflowCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput"></a>

```java
public java.lang.String getDialogflowCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCxCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput"></a>

```java
public java.lang.String getDialogflowCxCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `discoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="discoveryEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput"></a>

```java
public java.lang.String getDiscoveryEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `dnsCustomEndpointInput`<sup>Optional</sup> <a name="dnsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput"></a>

```java
public java.lang.String getDnsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `documentAiCustomEndpointInput`<sup>Optional</sup> <a name="documentAiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput"></a>

```java
public java.lang.String getDocumentAiCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `documentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```java
public java.lang.String getDocumentAiWarehouseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `edgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="edgecontainerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput"></a>

```java
public java.lang.String getEdgecontainerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `edgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="edgenetworkCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput"></a>

```java
public java.lang.String getEdgenetworkCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `essentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="essentialContactsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput"></a>

```java
public java.lang.String getEssentialContactsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `eventarcCustomEndpointInput`<sup>Optional</sup> <a name="eventarcCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput"></a>

```java
public java.lang.String getEventarcCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `externalCredentialsInput`<sup>Optional</sup> <a name="externalCredentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.externalCredentialsInput"></a>

```java
public java.lang.Object getExternalCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>>

---

##### `filestoreCustomEndpointInput`<sup>Optional</sup> <a name="filestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput"></a>

```java
public java.lang.String getFilestoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseAppCheckCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseAppHostingCustomEndpointInput`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseAppHostingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaseDataConnectCustomEndpointInput`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput"></a>

```java
public java.lang.String getFirebaseDataConnectCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="firebaserulesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput"></a>

```java
public java.lang.String getFirebaserulesCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `firestoreCustomEndpointInput`<sup>Optional</sup> <a name="firestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput"></a>

```java
public java.lang.String getFirestoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `geminiCustomEndpointInput`<sup>Optional</sup> <a name="geminiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput"></a>

```java
public java.lang.String getGeminiCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="gkeBackupCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput"></a>

```java
public java.lang.String getGkeBackupCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="gkeHub2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput"></a>

```java
public java.lang.String getGkeHub2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeHubCustomEndpointInput`<sup>Optional</sup> <a name="gkeHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput"></a>

```java
public java.lang.String getGkeHubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkehubFeatureCustomEndpointInput`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpointInput"></a>

```java
public java.lang.String getGkehubFeatureCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `gkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="gkeonpremCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput"></a>

```java
public java.lang.String getGkeonpremCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `healthcareCustomEndpointInput`<sup>Optional</sup> <a name="healthcareCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput"></a>

```java
public java.lang.String getHealthcareCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iam2CustomEndpointInput`<sup>Optional</sup> <a name="iam2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput"></a>

```java
public java.lang.String getIam2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iam3CustomEndpointInput`<sup>Optional</sup> <a name="iam3CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput"></a>

```java
public java.lang.String getIam3CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamBetaCustomEndpointInput`<sup>Optional</sup> <a name="iamBetaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput"></a>

```java
public java.lang.String getIamBetaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="iamCredentialsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput"></a>

```java
public java.lang.String getIamCredentialsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamCustomEndpointInput`<sup>Optional</sup> <a name="iamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput"></a>

```java
public java.lang.String getIamCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```java
public java.lang.String getIamWorkforcePoolCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `iapCustomEndpointInput`<sup>Optional</sup> <a name="iapCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput"></a>

```java
public java.lang.String getIapCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="identityPlatformCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput"></a>

```java
public java.lang.String getIdentityPlatformCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `impersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="impersonateServiceAccountDelegatesInput" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput"></a>

```java
public java.util.List<java.lang.String> getImpersonateServiceAccountDelegatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `impersonateServiceAccountInput`<sup>Optional</sup> <a name="impersonateServiceAccountInput" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput"></a>

```java
public java.lang.String getImpersonateServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `integrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput"></a>

```java
public java.lang.String getIntegrationConnectorsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `integrationsCustomEndpointInput`<sup>Optional</sup> <a name="integrationsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput"></a>

```java
public java.lang.String getIntegrationsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `kmsCustomEndpointInput`<sup>Optional</sup> <a name="kmsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput"></a>

```java
public java.lang.String getKmsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `loggingCustomEndpointInput`<sup>Optional</sup> <a name="loggingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput"></a>

```java
public java.lang.String getLoggingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `lookerCustomEndpointInput`<sup>Optional</sup> <a name="lookerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput"></a>

```java
public java.lang.String getLookerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `lustreCustomEndpointInput`<sup>Optional</sup> <a name="lustreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput"></a>

```java
public java.lang.String getLustreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `managedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="managedKafkaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput"></a>

```java
public java.lang.String getManagedKafkaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `memcacheCustomEndpointInput`<sup>Optional</sup> <a name="memcacheCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput"></a>

```java
public java.lang.String getMemcacheCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `memorystoreCustomEndpointInput`<sup>Optional</sup> <a name="memorystoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput"></a>

```java
public java.lang.String getMemorystoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `migrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="migrationCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput"></a>

```java
public java.lang.String getMigrationCenterCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `mlEngineCustomEndpointInput`<sup>Optional</sup> <a name="mlEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput"></a>

```java
public java.lang.String getMlEngineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `modelArmorCustomEndpointInput`<sup>Optional</sup> <a name="modelArmorCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpointInput"></a>

```java
public java.lang.String getModelArmorCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `modelArmorGlobalCustomEndpointInput`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpointInput"></a>

```java
public java.lang.String getModelArmorGlobalCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `monitoringCustomEndpointInput`<sup>Optional</sup> <a name="monitoringCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput"></a>

```java
public java.lang.String getMonitoringCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `netappCustomEndpointInput`<sup>Optional</sup> <a name="netappCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput"></a>

```java
public java.lang.String getNetappCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="networkConnectivityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput"></a>

```java
public java.lang.String getNetworkConnectivityCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkManagementCustomEndpointInput`<sup>Optional</sup> <a name="networkManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput"></a>

```java
public java.lang.String getNetworkManagementCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="networkSecurityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput"></a>

```java
public java.lang.String getNetworkSecurityCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `networkServicesCustomEndpointInput`<sup>Optional</sup> <a name="networkServicesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput"></a>

```java
public java.lang.String getNetworkServicesCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `notebooksCustomEndpointInput`<sup>Optional</sup> <a name="notebooksCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput"></a>

```java
public java.lang.String getNotebooksCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `oracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput"></a>

```java
public java.lang.String getOracleDatabaseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `orgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="orgPolicyCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput"></a>

```java
public java.lang.String getOrgPolicyCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `osConfigCustomEndpointInput`<sup>Optional</sup> <a name="osConfigCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput"></a>

```java
public java.lang.String getOsConfigCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `osConfigV2CustomEndpointInput`<sup>Optional</sup> <a name="osConfigV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput"></a>

```java
public java.lang.String getOsConfigV2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `osLoginCustomEndpointInput`<sup>Optional</sup> <a name="osLoginCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput"></a>

```java
public java.lang.String getOsLoginCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `parallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="parallelstoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput"></a>

```java
public java.lang.String getParallelstoreCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `parameterManagerCustomEndpointInput`<sup>Optional</sup> <a name="parameterManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput"></a>

```java
public java.lang.String getParameterManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `parameterManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput"></a>

```java
public java.lang.String getParameterManagerRegionalCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `privatecaCustomEndpointInput`<sup>Optional</sup> <a name="privatecaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput"></a>

```java
public java.lang.String getPrivatecaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `privilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```java
public java.lang.String getPrivilegedAccessManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicCaCustomEndpointInput`<sup>Optional</sup> <a name="publicCaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput"></a>

```java
public java.lang.String getPublicCaCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `pubsubCustomEndpointInput`<sup>Optional</sup> <a name="pubsubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput"></a>

```java
public java.lang.String getPubsubCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `pubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="pubsubLiteCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput"></a>

```java
public java.lang.String getPubsubLiteCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `recaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```java
public java.lang.String getRecaptchaEnterpriseCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `redisCustomEndpointInput`<sup>Optional</sup> <a name="redisCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput"></a>

```java
public java.lang.String getRedisCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.provider.GoogleProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `requestReasonInput`<sup>Optional</sup> <a name="requestReasonInput" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput"></a>

```java
public java.lang.String getRequestReasonInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput"></a>

```java
public java.lang.String getRequestTimeoutInput();
```

- *Type:* java.lang.String

---

##### `resourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput"></a>

```java
public java.lang.String getResourceManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `resourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput"></a>

```java
public java.lang.String getResourceManagerV3CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google.provider.GoogleProvider.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretManagerCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput"></a>

```java
public java.lang.String getSecretManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `secretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```java
public java.lang.String getSecretManagerRegionalCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `secureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput"></a>

```java
public java.lang.String getSecureSourceManagerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityCenterCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput"></a>

```java
public java.lang.String getSecurityCenterCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput"></a>

```java
public java.lang.String getSecurityCenterManagementCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="securityCenterV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput"></a>

```java
public java.lang.String getSecurityCenterV2CustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `securitypostureCustomEndpointInput`<sup>Optional</sup> <a name="securitypostureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput"></a>

```java
public java.lang.String getSecuritypostureCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceManagementCustomEndpointInput`<sup>Optional</sup> <a name="serviceManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput"></a>

```java
public java.lang.String getServiceManagementCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput"></a>

```java
public java.lang.String getServiceNetworkingCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `serviceUsageCustomEndpointInput`<sup>Optional</sup> <a name="serviceUsageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput"></a>

```java
public java.lang.String getServiceUsageCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `siteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="siteVerificationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput"></a>

```java
public java.lang.String getSiteVerificationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `sourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="sourceRepoCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput"></a>

```java
public java.lang.String getSourceRepoCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `spannerCustomEndpointInput`<sup>Optional</sup> <a name="spannerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput"></a>

```java
public java.lang.String getSpannerCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `sqlCustomEndpointInput`<sup>Optional</sup> <a name="sqlCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput"></a>

```java
public java.lang.String getSqlCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageBatchOperationsCustomEndpointInput`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput"></a>

```java
public java.lang.String getStorageBatchOperationsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageControlCustomEndpointInput`<sup>Optional</sup> <a name="storageControlCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput"></a>

```java
public java.lang.String getStorageControlCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageCustomEndpointInput`<sup>Optional</sup> <a name="storageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput"></a>

```java
public java.lang.String getStorageCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="storageInsightsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput"></a>

```java
public java.lang.String getStorageInsightsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageTransferCustomEndpointInput`<sup>Optional</sup> <a name="storageTransferCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput"></a>

```java
public java.lang.String getStorageTransferCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `tagsCustomEndpointInput`<sup>Optional</sup> <a name="tagsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput"></a>

```java
public java.lang.String getTagsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `tagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="tagsLocationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput"></a>

```java
public java.lang.String getTagsLocationCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `terraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategyInput" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```java
public java.lang.String getTerraformAttributionLabelAdditionStrategyInput();
```

- *Type:* java.lang.String

---

##### `tpuCustomEndpointInput`<sup>Optional</sup> <a name="tpuCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput"></a>

```java
public java.lang.String getTpuCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `transcoderCustomEndpointInput`<sup>Optional</sup> <a name="transcoderCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput"></a>

```java
public java.lang.String getTranscoderCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `universeDomainInput`<sup>Optional</sup> <a name="universeDomainInput" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput"></a>

```java
public java.lang.String getUniverseDomainInput();
```

- *Type:* java.lang.String

---

##### `userProjectOverrideInput`<sup>Optional</sup> <a name="userProjectOverrideInput" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput"></a>

```java
public java.lang.Object getUserProjectOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vertexAiCustomEndpointInput`<sup>Optional</sup> <a name="vertexAiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput"></a>

```java
public java.lang.String getVertexAiCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `vmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="vmwareengineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput"></a>

```java
public java.lang.String getVmwareengineCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `vpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="vpcAccessCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput"></a>

```java
public java.lang.String getVpcAccessCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `workbenchCustomEndpointInput`<sup>Optional</sup> <a name="workbenchCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput"></a>

```java
public java.lang.String getWorkbenchCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `workflowsCustomEndpointInput`<sup>Optional</sup> <a name="workflowsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput"></a>

```java
public java.lang.String getWorkflowsCustomEndpointInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.provider.GoogleProvider.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint"></a>

```java
public java.lang.String getAccessApprovalCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint"></a>

```java
public java.lang.String getAccessContextManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google.provider.GoogleProvider.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint"></a>

```java
public java.lang.String getActiveDirectoryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel"></a>

```java
public java.lang.Object getAddTerraformAttributionLabel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint"></a>

```java
public java.lang.String getAlloydbCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint"></a>

```java
public java.lang.String getApigeeCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint"></a>

```java
public java.lang.String getApihubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint"></a>

```java
public java.lang.String getApikeysCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint"></a>

```java
public java.lang.String getAppEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint"></a>

```java
public java.lang.String getApphubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint"></a>

```java
public java.lang.String getArtifactRegistryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint"></a>

```java
public java.lang.String getAssuredWorkloadsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint"></a>

```java
public java.lang.String getBackupDrCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google.provider.GoogleProvider.property.batching"></a>

```java
public java.lang.Object getBatching();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>>

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint"></a>

```java
public java.lang.String getBeyondcorpCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint"></a>

```java
public java.lang.String getBiglakeCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```java
public java.lang.String getBigqueryAnalyticsHubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint"></a>

```java
public java.lang.String getBigqueryConnectionCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint"></a>

```java
public java.lang.String getBigQueryCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDatapolicyCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDataTransferCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint"></a>

```java
public java.lang.String getBigqueryReservationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint"></a>

```java
public java.lang.String getBigtableCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint"></a>

```java
public java.lang.String getBillingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint"></a>

```java
public java.lang.String getBinaryAuthorizationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```java
public java.lang.String getBlockchainNodeEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint"></a>

```java
public java.lang.String getCertificateManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint"></a>

```java
public java.lang.String getChronicleCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint"></a>

```java
public java.lang.String getCloudAssetCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint"></a>

```java
public java.lang.String getCloudBillingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint"></a>

```java
public java.lang.String getCloudbuildv2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildWorkerPoolCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint"></a>

```java
public java.lang.String getClouddeployCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint"></a>

```java
public java.lang.String getClouddomainsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint"></a>

```java
public java.lang.String getCloudfunctions2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint"></a>

```java
public java.lang.String getCloudFunctionsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint"></a>

```java
public java.lang.String getCloudIdentityCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint"></a>

```java
public java.lang.String getCloudIdsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint"></a>

```java
public java.lang.String getCloudQuotasCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint"></a>

```java
public java.lang.String getCloudResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint"></a>

```java
public java.lang.String getCloudRunCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint"></a>

```java
public java.lang.String getCloudRunV2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint"></a>

```java
public java.lang.String getCloudSchedulerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint"></a>

```java
public java.lang.String getCloudTasksCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpoint"></a>

```java
public java.lang.String getColabCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint"></a>

```java
public java.lang.String getComposerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint"></a>

```java
public java.lang.String getComputeCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `contactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpoint"></a>

```java
public java.lang.String getContactCenterInsightsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint"></a>

```java
public java.lang.String getContainerAnalysisCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint"></a>

```java
public java.lang.String getContainerAttachedCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint"></a>

```java
public java.lang.String getContainerAwsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint"></a>

```java
public java.lang.String getContainerAzureCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint"></a>

```java
public java.lang.String getContainerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint"></a>

```java
public java.lang.String getCoreBillingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.provider.GoogleProvider.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```java
public java.lang.String getDatabaseMigrationServiceCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint"></a>

```java
public java.lang.String getDataCatalogCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint"></a>

```java
public java.lang.String getDataflowCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint"></a>

```java
public java.lang.String getDataFusionCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint"></a>

```java
public java.lang.String getDataLossPreventionCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint"></a>

```java
public java.lang.String getDataPipelineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint"></a>

```java
public java.lang.String getDataplexCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint"></a>

```java
public java.lang.String getDataprocCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint"></a>

```java
public java.lang.String getDataprocGdcCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint"></a>

```java
public java.lang.String getDataprocMetastoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint"></a>

```java
public java.lang.String getDatastreamCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint"></a>

```java
public java.lang.String getDeploymentManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint"></a>

```java
public java.lang.String getDeveloperConnectCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCxCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint"></a>

```java
public java.lang.String getDiscoveryEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint"></a>

```java
public java.lang.String getDnsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiWarehouseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint"></a>

```java
public java.lang.String getEdgecontainerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint"></a>

```java
public java.lang.String getEdgenetworkCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint"></a>

```java
public java.lang.String getEssentialContactsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint"></a>

```java
public java.lang.String getEventarcCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `externalCredentials`<sup>Optional</sup> <a name="externalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.property.externalCredentials"></a>

```java
public java.lang.Object getExternalCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>>

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint"></a>

```java
public java.lang.String getFilestoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint"></a>

```java
public java.lang.String getFirebaseAppCheckCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint"></a>

```java
public java.lang.String getFirebaseAppHostingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint"></a>

```java
public java.lang.String getFirebaseDataConnectCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint"></a>

```java
public java.lang.String getFirebaserulesCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint"></a>

```java
public java.lang.String getFirestoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint"></a>

```java
public java.lang.String getGeminiCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint"></a>

```java
public java.lang.String getGkeBackupCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint"></a>

```java
public java.lang.String getGkeHub2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint"></a>

```java
public java.lang.String getGkeHubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpoint"></a>

```java
public java.lang.String getGkehubFeatureCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint"></a>

```java
public java.lang.String getGkeonpremCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint"></a>

```java
public java.lang.String getHealthcareCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint"></a>

```java
public java.lang.String getIam2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint"></a>

```java
public java.lang.String getIam3CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint"></a>

```java
public java.lang.String getIamBetaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint"></a>

```java
public java.lang.String getIamCredentialsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint"></a>

```java
public java.lang.String getIamCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```java
public java.lang.String getIamWorkforcePoolCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint"></a>

```java
public java.lang.String getIapCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint"></a>

```java
public java.lang.String getIdentityPlatformCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount"></a>

```java
public java.lang.String getImpersonateServiceAccount();
```

- *Type:* java.lang.String

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates"></a>

```java
public java.util.List<java.lang.String> getImpersonateServiceAccountDelegates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationConnectorsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint"></a>

```java
public java.lang.String getKmsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint"></a>

```java
public java.lang.String getLoggingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint"></a>

```java
public java.lang.String getLookerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `lustreCustomEndpoint`<sup>Optional</sup> <a name="lustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint"></a>

```java
public java.lang.String getLustreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint"></a>

```java
public java.lang.String getManagedKafkaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint"></a>

```java
public java.lang.String getMemcacheCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint"></a>

```java
public java.lang.String getMemorystoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint"></a>

```java
public java.lang.String getMigrationCenterCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint"></a>

```java
public java.lang.String getMlEngineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `modelArmorCustomEndpoint`<sup>Optional</sup> <a name="modelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpoint"></a>

```java
public java.lang.String getModelArmorCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `modelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpoint"></a>

```java
public java.lang.String getModelArmorGlobalCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint"></a>

```java
public java.lang.String getMonitoringCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint"></a>

```java
public java.lang.String getNetappCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint"></a>

```java
public java.lang.String getNetworkConnectivityCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint"></a>

```java
public java.lang.String getNetworkManagementCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint"></a>

```java
public java.lang.String getNetworkSecurityCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint"></a>

```java
public java.lang.String getNetworkServicesCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint"></a>

```java
public java.lang.String getNotebooksCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint"></a>

```java
public java.lang.String getOracleDatabaseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint"></a>

```java
public java.lang.String getOrgPolicyCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint"></a>

```java
public java.lang.String getOsConfigCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `osConfigV2CustomEndpoint`<sup>Optional</sup> <a name="osConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint"></a>

```java
public java.lang.String getOsConfigV2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint"></a>

```java
public java.lang.String getOsLoginCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint"></a>

```java
public java.lang.String getParallelstoreCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint"></a>

```java
public java.lang.String getParameterManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint"></a>

```java
public java.lang.String getParameterManagerRegionalCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint"></a>

```java
public java.lang.String getPrivatecaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```java
public java.lang.String getPrivilegedAccessManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.provider.GoogleProvider.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint"></a>

```java
public java.lang.String getPublicCaCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint"></a>

```java
public java.lang.String getPubsubCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint"></a>

```java
public java.lang.String getPubsubLiteCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```java
public java.lang.String getRecaptchaEnterpriseCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint"></a>

```java
public java.lang.String getRedisCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.provider.GoogleProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReason"></a>

```java
public java.lang.String getRequestReason();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint"></a>

```java
public java.lang.String getResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint"></a>

```java
public java.lang.String getResourceManagerV3CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.provider.GoogleProvider.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerRegionalCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint"></a>

```java
public java.lang.String getSecureSourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterManagementCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterV2CustomEndpoint();
```

- *Type:* java.lang.String

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint"></a>

```java
public java.lang.String getSecuritypostureCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint"></a>

```java
public java.lang.String getServiceManagementCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint"></a>

```java
public java.lang.String getServiceNetworkingCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint"></a>

```java
public java.lang.String getServiceUsageCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint"></a>

```java
public java.lang.String getSiteVerificationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint"></a>

```java
public java.lang.String getSourceRepoCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint"></a>

```java
public java.lang.String getSpannerCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint"></a>

```java
public java.lang.String getSqlCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint"></a>

```java
public java.lang.String getStorageBatchOperationsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageControlCustomEndpoint`<sup>Optional</sup> <a name="storageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint"></a>

```java
public java.lang.String getStorageControlCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint"></a>

```java
public java.lang.String getStorageCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint"></a>

```java
public java.lang.String getStorageInsightsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint"></a>

```java
public java.lang.String getStorageTransferCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint"></a>

```java
public java.lang.String getTagsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint"></a>

```java
public java.lang.String getTagsLocationCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```java
public java.lang.String getTerraformAttributionLabelAdditionStrategy();
```

- *Type:* java.lang.String

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint"></a>

```java
public java.lang.String getTpuCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint"></a>

```java
public java.lang.String getTranscoderCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomain"></a>

```java
public java.lang.String getUniverseDomain();
```

- *Type:* java.lang.String

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride"></a>

```java
public java.lang.Object getUserProjectOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint"></a>

```java
public java.lang.String getVertexAiCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint"></a>

```java
public java.lang.String getVmwareengineCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint"></a>

```java
public java.lang.String getVpcAccessCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint"></a>

```java
public java.lang.String getWorkbenchCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint"></a>

```java
public java.lang.String getWorkflowsCustomEndpoint();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.provider.GoogleProvider.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProviderBatching <a name="GoogleProviderBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderBatching.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProviderBatching;

GoogleProviderBatching.builder()
//  .enableBatching(java.lang.Boolean)
//  .enableBatching(IResolvable)
//  .sendAfter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching">enableBatching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#enable_batching GoogleProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter">sendAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#send_after GoogleProvider#send_after}. |

---

##### `enableBatching`<sup>Optional</sup> <a name="enableBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching"></a>

```java
public java.lang.Object getEnableBatching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#enable_batching GoogleProvider#enable_batching}.

---

##### `sendAfter`<sup>Optional</sup> <a name="sendAfter" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter"></a>

```java
public java.lang.String getSendAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#send_after GoogleProvider#send_after}.

---

### GoogleProviderConfig <a name="GoogleProviderConfig" id="@cdktf/provider-google.provider.GoogleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProviderConfig;

GoogleProviderConfig.builder()
//  .accessApprovalCustomEndpoint(java.lang.String)
//  .accessContextManagerCustomEndpoint(java.lang.String)
//  .accessToken(java.lang.String)
//  .activeDirectoryCustomEndpoint(java.lang.String)
//  .addTerraformAttributionLabel(java.lang.Boolean)
//  .addTerraformAttributionLabel(IResolvable)
//  .alias(java.lang.String)
//  .alloydbCustomEndpoint(java.lang.String)
//  .apigeeCustomEndpoint(java.lang.String)
//  .apihubCustomEndpoint(java.lang.String)
//  .apikeysCustomEndpoint(java.lang.String)
//  .appEngineCustomEndpoint(java.lang.String)
//  .apphubCustomEndpoint(java.lang.String)
//  .artifactRegistryCustomEndpoint(java.lang.String)
//  .assuredWorkloadsCustomEndpoint(java.lang.String)
//  .backupDrCustomEndpoint(java.lang.String)
//  .batching(IResolvable)
//  .batching(java.util.List<GoogleProviderBatching>)
//  .beyondcorpCustomEndpoint(java.lang.String)
//  .biglakeCustomEndpoint(java.lang.String)
//  .bigqueryAnalyticsHubCustomEndpoint(java.lang.String)
//  .bigqueryConnectionCustomEndpoint(java.lang.String)
//  .bigQueryCustomEndpoint(java.lang.String)
//  .bigqueryDatapolicyCustomEndpoint(java.lang.String)
//  .bigqueryDataTransferCustomEndpoint(java.lang.String)
//  .bigqueryReservationCustomEndpoint(java.lang.String)
//  .bigtableCustomEndpoint(java.lang.String)
//  .billingCustomEndpoint(java.lang.String)
//  .billingProject(java.lang.String)
//  .binaryAuthorizationCustomEndpoint(java.lang.String)
//  .blockchainNodeEngineCustomEndpoint(java.lang.String)
//  .certificateManagerCustomEndpoint(java.lang.String)
//  .chronicleCustomEndpoint(java.lang.String)
//  .cloudAssetCustomEndpoint(java.lang.String)
//  .cloudBillingCustomEndpoint(java.lang.String)
//  .cloudBuildCustomEndpoint(java.lang.String)
//  .cloudbuildv2CustomEndpoint(java.lang.String)
//  .cloudBuildWorkerPoolCustomEndpoint(java.lang.String)
//  .clouddeployCustomEndpoint(java.lang.String)
//  .clouddomainsCustomEndpoint(java.lang.String)
//  .cloudfunctions2CustomEndpoint(java.lang.String)
//  .cloudFunctionsCustomEndpoint(java.lang.String)
//  .cloudIdentityCustomEndpoint(java.lang.String)
//  .cloudIdsCustomEndpoint(java.lang.String)
//  .cloudQuotasCustomEndpoint(java.lang.String)
//  .cloudResourceManagerCustomEndpoint(java.lang.String)
//  .cloudRunCustomEndpoint(java.lang.String)
//  .cloudRunV2CustomEndpoint(java.lang.String)
//  .cloudSchedulerCustomEndpoint(java.lang.String)
//  .cloudTasksCustomEndpoint(java.lang.String)
//  .colabCustomEndpoint(java.lang.String)
//  .composerCustomEndpoint(java.lang.String)
//  .computeCustomEndpoint(java.lang.String)
//  .contactCenterInsightsCustomEndpoint(java.lang.String)
//  .containerAnalysisCustomEndpoint(java.lang.String)
//  .containerAttachedCustomEndpoint(java.lang.String)
//  .containerAwsCustomEndpoint(java.lang.String)
//  .containerAzureCustomEndpoint(java.lang.String)
//  .containerCustomEndpoint(java.lang.String)
//  .coreBillingCustomEndpoint(java.lang.String)
//  .credentials(java.lang.String)
//  .databaseMigrationServiceCustomEndpoint(java.lang.String)
//  .dataCatalogCustomEndpoint(java.lang.String)
//  .dataflowCustomEndpoint(java.lang.String)
//  .dataFusionCustomEndpoint(java.lang.String)
//  .dataLossPreventionCustomEndpoint(java.lang.String)
//  .dataPipelineCustomEndpoint(java.lang.String)
//  .dataplexCustomEndpoint(java.lang.String)
//  .dataprocCustomEndpoint(java.lang.String)
//  .dataprocGdcCustomEndpoint(java.lang.String)
//  .dataprocMetastoreCustomEndpoint(java.lang.String)
//  .datastreamCustomEndpoint(java.lang.String)
//  .defaultLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentManagerCustomEndpoint(java.lang.String)
//  .developerConnectCustomEndpoint(java.lang.String)
//  .dialogflowCustomEndpoint(java.lang.String)
//  .dialogflowCxCustomEndpoint(java.lang.String)
//  .discoveryEngineCustomEndpoint(java.lang.String)
//  .dnsCustomEndpoint(java.lang.String)
//  .documentAiCustomEndpoint(java.lang.String)
//  .documentAiWarehouseCustomEndpoint(java.lang.String)
//  .edgecontainerCustomEndpoint(java.lang.String)
//  .edgenetworkCustomEndpoint(java.lang.String)
//  .essentialContactsCustomEndpoint(java.lang.String)
//  .eventarcCustomEndpoint(java.lang.String)
//  .externalCredentials(IResolvable)
//  .externalCredentials(java.util.List<GoogleProviderExternalCredentials>)
//  .filestoreCustomEndpoint(java.lang.String)
//  .firebaseAppCheckCustomEndpoint(java.lang.String)
//  .firebaseAppHostingCustomEndpoint(java.lang.String)
//  .firebaseDataConnectCustomEndpoint(java.lang.String)
//  .firebaserulesCustomEndpoint(java.lang.String)
//  .firestoreCustomEndpoint(java.lang.String)
//  .geminiCustomEndpoint(java.lang.String)
//  .gkeBackupCustomEndpoint(java.lang.String)
//  .gkeHub2CustomEndpoint(java.lang.String)
//  .gkeHubCustomEndpoint(java.lang.String)
//  .gkehubFeatureCustomEndpoint(java.lang.String)
//  .gkeonpremCustomEndpoint(java.lang.String)
//  .healthcareCustomEndpoint(java.lang.String)
//  .iam2CustomEndpoint(java.lang.String)
//  .iam3CustomEndpoint(java.lang.String)
//  .iamBetaCustomEndpoint(java.lang.String)
//  .iamCredentialsCustomEndpoint(java.lang.String)
//  .iamCustomEndpoint(java.lang.String)
//  .iamWorkforcePoolCustomEndpoint(java.lang.String)
//  .iapCustomEndpoint(java.lang.String)
//  .identityPlatformCustomEndpoint(java.lang.String)
//  .impersonateServiceAccount(java.lang.String)
//  .impersonateServiceAccountDelegates(java.util.List<java.lang.String>)
//  .integrationConnectorsCustomEndpoint(java.lang.String)
//  .integrationsCustomEndpoint(java.lang.String)
//  .kmsCustomEndpoint(java.lang.String)
//  .loggingCustomEndpoint(java.lang.String)
//  .lookerCustomEndpoint(java.lang.String)
//  .lustreCustomEndpoint(java.lang.String)
//  .managedKafkaCustomEndpoint(java.lang.String)
//  .memcacheCustomEndpoint(java.lang.String)
//  .memorystoreCustomEndpoint(java.lang.String)
//  .migrationCenterCustomEndpoint(java.lang.String)
//  .mlEngineCustomEndpoint(java.lang.String)
//  .modelArmorCustomEndpoint(java.lang.String)
//  .modelArmorGlobalCustomEndpoint(java.lang.String)
//  .monitoringCustomEndpoint(java.lang.String)
//  .netappCustomEndpoint(java.lang.String)
//  .networkConnectivityCustomEndpoint(java.lang.String)
//  .networkManagementCustomEndpoint(java.lang.String)
//  .networkSecurityCustomEndpoint(java.lang.String)
//  .networkServicesCustomEndpoint(java.lang.String)
//  .notebooksCustomEndpoint(java.lang.String)
//  .oracleDatabaseCustomEndpoint(java.lang.String)
//  .orgPolicyCustomEndpoint(java.lang.String)
//  .osConfigCustomEndpoint(java.lang.String)
//  .osConfigV2CustomEndpoint(java.lang.String)
//  .osLoginCustomEndpoint(java.lang.String)
//  .parallelstoreCustomEndpoint(java.lang.String)
//  .parameterManagerCustomEndpoint(java.lang.String)
//  .parameterManagerRegionalCustomEndpoint(java.lang.String)
//  .privatecaCustomEndpoint(java.lang.String)
//  .privilegedAccessManagerCustomEndpoint(java.lang.String)
//  .project(java.lang.String)
//  .publicCaCustomEndpoint(java.lang.String)
//  .pubsubCustomEndpoint(java.lang.String)
//  .pubsubLiteCustomEndpoint(java.lang.String)
//  .recaptchaEnterpriseCustomEndpoint(java.lang.String)
//  .redisCustomEndpoint(java.lang.String)
//  .region(java.lang.String)
//  .requestReason(java.lang.String)
//  .requestTimeout(java.lang.String)
//  .resourceManagerCustomEndpoint(java.lang.String)
//  .resourceManagerV3CustomEndpoint(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretManagerCustomEndpoint(java.lang.String)
//  .secretManagerRegionalCustomEndpoint(java.lang.String)
//  .secureSourceManagerCustomEndpoint(java.lang.String)
//  .securityCenterCustomEndpoint(java.lang.String)
//  .securityCenterManagementCustomEndpoint(java.lang.String)
//  .securityCenterV2CustomEndpoint(java.lang.String)
//  .securitypostureCustomEndpoint(java.lang.String)
//  .serviceManagementCustomEndpoint(java.lang.String)
//  .serviceNetworkingCustomEndpoint(java.lang.String)
//  .serviceUsageCustomEndpoint(java.lang.String)
//  .siteVerificationCustomEndpoint(java.lang.String)
//  .sourceRepoCustomEndpoint(java.lang.String)
//  .spannerCustomEndpoint(java.lang.String)
//  .sqlCustomEndpoint(java.lang.String)
//  .storageBatchOperationsCustomEndpoint(java.lang.String)
//  .storageControlCustomEndpoint(java.lang.String)
//  .storageCustomEndpoint(java.lang.String)
//  .storageInsightsCustomEndpoint(java.lang.String)
//  .storageTransferCustomEndpoint(java.lang.String)
//  .tagsCustomEndpoint(java.lang.String)
//  .tagsLocationCustomEndpoint(java.lang.String)
//  .terraformAttributionLabelAdditionStrategy(java.lang.String)
//  .tpuCustomEndpoint(java.lang.String)
//  .transcoderCustomEndpoint(java.lang.String)
//  .universeDomain(java.lang.String)
//  .userProjectOverride(java.lang.Boolean)
//  .userProjectOverride(IResolvable)
//  .vertexAiCustomEndpoint(java.lang.String)
//  .vmwareengineCustomEndpoint(java.lang.String)
//  .vpcAccessCustomEndpoint(java.lang.String)
//  .workbenchCustomEndpoint(java.lang.String)
//  .workflowsCustomEndpoint(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.batching">batching</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>></code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject">billingProject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">cloudBuildWorkerPoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.contactCenterInsightsCustomEndpoint">contactCenterInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels">defaultLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.externalCredentials">externalCredentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>></code> | external_credentials block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint">firebaseAppHostingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint">firebaseDataConnectCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkehubFeatureCustomEndpoint">gkehubFeatureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint">lustreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorCustomEndpoint">modelArmorCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorGlobalCustomEndpoint">modelArmorGlobalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint">osConfigV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason">requestReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint">storageBatchOperationsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint">storageControlCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint">tpuCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain">universeDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride">userProjectOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#zone GoogleProvider#zone}. |

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint"></a>

```java
public java.lang.String getAccessApprovalCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```java
public java.lang.String getAccessContextManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#access_token GoogleProvider#access_token}.

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```java
public java.lang.String getActiveDirectoryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel"></a>

```java
public java.lang.Object getAddTerraformAttributionLabel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#alias GoogleProvider#alias}

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint"></a>

```java
public java.lang.String getAlloydbCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint"></a>

```java
public java.lang.String getApigeeCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint"></a>

```java
public java.lang.String getApihubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}.

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint"></a>

```java
public java.lang.String getApikeysCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint"></a>

```java
public java.lang.String getAppEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint"></a>

```java
public java.lang.String getApphubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```java
public java.lang.String getArtifactRegistryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```java
public java.lang.String getAssuredWorkloadsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint"></a>

```java
public java.lang.String getBackupDrCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.batching"></a>

```java
public java.lang.Object getBatching();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#batching GoogleProvider#batching}

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint"></a>

```java
public java.lang.String getBeyondcorpCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint"></a>

```java
public java.lang.String getBiglakeCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```java
public java.lang.String getBigqueryAnalyticsHubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```java
public java.lang.String getBigqueryConnectionCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint"></a>

```java
public java.lang.String getBigQueryCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDatapolicyCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```java
public java.lang.String getBigqueryDataTransferCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```java
public java.lang.String getBigqueryReservationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint"></a>

```java
public java.lang.String getBigtableCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint"></a>

```java
public java.lang.String getBillingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject"></a>

```java
public java.lang.String getBillingProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#billing_project GoogleProvider#billing_project}.

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```java
public java.lang.String getBinaryAuthorizationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```java
public java.lang.String getBlockchainNodeEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint"></a>

```java
public java.lang.String getCertificateManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint"></a>

```java
public java.lang.String getChronicleCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}.

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint"></a>

```java
public java.lang.String getCloudAssetCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint"></a>

```java
public java.lang.String getCloudBillingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```java
public java.lang.String getCloudbuildv2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```java
public java.lang.String getCloudBuildWorkerPoolCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint"></a>

```java
public java.lang.String getClouddeployCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint"></a>

```java
public java.lang.String getClouddomainsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```java
public java.lang.String getCloudfunctions2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```java
public java.lang.String getCloudFunctionsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```java
public java.lang.String getCloudIdentityCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint"></a>

```java
public java.lang.String getCloudIdsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```java
public java.lang.String getCloudQuotasCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```java
public java.lang.String getCloudResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint"></a>

```java
public java.lang.String getCloudRunCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```java
public java.lang.String getCloudRunV2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```java
public java.lang.String getCloudSchedulerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint"></a>

```java
public java.lang.String getCloudTasksCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint"></a>

```java
public java.lang.String getColabCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}.

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint"></a>

```java
public java.lang.String getComposerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint"></a>

```java
public java.lang.String getComputeCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `contactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.contactCenterInsightsCustomEndpoint"></a>

```java
public java.lang.String getContactCenterInsightsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}.

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```java
public java.lang.String getContainerAnalysisCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint"></a>

```java
public java.lang.String getContainerAttachedCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint"></a>

```java
public java.lang.String getContainerAwsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint"></a>

```java
public java.lang.String getContainerAzureCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint"></a>

```java
public java.lang.String getContainerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint"></a>

```java
public java.lang.String getCoreBillingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#credentials GoogleProvider#credentials}.

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```java
public java.lang.String getDatabaseMigrationServiceCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint"></a>

```java
public java.lang.String getDataCatalogCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint"></a>

```java
public java.lang.String getDataflowCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint"></a>

```java
public java.lang.String getDataFusionCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```java
public java.lang.String getDataLossPreventionCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint"></a>

```java
public java.lang.String getDataPipelineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint"></a>

```java
public java.lang.String getDataplexCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint"></a>

```java
public java.lang.String getDataprocCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```java
public java.lang.String getDataprocGdcCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```java
public java.lang.String getDataprocMetastoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint"></a>

```java
public java.lang.String getDatastreamCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#default_labels GoogleProvider#default_labels}.

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```java
public java.lang.String getDeploymentManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint"></a>

```java
public java.lang.String getDeveloperConnectCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}.

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```java
public java.lang.String getDialogflowCxCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```java
public java.lang.String getDiscoveryEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint"></a>

```java
public java.lang.String getDnsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```java
public java.lang.String getDocumentAiWarehouseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint"></a>

```java
public java.lang.String getEdgecontainerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint"></a>

```java
public java.lang.String getEdgenetworkCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint"></a>

```java
public java.lang.String getEssentialContactsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint"></a>

```java
public java.lang.String getEventarcCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `externalCredentials`<sup>Optional</sup> <a name="externalCredentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.externalCredentials"></a>

```java
public java.lang.Object getExternalCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>>

external_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#external_credentials GoogleProvider#external_credentials}

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint"></a>

```java
public java.lang.String getFilestoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```java
public java.lang.String getFirebaseAppCheckCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint"></a>

```java
public java.lang.String getFirebaseAppHostingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}.

---

##### `firebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint"></a>

```java
public java.lang.String getFirebaseDataConnectCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}.

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint"></a>

```java
public java.lang.String getFirebaserulesCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint"></a>

```java
public java.lang.String getFirestoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint"></a>

```java
public java.lang.String getGeminiCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}.

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint"></a>

```java
public java.lang.String getGkeBackupCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint"></a>

```java
public java.lang.String getGkeHub2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint"></a>

```java
public java.lang.String getGkeHubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `gkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="gkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```java
public java.lang.String getGkehubFeatureCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint"></a>

```java
public java.lang.String getGkeonpremCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint"></a>

```java
public java.lang.String getHealthcareCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint"></a>

```java
public java.lang.String getIam2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint"></a>

```java
public java.lang.String getIam3CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}.

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint"></a>

```java
public java.lang.String getIamBetaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```java
public java.lang.String getIamCredentialsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint"></a>

```java
public java.lang.String getIamCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```java
public java.lang.String getIamWorkforcePoolCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint"></a>

```java
public java.lang.String getIapCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint"></a>

```java
public java.lang.String getIdentityPlatformCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount"></a>

```java
public java.lang.String getImpersonateServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates"></a>

```java
public java.util.List<java.lang.String> getImpersonateServiceAccountDelegates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationConnectorsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint"></a>

```java
public java.lang.String getIntegrationsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint"></a>

```java
public java.lang.String getKmsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint"></a>

```java
public java.lang.String getLoggingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint"></a>

```java
public java.lang.String getLookerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `lustreCustomEndpoint`<sup>Optional</sup> <a name="lustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint"></a>

```java
public java.lang.String getLustreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}.

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint"></a>

```java
public java.lang.String getManagedKafkaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}.

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint"></a>

```java
public java.lang.String getMemcacheCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint"></a>

```java
public java.lang.String getMemorystoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}.

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint"></a>

```java
public java.lang.String getMigrationCenterCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint"></a>

```java
public java.lang.String getMlEngineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `modelArmorCustomEndpoint`<sup>Optional</sup> <a name="modelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorCustomEndpoint"></a>

```java
public java.lang.String getModelArmorCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}.

---

##### `modelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorGlobalCustomEndpoint"></a>

```java
public java.lang.String getModelArmorGlobalCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}.

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint"></a>

```java
public java.lang.String getMonitoringCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint"></a>

```java
public java.lang.String getNetappCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```java
public java.lang.String getNetworkConnectivityCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint"></a>

```java
public java.lang.String getNetworkManagementCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint"></a>

```java
public java.lang.String getNetworkSecurityCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint"></a>

```java
public java.lang.String getNetworkServicesCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint"></a>

```java
public java.lang.String getNotebooksCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```java
public java.lang.String getOracleDatabaseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}.

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint"></a>

```java
public java.lang.String getOrgPolicyCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint"></a>

```java
public java.lang.String getOsConfigCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `osConfigV2CustomEndpoint`<sup>Optional</sup> <a name="osConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint"></a>

```java
public java.lang.String getOsConfigV2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}.

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint"></a>

```java
public java.lang.String getOsLoginCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint"></a>

```java
public java.lang.String getParallelstoreCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}.

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint"></a>

```java
public java.lang.String getParameterManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}.

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint"></a>

```java
public java.lang.String getParameterManagerRegionalCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}.

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint"></a>

```java
public java.lang.String getPrivatecaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```java
public java.lang.String getPrivilegedAccessManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#project GoogleProvider#project}.

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint"></a>

```java
public java.lang.String getPublicCaCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint"></a>

```java
public java.lang.String getPubsubCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```java
public java.lang.String getPubsubLiteCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```java
public java.lang.String getRecaptchaEnterpriseCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint"></a>

```java
public java.lang.String getRedisCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#region GoogleProvider#region}.

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason"></a>

```java
public java.lang.String getRequestReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_reason GoogleProvider#request_reason}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint"></a>

```java
public java.lang.String getResourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```java
public java.lang.String getResourceManagerV3CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#scopes GoogleProvider#scopes}.

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```java
public java.lang.String getSecretManagerRegionalCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}.

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```java
public java.lang.String getSecureSourceManagerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterManagementCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}.

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```java
public java.lang.String getSecurityCenterV2CustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}.

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint"></a>

```java
public java.lang.String getSecuritypostureCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint"></a>

```java
public java.lang.String getServiceManagementCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```java
public java.lang.String getServiceNetworkingCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint"></a>

```java
public java.lang.String getServiceUsageCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint"></a>

```java
public java.lang.String getSiteVerificationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}.

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint"></a>

```java
public java.lang.String getSourceRepoCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint"></a>

```java
public java.lang.String getSpannerCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint"></a>

```java
public java.lang.String getSqlCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `storageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint"></a>

```java
public java.lang.String getStorageBatchOperationsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}.

---

##### `storageControlCustomEndpoint`<sup>Optional</sup> <a name="storageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint"></a>

```java
public java.lang.String getStorageControlCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}.

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint"></a>

```java
public java.lang.String getStorageCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint"></a>

```java
public java.lang.String getStorageInsightsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint"></a>

```java
public java.lang.String getStorageTransferCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint"></a>

```java
public java.lang.String getTagsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint"></a>

```java
public java.lang.String getTagsLocationCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```java
public java.lang.String getTerraformAttributionLabelAdditionStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpuCustomEndpoint`<sup>Optional</sup> <a name="tpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint"></a>

```java
public java.lang.String getTpuCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint"></a>

```java
public java.lang.String getTranscoderCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}.

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain"></a>

```java
public java.lang.String getUniverseDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride"></a>

```java
public java.lang.Object getUserProjectOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint"></a>

```java
public java.lang.String getVertexAiCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint"></a>

```java
public java.lang.String getVmwareengineCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint"></a>

```java
public java.lang.String getVpcAccessCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint"></a>

```java
public java.lang.String getWorkbenchCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint"></a>

```java
public java.lang.String getWorkflowsCustomEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#zone GoogleProvider#zone}.

---

### GoogleProviderExternalCredentials <a name="GoogleProviderExternalCredentials" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.provider.GoogleProviderExternalCredentials;

GoogleProviderExternalCredentials.builder()
    .audience(java.lang.String)
    .identityToken(java.lang.String)
    .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.audience">audience</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#audience GoogleProvider#audience}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken">identityToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#identity_token GoogleProvider#identity_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_account_email GoogleProvider#service_account_email}. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#audience GoogleProvider#audience}.

---

##### `identityToken`<sup>Required</sup> <a name="identityToken" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken"></a>

```java
public java.lang.String getIdentityToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#identity_token GoogleProvider#identity_token}.

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs#service_account_email GoogleProvider#service_account_email}.

---



