# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProvider <a name="GoogleProvider" id="@cdktf/provider-google.provider.GoogleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs google}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.provider.GoogleProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProvider(
  scope: Construct,
  id: str,
  access_approval_custom_endpoint: str = None,
  access_context_manager_custom_endpoint: str = None,
  access_token: str = None,
  active_directory_custom_endpoint: str = None,
  add_terraform_attribution_label: typing.Union[bool, IResolvable] = None,
  alias: str = None,
  alloydb_custom_endpoint: str = None,
  apigee_custom_endpoint: str = None,
  apikeys_custom_endpoint: str = None,
  app_engine_custom_endpoint: str = None,
  apphub_custom_endpoint: str = None,
  artifact_registry_custom_endpoint: str = None,
  assured_workloads_custom_endpoint: str = None,
  batching: GoogleProviderBatching = None,
  beyondcorp_custom_endpoint: str = None,
  biglake_custom_endpoint: str = None,
  bigquery_analytics_hub_custom_endpoint: str = None,
  bigquery_connection_custom_endpoint: str = None,
  big_query_custom_endpoint: str = None,
  bigquery_datapolicy_custom_endpoint: str = None,
  bigquery_data_transfer_custom_endpoint: str = None,
  bigquery_reservation_custom_endpoint: str = None,
  bigtable_custom_endpoint: str = None,
  billing_custom_endpoint: str = None,
  billing_project: str = None,
  binary_authorization_custom_endpoint: str = None,
  blockchain_node_engine_custom_endpoint: str = None,
  certificate_manager_custom_endpoint: str = None,
  cloud_asset_custom_endpoint: str = None,
  cloud_billing_custom_endpoint: str = None,
  cloud_build_custom_endpoint: str = None,
  cloudbuildv2_custom_endpoint: str = None,
  cloud_build_worker_pool_custom_endpoint: str = None,
  clouddeploy_custom_endpoint: str = None,
  clouddomains_custom_endpoint: str = None,
  cloudfunctions2_custom_endpoint: str = None,
  cloud_functions_custom_endpoint: str = None,
  cloud_identity_custom_endpoint: str = None,
  cloud_ids_custom_endpoint: str = None,
  cloud_quotas_custom_endpoint: str = None,
  cloud_resource_manager_custom_endpoint: str = None,
  cloud_run_custom_endpoint: str = None,
  cloud_run_v2_custom_endpoint: str = None,
  cloud_scheduler_custom_endpoint: str = None,
  cloud_tasks_custom_endpoint: str = None,
  composer_custom_endpoint: str = None,
  compute_custom_endpoint: str = None,
  container_analysis_custom_endpoint: str = None,
  container_attached_custom_endpoint: str = None,
  container_aws_custom_endpoint: str = None,
  container_azure_custom_endpoint: str = None,
  container_custom_endpoint: str = None,
  core_billing_custom_endpoint: str = None,
  credentials: str = None,
  database_migration_service_custom_endpoint: str = None,
  data_catalog_custom_endpoint: str = None,
  dataflow_custom_endpoint: str = None,
  data_fusion_custom_endpoint: str = None,
  data_loss_prevention_custom_endpoint: str = None,
  data_pipeline_custom_endpoint: str = None,
  dataplex_custom_endpoint: str = None,
  dataproc_custom_endpoint: str = None,
  dataproc_metastore_custom_endpoint: str = None,
  datastore_custom_endpoint: str = None,
  datastream_custom_endpoint: str = None,
  default_labels: typing.Mapping[str] = None,
  deployment_manager_custom_endpoint: str = None,
  dialogflow_custom_endpoint: str = None,
  dialogflow_cx_custom_endpoint: str = None,
  discovery_engine_custom_endpoint: str = None,
  dns_custom_endpoint: str = None,
  document_ai_custom_endpoint: str = None,
  document_ai_warehouse_custom_endpoint: str = None,
  edgecontainer_custom_endpoint: str = None,
  edgenetwork_custom_endpoint: str = None,
  essential_contacts_custom_endpoint: str = None,
  eventarc_custom_endpoint: str = None,
  filestore_custom_endpoint: str = None,
  firebase_app_check_custom_endpoint: str = None,
  firebaserules_custom_endpoint: str = None,
  firestore_custom_endpoint: str = None,
  gke_backup_custom_endpoint: str = None,
  gke_hub2_custom_endpoint: str = None,
  gke_hub_custom_endpoint: str = None,
  gkehub_feature_custom_endpoint: str = None,
  gkeonprem_custom_endpoint: str = None,
  healthcare_custom_endpoint: str = None,
  iam2_custom_endpoint: str = None,
  iam_beta_custom_endpoint: str = None,
  iam_credentials_custom_endpoint: str = None,
  iam_custom_endpoint: str = None,
  iam_workforce_pool_custom_endpoint: str = None,
  iap_custom_endpoint: str = None,
  identity_platform_custom_endpoint: str = None,
  impersonate_service_account: str = None,
  impersonate_service_account_delegates: typing.List[str] = None,
  integration_connectors_custom_endpoint: str = None,
  integrations_custom_endpoint: str = None,
  kms_custom_endpoint: str = None,
  logging_custom_endpoint: str = None,
  looker_custom_endpoint: str = None,
  memcache_custom_endpoint: str = None,
  migration_center_custom_endpoint: str = None,
  ml_engine_custom_endpoint: str = None,
  monitoring_custom_endpoint: str = None,
  netapp_custom_endpoint: str = None,
  network_connectivity_custom_endpoint: str = None,
  network_management_custom_endpoint: str = None,
  network_security_custom_endpoint: str = None,
  network_services_custom_endpoint: str = None,
  notebooks_custom_endpoint: str = None,
  org_policy_custom_endpoint: str = None,
  os_config_custom_endpoint: str = None,
  os_login_custom_endpoint: str = None,
  privateca_custom_endpoint: str = None,
  project: str = None,
  public_ca_custom_endpoint: str = None,
  pubsub_custom_endpoint: str = None,
  pubsub_lite_custom_endpoint: str = None,
  recaptcha_enterprise_custom_endpoint: str = None,
  redis_custom_endpoint: str = None,
  region: str = None,
  request_reason: str = None,
  request_timeout: str = None,
  resource_manager_custom_endpoint: str = None,
  resource_manager_v3_custom_endpoint: str = None,
  scopes: typing.List[str] = None,
  secret_manager_custom_endpoint: str = None,
  secure_source_manager_custom_endpoint: str = None,
  security_center_custom_endpoint: str = None,
  securityposture_custom_endpoint: str = None,
  service_management_custom_endpoint: str = None,
  service_networking_custom_endpoint: str = None,
  service_usage_custom_endpoint: str = None,
  source_repo_custom_endpoint: str = None,
  spanner_custom_endpoint: str = None,
  sql_custom_endpoint: str = None,
  storage_custom_endpoint: str = None,
  storage_insights_custom_endpoint: str = None,
  storage_transfer_custom_endpoint: str = None,
  tags_custom_endpoint: str = None,
  tags_location_custom_endpoint: str = None,
  terraform_attribution_label_addition_strategy: str = None,
  tpu_custom_endpoint: str = None,
  universe_domain: str = None,
  user_project_override: typing.Union[bool, IResolvable] = None,
  vertex_ai_custom_endpoint: str = None,
  vmwareengine_custom_endpoint: str = None,
  vpc_access_custom_endpoint: str = None,
  workbench_custom_endpoint: str = None,
  workflows_custom_endpoint: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessApprovalCustomEndpoint">access_approval_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessContextManagerCustomEndpoint">access_context_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.activeDirectoryCustomEndpoint">active_directory_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.addTerraformAttributionLabel">add_terraform_attribution_label</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alloydbCustomEndpoint">alloydb_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apigeeCustomEndpoint">apigee_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apikeysCustomEndpoint">apikeys_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.appEngineCustomEndpoint">app_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apphubCustomEndpoint">apphub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.artifactRegistryCustomEndpoint">artifact_registry_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint">assured_workloads_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.batching">batching</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.beyondcorpCustomEndpoint">beyondcorp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.biglakeCustomEndpoint">biglake_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint">bigquery_analytics_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint">bigquery_connection_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigQueryCustomEndpoint">big_query_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint">bigquery_datapolicy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint">bigquery_data_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryReservationCustomEndpoint">bigquery_reservation_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigtableCustomEndpoint">bigtable_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingCustomEndpoint">billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingProject">billing_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint">binary_authorization_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint">blockchain_node_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.certificateManagerCustomEndpoint">certificate_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudAssetCustomEndpoint">cloud_asset_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBillingCustomEndpoint">cloud_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildCustomEndpoint">cloud_build_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudbuildv2CustomEndpoint">cloudbuildv2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint">cloud_build_worker_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddeployCustomEndpoint">clouddeploy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddomainsCustomEndpoint">clouddomains_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudfunctions2CustomEndpoint">cloudfunctions2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudFunctionsCustomEndpoint">cloud_functions_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdentityCustomEndpoint">cloud_identity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdsCustomEndpoint">cloud_ids_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudQuotasCustomEndpoint">cloud_quotas_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint">cloud_resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunCustomEndpoint">cloud_run_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunV2CustomEndpoint">cloud_run_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudSchedulerCustomEndpoint">cloud_scheduler_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudTasksCustomEndpoint">cloud_tasks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.composerCustomEndpoint">composer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.computeCustomEndpoint">compute_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAnalysisCustomEndpoint">container_analysis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAttachedCustomEndpoint">container_attached_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAwsCustomEndpoint">container_aws_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAzureCustomEndpoint">container_azure_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerCustomEndpoint">container_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.coreBillingCustomEndpoint">core_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint">database_migration_service_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataCatalogCustomEndpoint">data_catalog_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataflowCustomEndpoint">dataflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataFusionCustomEndpoint">data_fusion_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataLossPreventionCustomEndpoint">data_loss_prevention_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataPipelineCustomEndpoint">data_pipeline_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataplexCustomEndpoint">dataplex_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocCustomEndpoint">dataproc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint">dataproc_metastore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.datastoreCustomEndpoint">datastore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.datastreamCustomEndpoint">datastream_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.defaultLabels">default_labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.deploymentManagerCustomEndpoint">deployment_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCustomEndpoint">dialogflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCxCustomEndpoint">dialogflow_cx_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.discoveryEngineCustomEndpoint">discovery_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dnsCustomEndpoint">dns_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiCustomEndpoint">document_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint">document_ai_warehouse_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgecontainerCustomEndpoint">edgecontainer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgenetworkCustomEndpoint">edgenetwork_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.essentialContactsCustomEndpoint">essential_contacts_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.eventarcCustomEndpoint">eventarc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.filestoreCustomEndpoint">filestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint">firebase_app_check_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaserulesCustomEndpoint">firebaserules_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firestoreCustomEndpoint">firestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeBackupCustomEndpoint">gke_backup_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHub2CustomEndpoint">gke_hub2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHubCustomEndpoint">gke_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkehubFeatureCustomEndpoint">gkehub_feature_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeonpremCustomEndpoint">gkeonprem_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.healthcareCustomEndpoint">healthcare_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iam2CustomEndpoint">iam2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamBetaCustomEndpoint">iam_beta_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCredentialsCustomEndpoint">iam_credentials_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCustomEndpoint">iam_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint">iam_workforce_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iapCustomEndpoint">iap_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.identityPlatformCustomEndpoint">identity_platform_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccount">impersonate_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccountDelegates">impersonate_service_account_delegates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationConnectorsCustomEndpoint">integration_connectors_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationsCustomEndpoint">integrations_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.kmsCustomEndpoint">kms_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.loggingCustomEndpoint">logging_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.lookerCustomEndpoint">looker_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.memcacheCustomEndpoint">memcache_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.migrationCenterCustomEndpoint">migration_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.mlEngineCustomEndpoint">ml_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.monitoringCustomEndpoint">monitoring_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.netappCustomEndpoint">netapp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkConnectivityCustomEndpoint">network_connectivity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkManagementCustomEndpoint">network_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkSecurityCustomEndpoint">network_security_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkServicesCustomEndpoint">network_services_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.notebooksCustomEndpoint">notebooks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.orgPolicyCustomEndpoint">org_policy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osConfigCustomEndpoint">os_config_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osLoginCustomEndpoint">os_login_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.privatecaCustomEndpoint">privateca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.publicCaCustomEndpoint">public_ca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubCustomEndpoint">pubsub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubLiteCustomEndpoint">pubsub_lite_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint">recaptcha_enterprise_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.redisCustomEndpoint">redis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestReason">request_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerCustomEndpoint">resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerV3CustomEndpoint">resource_manager_v3_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secretManagerCustomEndpoint">secret_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secureSourceManagerCustomEndpoint">secure_source_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterCustomEndpoint">security_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securitypostureCustomEndpoint">securityposture_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceManagementCustomEndpoint">service_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceNetworkingCustomEndpoint">service_networking_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceUsageCustomEndpoint">service_usage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sourceRepoCustomEndpoint">source_repo_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.spannerCustomEndpoint">spanner_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sqlCustomEndpoint">sql_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageCustomEndpoint">storage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageInsightsCustomEndpoint">storage_insights_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageTransferCustomEndpoint">storage_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsCustomEndpoint">tags_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsLocationCustomEndpoint">tags_location_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy">terraform_attribution_label_addition_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tpuCustomEndpoint">tpu_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.universeDomain">universe_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.userProjectOverride">user_project_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vertexAiCustomEndpoint">vertex_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vmwareengineCustomEndpoint">vmwareengine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vpcAccessCustomEndpoint">vpc_access_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workbenchCustomEndpoint">workbench_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workflowsCustomEndpoint">workflows_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#zone GoogleProvider#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_approval_custom_endpoint`<sup>Optional</sup> <a name="access_approval_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessApprovalCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `access_context_manager_custom_endpoint`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessContextManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_token GoogleProvider#access_token}.

---

##### `active_directory_custom_endpoint`<sup>Optional</sup> <a name="active_directory_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.activeDirectoryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `add_terraform_attribution_label`<sup>Optional</sup> <a name="add_terraform_attribution_label" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.addTerraformAttributionLabel"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#alias GoogleProvider#alias}

---

##### `alloydb_custom_endpoint`<sup>Optional</sup> <a name="alloydb_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.alloydbCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `apigee_custom_endpoint`<sup>Optional</sup> <a name="apigee_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apigeeCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `apikeys_custom_endpoint`<sup>Optional</sup> <a name="apikeys_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apikeysCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `app_engine_custom_endpoint`<sup>Optional</sup> <a name="app_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.appEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `apphub_custom_endpoint`<sup>Optional</sup> <a name="apphub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.apphubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `artifact_registry_custom_endpoint`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.artifactRegistryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `assured_workloads_custom_endpoint`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.assuredWorkloadsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.batching"></a>

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#batching GoogleProvider#batching}

---

##### `beyondcorp_custom_endpoint`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.beyondcorpCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `biglake_custom_endpoint`<sup>Optional</sup> <a name="biglake_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.biglakeCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `bigquery_analytics_hub_custom_endpoint`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryAnalyticsHubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigquery_connection_custom_endpoint`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryConnectionCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `big_query_custom_endpoint`<sup>Optional</sup> <a name="big_query_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigQueryCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `bigquery_datapolicy_custom_endpoint`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDatapolicyCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigquery_data_transfer_custom_endpoint`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryDataTransferCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigquery_reservation_custom_endpoint`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigqueryReservationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtable_custom_endpoint`<sup>Optional</sup> <a name="bigtable_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.bigtableCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `billing_custom_endpoint`<sup>Optional</sup> <a name="billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.billingProject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_project GoogleProvider#billing_project}.

---

##### `binary_authorization_custom_endpoint`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.binaryAuthorizationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `blockchain_node_engine_custom_endpoint`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.blockchainNodeEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificate_manager_custom_endpoint`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.certificateManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `cloud_asset_custom_endpoint`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudAssetCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `cloud_billing_custom_endpoint`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBillingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `cloud_build_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2_custom_endpoint`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudbuildv2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloud_build_worker_pool_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudBuildWorkerPoolCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeploy_custom_endpoint`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddeployCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomains_custom_endpoint`<sup>Optional</sup> <a name="clouddomains_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.clouddomainsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2_custom_endpoint`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudfunctions2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloud_functions_custom_endpoint`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudFunctionsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `cloud_identity_custom_endpoint`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdentityCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `cloud_ids_custom_endpoint`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudIdsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `cloud_quotas_custom_endpoint`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudQuotasCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `cloud_resource_manager_custom_endpoint`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudResourceManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloud_run_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `cloud_run_v2_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudRunV2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloud_scheduler_custom_endpoint`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudSchedulerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloud_tasks_custom_endpoint`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.cloudTasksCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `composer_custom_endpoint`<sup>Optional</sup> <a name="composer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.composerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `compute_custom_endpoint`<sup>Optional</sup> <a name="compute_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.computeCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `container_analysis_custom_endpoint`<sup>Optional</sup> <a name="container_analysis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAnalysisCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `container_attached_custom_endpoint`<sup>Optional</sup> <a name="container_attached_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAttachedCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `container_aws_custom_endpoint`<sup>Optional</sup> <a name="container_aws_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAwsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `container_azure_custom_endpoint`<sup>Optional</sup> <a name="container_azure_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerAzureCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `container_custom_endpoint`<sup>Optional</sup> <a name="container_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.containerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `core_billing_custom_endpoint`<sup>Optional</sup> <a name="core_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.coreBillingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#credentials GoogleProvider#credentials}.

---

##### `database_migration_service_custom_endpoint`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.databaseMigrationServiceCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `data_catalog_custom_endpoint`<sup>Optional</sup> <a name="data_catalog_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataCatalogCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `dataflow_custom_endpoint`<sup>Optional</sup> <a name="dataflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataflowCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `data_fusion_custom_endpoint`<sup>Optional</sup> <a name="data_fusion_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataFusionCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `data_loss_prevention_custom_endpoint`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataLossPreventionCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `data_pipeline_custom_endpoint`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataPipelineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `dataplex_custom_endpoint`<sup>Optional</sup> <a name="dataplex_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataplexCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `dataproc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `dataproc_metastore_custom_endpoint`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dataprocMetastoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastore_custom_endpoint`<sup>Optional</sup> <a name="datastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.datastoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}.

---

##### `datastream_custom_endpoint`<sup>Optional</sup> <a name="datastream_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.datastreamCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `default_labels`<sup>Optional</sup> <a name="default_labels" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.defaultLabels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#default_labels GoogleProvider#default_labels}.

---

##### `deployment_manager_custom_endpoint`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.deploymentManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `dialogflow_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `dialogflow_cx_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dialogflowCxCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `discovery_engine_custom_endpoint`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.discoveryEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `dns_custom_endpoint`<sup>Optional</sup> <a name="dns_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.dnsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `document_ai_custom_endpoint`<sup>Optional</sup> <a name="document_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `document_ai_warehouse_custom_endpoint`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.documentAiWarehouseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainer_custom_endpoint`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgecontainerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetwork_custom_endpoint`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.edgenetworkCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `essential_contacts_custom_endpoint`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.essentialContactsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `eventarc_custom_endpoint`<sup>Optional</sup> <a name="eventarc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.eventarcCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `filestore_custom_endpoint`<sup>Optional</sup> <a name="filestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.filestoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `firebase_app_check_custom_endpoint`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaseAppCheckCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaserules_custom_endpoint`<sup>Optional</sup> <a name="firebaserules_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firebaserulesCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `firestore_custom_endpoint`<sup>Optional</sup> <a name="firestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.firestoreCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `gke_backup_custom_endpoint`<sup>Optional</sup> <a name="gke_backup_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeBackupCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `gke_hub2_custom_endpoint`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHub2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `gke_hub_custom_endpoint`<sup>Optional</sup> <a name="gke_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeHubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `gkehub_feature_custom_endpoint`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkehubFeatureCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonprem_custom_endpoint`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.gkeonpremCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `healthcare_custom_endpoint`<sup>Optional</sup> <a name="healthcare_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.healthcareCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `iam2_custom_endpoint`<sup>Optional</sup> <a name="iam2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iam2CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `iam_beta_custom_endpoint`<sup>Optional</sup> <a name="iam_beta_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamBetaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `iam_credentials_custom_endpoint`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCredentialsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `iam_custom_endpoint`<sup>Optional</sup> <a name="iam_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `iam_workforce_pool_custom_endpoint`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iamWorkforcePoolCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iap_custom_endpoint`<sup>Optional</sup> <a name="iap_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.iapCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `identity_platform_custom_endpoint`<sup>Optional</sup> <a name="identity_platform_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.identityPlatformCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `impersonate_service_account`<sup>Optional</sup> <a name="impersonate_service_account" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `impersonate_service_account_delegates`<sup>Optional</sup> <a name="impersonate_service_account_delegates" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.impersonateServiceAccountDelegates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `integration_connectors_custom_endpoint`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationConnectorsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `integrations_custom_endpoint`<sup>Optional</sup> <a name="integrations_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.integrationsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `kms_custom_endpoint`<sup>Optional</sup> <a name="kms_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.kmsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `logging_custom_endpoint`<sup>Optional</sup> <a name="logging_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.loggingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `looker_custom_endpoint`<sup>Optional</sup> <a name="looker_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.lookerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `memcache_custom_endpoint`<sup>Optional</sup> <a name="memcache_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.memcacheCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `migration_center_custom_endpoint`<sup>Optional</sup> <a name="migration_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.migrationCenterCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `ml_engine_custom_endpoint`<sup>Optional</sup> <a name="ml_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.mlEngineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `monitoring_custom_endpoint`<sup>Optional</sup> <a name="monitoring_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.monitoringCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `netapp_custom_endpoint`<sup>Optional</sup> <a name="netapp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.netappCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `network_connectivity_custom_endpoint`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkConnectivityCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `network_management_custom_endpoint`<sup>Optional</sup> <a name="network_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkManagementCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `network_security_custom_endpoint`<sup>Optional</sup> <a name="network_security_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkSecurityCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `network_services_custom_endpoint`<sup>Optional</sup> <a name="network_services_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.networkServicesCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `notebooks_custom_endpoint`<sup>Optional</sup> <a name="notebooks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.notebooksCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `org_policy_custom_endpoint`<sup>Optional</sup> <a name="org_policy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.orgPolicyCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `os_config_custom_endpoint`<sup>Optional</sup> <a name="os_config_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osConfigCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `os_login_custom_endpoint`<sup>Optional</sup> <a name="os_login_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.osLoginCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `privateca_custom_endpoint`<sup>Optional</sup> <a name="privateca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.privatecaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#project GoogleProvider#project}.

---

##### `public_ca_custom_endpoint`<sup>Optional</sup> <a name="public_ca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.publicCaCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `pubsub_custom_endpoint`<sup>Optional</sup> <a name="pubsub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `pubsub_lite_custom_endpoint`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.pubsubLiteCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptcha_enterprise_custom_endpoint`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.recaptchaEnterpriseCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redis_custom_endpoint`<sup>Optional</sup> <a name="redis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.redisCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#region GoogleProvider#region}.

---

##### `request_reason`<sup>Optional</sup> <a name="request_reason" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_reason GoogleProvider#request_reason}.

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `resource_manager_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `resource_manager_v3_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.resourceManagerV3CustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#scopes GoogleProvider#scopes}.

---

##### `secret_manager_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secretManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `secure_source_manager_custom_endpoint`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.secureSourceManagerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `security_center_custom_endpoint`<sup>Optional</sup> <a name="security_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securityCenterCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `securityposture_custom_endpoint`<sup>Optional</sup> <a name="securityposture_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.securitypostureCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `service_management_custom_endpoint`<sup>Optional</sup> <a name="service_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceManagementCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `service_networking_custom_endpoint`<sup>Optional</sup> <a name="service_networking_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceNetworkingCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `service_usage_custom_endpoint`<sup>Optional</sup> <a name="service_usage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.serviceUsageCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `source_repo_custom_endpoint`<sup>Optional</sup> <a name="source_repo_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sourceRepoCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `spanner_custom_endpoint`<sup>Optional</sup> <a name="spanner_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.spannerCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `sql_custom_endpoint`<sup>Optional</sup> <a name="sql_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.sqlCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `storage_custom_endpoint`<sup>Optional</sup> <a name="storage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `storage_insights_custom_endpoint`<sup>Optional</sup> <a name="storage_insights_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageInsightsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `storage_transfer_custom_endpoint`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.storageTransferCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `tags_custom_endpoint`<sup>Optional</sup> <a name="tags_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `tags_location_custom_endpoint`<sup>Optional</sup> <a name="tags_location_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tagsLocationCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `terraform_attribution_label_addition_strategy`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.terraformAttributionLabelAdditionStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpu_custom_endpoint`<sup>Optional</sup> <a name="tpu_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.tpuCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `universe_domain`<sup>Optional</sup> <a name="universe_domain" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.universeDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `user_project_override`<sup>Optional</sup> <a name="user_project_override" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.userProjectOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `vertex_ai_custom_endpoint`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vertexAiCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengine_custom_endpoint`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vmwareengineCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `vpc_access_custom_endpoint`<sup>Optional</sup> <a name="vpc_access_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.vpcAccessCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `workbench_custom_endpoint`<sup>Optional</sup> <a name="workbench_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workbenchCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `workflows_custom_endpoint`<sup>Optional</sup> <a name="workflows_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.workflowsCustomEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#zone GoogleProvider#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint">reset_access_approval_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint">reset_access_context_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint">reset_active_directory_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel">reset_add_terraform_attribution_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint">reset_alloydb_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint">reset_apigee_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint">reset_apikeys_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint">reset_app_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint">reset_apphub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint">reset_artifact_registry_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint">reset_assured_workloads_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBatching">reset_batching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint">reset_beyondcorp_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint">reset_biglake_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint">reset_bigquery_analytics_hub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint">reset_bigquery_connection_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint">reset_big_query_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint">reset_bigquery_datapolicy_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint">reset_bigquery_data_transfer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint">reset_bigquery_reservation_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint">reset_bigtable_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint">reset_billing_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBillingProject">reset_billing_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint">reset_binary_authorization_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint">reset_blockchain_node_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint">reset_certificate_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint">reset_cloud_asset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint">reset_cloud_billing_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint">reset_cloud_build_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint">reset_cloudbuildv2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint">reset_cloud_build_worker_pool_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint">reset_clouddeploy_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint">reset_clouddomains_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint">reset_cloudfunctions2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint">reset_cloud_functions_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint">reset_cloud_identity_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint">reset_cloud_ids_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint">reset_cloud_quotas_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint">reset_cloud_resource_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint">reset_cloud_run_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint">reset_cloud_run_v2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint">reset_cloud_scheduler_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint">reset_cloud_tasks_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint">reset_composer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint">reset_compute_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint">reset_container_analysis_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint">reset_container_attached_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint">reset_container_aws_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint">reset_container_azure_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint">reset_container_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint">reset_core_billing_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint">reset_database_migration_service_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint">reset_data_catalog_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint">reset_dataflow_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint">reset_data_fusion_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint">reset_data_loss_prevention_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint">reset_data_pipeline_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint">reset_dataplex_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint">reset_dataproc_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint">reset_dataproc_metastore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatastoreCustomEndpoint">reset_datastore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint">reset_datastream_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels">reset_default_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint">reset_deployment_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint">reset_dialogflow_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint">reset_dialogflow_cx_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint">reset_discovery_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint">reset_dns_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint">reset_document_ai_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint">reset_document_ai_warehouse_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint">reset_edgecontainer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint">reset_edgenetwork_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint">reset_essential_contacts_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint">reset_eventarc_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint">reset_filestore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint">reset_firebase_app_check_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint">reset_firebaserules_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint">reset_firestore_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint">reset_gke_backup_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint">reset_gke_hub2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint">reset_gke_hub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkehubFeatureCustomEndpoint">reset_gkehub_feature_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint">reset_gkeonprem_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint">reset_healthcare_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint">reset_iam2_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint">reset_iam_beta_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint">reset_iam_credentials_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint">reset_iam_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint">reset_iam_workforce_pool_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint">reset_iap_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint">reset_identity_platform_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount">reset_impersonate_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates">reset_impersonate_service_account_delegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint">reset_integration_connectors_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint">reset_integrations_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint">reset_kms_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint">reset_logging_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint">reset_looker_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint">reset_memcache_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint">reset_migration_center_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint">reset_ml_engine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint">reset_monitoring_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint">reset_netapp_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint">reset_network_connectivity_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint">reset_network_management_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint">reset_network_security_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint">reset_network_services_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint">reset_notebooks_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint">reset_org_policy_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint">reset_os_config_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint">reset_os_login_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint">reset_privateca_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint">reset_public_ca_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint">reset_pubsub_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint">reset_pubsub_lite_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint">reset_recaptcha_enterprise_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint">reset_redis_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRequestReason">reset_request_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint">reset_resource_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint">reset_resource_manager_v3_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint">reset_secret_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint">reset_secure_source_manager_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint">reset_security_center_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint">reset_securityposture_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint">reset_service_management_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint">reset_service_networking_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint">reset_service_usage_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint">reset_source_repo_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint">reset_spanner_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint">reset_sql_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint">reset_storage_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint">reset_storage_insights_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint">reset_storage_transfer_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint">reset_tags_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint">reset_tags_location_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy">reset_terraform_attribution_label_addition_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint">reset_tpu_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain">reset_universe_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride">reset_user_project_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint">reset_vertex_ai_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint">reset_vmwareengine_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint">reset_vpc_access_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint">reset_workbench_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint">reset_workflows_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.provider.GoogleProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.provider.GoogleProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.provider.GoogleProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.provider.GoogleProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.provider.GoogleProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_approval_custom_endpoint` <a name="reset_access_approval_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint"></a>

```python
def reset_access_approval_custom_endpoint() -> None
```

##### `reset_access_context_manager_custom_endpoint` <a name="reset_access_context_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint"></a>

```python
def reset_access_context_manager_custom_endpoint() -> None
```

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_active_directory_custom_endpoint` <a name="reset_active_directory_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint"></a>

```python
def reset_active_directory_custom_endpoint() -> None
```

##### `reset_add_terraform_attribution_label` <a name="reset_add_terraform_attribution_label" id="@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel"></a>

```python
def reset_add_terraform_attribution_label() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-google.provider.GoogleProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_alloydb_custom_endpoint` <a name="reset_alloydb_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint"></a>

```python
def reset_alloydb_custom_endpoint() -> None
```

##### `reset_apigee_custom_endpoint` <a name="reset_apigee_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint"></a>

```python
def reset_apigee_custom_endpoint() -> None
```

##### `reset_apikeys_custom_endpoint` <a name="reset_apikeys_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint"></a>

```python
def reset_apikeys_custom_endpoint() -> None
```

##### `reset_app_engine_custom_endpoint` <a name="reset_app_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint"></a>

```python
def reset_app_engine_custom_endpoint() -> None
```

##### `reset_apphub_custom_endpoint` <a name="reset_apphub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint"></a>

```python
def reset_apphub_custom_endpoint() -> None
```

##### `reset_artifact_registry_custom_endpoint` <a name="reset_artifact_registry_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint"></a>

```python
def reset_artifact_registry_custom_endpoint() -> None
```

##### `reset_assured_workloads_custom_endpoint` <a name="reset_assured_workloads_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```python
def reset_assured_workloads_custom_endpoint() -> None
```

##### `reset_batching` <a name="reset_batching" id="@cdktf/provider-google.provider.GoogleProvider.resetBatching"></a>

```python
def reset_batching() -> None
```

##### `reset_beyondcorp_custom_endpoint` <a name="reset_beyondcorp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint"></a>

```python
def reset_beyondcorp_custom_endpoint() -> None
```

##### `reset_biglake_custom_endpoint` <a name="reset_biglake_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint"></a>

```python
def reset_biglake_custom_endpoint() -> None
```

##### `reset_bigquery_analytics_hub_custom_endpoint` <a name="reset_bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```python
def reset_bigquery_analytics_hub_custom_endpoint() -> None
```

##### `reset_bigquery_connection_custom_endpoint` <a name="reset_bigquery_connection_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint"></a>

```python
def reset_bigquery_connection_custom_endpoint() -> None
```

##### `reset_big_query_custom_endpoint` <a name="reset_big_query_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint"></a>

```python
def reset_big_query_custom_endpoint() -> None
```

##### `reset_bigquery_datapolicy_custom_endpoint` <a name="reset_bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```python
def reset_bigquery_datapolicy_custom_endpoint() -> None
```

##### `reset_bigquery_data_transfer_custom_endpoint` <a name="reset_bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```python
def reset_bigquery_data_transfer_custom_endpoint() -> None
```

##### `reset_bigquery_reservation_custom_endpoint` <a name="reset_bigquery_reservation_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint"></a>

```python
def reset_bigquery_reservation_custom_endpoint() -> None
```

##### `reset_bigtable_custom_endpoint` <a name="reset_bigtable_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint"></a>

```python
def reset_bigtable_custom_endpoint() -> None
```

##### `reset_billing_custom_endpoint` <a name="reset_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint"></a>

```python
def reset_billing_custom_endpoint() -> None
```

##### `reset_billing_project` <a name="reset_billing_project" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingProject"></a>

```python
def reset_billing_project() -> None
```

##### `reset_binary_authorization_custom_endpoint` <a name="reset_binary_authorization_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```python
def reset_binary_authorization_custom_endpoint() -> None
```

##### `reset_blockchain_node_engine_custom_endpoint` <a name="reset_blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```python
def reset_blockchain_node_engine_custom_endpoint() -> None
```

##### `reset_certificate_manager_custom_endpoint` <a name="reset_certificate_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint"></a>

```python
def reset_certificate_manager_custom_endpoint() -> None
```

##### `reset_cloud_asset_custom_endpoint` <a name="reset_cloud_asset_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint"></a>

```python
def reset_cloud_asset_custom_endpoint() -> None
```

##### `reset_cloud_billing_custom_endpoint` <a name="reset_cloud_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint"></a>

```python
def reset_cloud_billing_custom_endpoint() -> None
```

##### `reset_cloud_build_custom_endpoint` <a name="reset_cloud_build_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint"></a>

```python
def reset_cloud_build_custom_endpoint() -> None
```

##### `reset_cloudbuildv2_custom_endpoint` <a name="reset_cloudbuildv2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint"></a>

```python
def reset_cloudbuildv2_custom_endpoint() -> None
```

##### `reset_cloud_build_worker_pool_custom_endpoint` <a name="reset_cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```python
def reset_cloud_build_worker_pool_custom_endpoint() -> None
```

##### `reset_clouddeploy_custom_endpoint` <a name="reset_clouddeploy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint"></a>

```python
def reset_clouddeploy_custom_endpoint() -> None
```

##### `reset_clouddomains_custom_endpoint` <a name="reset_clouddomains_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint"></a>

```python
def reset_clouddomains_custom_endpoint() -> None
```

##### `reset_cloudfunctions2_custom_endpoint` <a name="reset_cloudfunctions2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint"></a>

```python
def reset_cloudfunctions2_custom_endpoint() -> None
```

##### `reset_cloud_functions_custom_endpoint` <a name="reset_cloud_functions_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint"></a>

```python
def reset_cloud_functions_custom_endpoint() -> None
```

##### `reset_cloud_identity_custom_endpoint` <a name="reset_cloud_identity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint"></a>

```python
def reset_cloud_identity_custom_endpoint() -> None
```

##### `reset_cloud_ids_custom_endpoint` <a name="reset_cloud_ids_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint"></a>

```python
def reset_cloud_ids_custom_endpoint() -> None
```

##### `reset_cloud_quotas_custom_endpoint` <a name="reset_cloud_quotas_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint"></a>

```python
def reset_cloud_quotas_custom_endpoint() -> None
```

##### `reset_cloud_resource_manager_custom_endpoint` <a name="reset_cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint"></a>

```python
def reset_cloud_resource_manager_custom_endpoint() -> None
```

##### `reset_cloud_run_custom_endpoint` <a name="reset_cloud_run_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint"></a>

```python
def reset_cloud_run_custom_endpoint() -> None
```

##### `reset_cloud_run_v2_custom_endpoint` <a name="reset_cloud_run_v2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint"></a>

```python
def reset_cloud_run_v2_custom_endpoint() -> None
```

##### `reset_cloud_scheduler_custom_endpoint` <a name="reset_cloud_scheduler_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint"></a>

```python
def reset_cloud_scheduler_custom_endpoint() -> None
```

##### `reset_cloud_tasks_custom_endpoint` <a name="reset_cloud_tasks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint"></a>

```python
def reset_cloud_tasks_custom_endpoint() -> None
```

##### `reset_composer_custom_endpoint` <a name="reset_composer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint"></a>

```python
def reset_composer_custom_endpoint() -> None
```

##### `reset_compute_custom_endpoint` <a name="reset_compute_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint"></a>

```python
def reset_compute_custom_endpoint() -> None
```

##### `reset_container_analysis_custom_endpoint` <a name="reset_container_analysis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint"></a>

```python
def reset_container_analysis_custom_endpoint() -> None
```

##### `reset_container_attached_custom_endpoint` <a name="reset_container_attached_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint"></a>

```python
def reset_container_attached_custom_endpoint() -> None
```

##### `reset_container_aws_custom_endpoint` <a name="reset_container_aws_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint"></a>

```python
def reset_container_aws_custom_endpoint() -> None
```

##### `reset_container_azure_custom_endpoint` <a name="reset_container_azure_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint"></a>

```python
def reset_container_azure_custom_endpoint() -> None
```

##### `reset_container_custom_endpoint` <a name="reset_container_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint"></a>

```python
def reset_container_custom_endpoint() -> None
```

##### `reset_core_billing_custom_endpoint` <a name="reset_core_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint"></a>

```python
def reset_core_billing_custom_endpoint() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-google.provider.GoogleProvider.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_database_migration_service_custom_endpoint` <a name="reset_database_migration_service_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```python
def reset_database_migration_service_custom_endpoint() -> None
```

##### `reset_data_catalog_custom_endpoint` <a name="reset_data_catalog_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint"></a>

```python
def reset_data_catalog_custom_endpoint() -> None
```

##### `reset_dataflow_custom_endpoint` <a name="reset_dataflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint"></a>

```python
def reset_dataflow_custom_endpoint() -> None
```

##### `reset_data_fusion_custom_endpoint` <a name="reset_data_fusion_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint"></a>

```python
def reset_data_fusion_custom_endpoint() -> None
```

##### `reset_data_loss_prevention_custom_endpoint` <a name="reset_data_loss_prevention_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint"></a>

```python
def reset_data_loss_prevention_custom_endpoint() -> None
```

##### `reset_data_pipeline_custom_endpoint` <a name="reset_data_pipeline_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint"></a>

```python
def reset_data_pipeline_custom_endpoint() -> None
```

##### `reset_dataplex_custom_endpoint` <a name="reset_dataplex_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint"></a>

```python
def reset_dataplex_custom_endpoint() -> None
```

##### `reset_dataproc_custom_endpoint` <a name="reset_dataproc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint"></a>

```python
def reset_dataproc_custom_endpoint() -> None
```

##### `reset_dataproc_metastore_custom_endpoint` <a name="reset_dataproc_metastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint"></a>

```python
def reset_dataproc_metastore_custom_endpoint() -> None
```

##### `reset_datastore_custom_endpoint` <a name="reset_datastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastoreCustomEndpoint"></a>

```python
def reset_datastore_custom_endpoint() -> None
```

##### `reset_datastream_custom_endpoint` <a name="reset_datastream_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint"></a>

```python
def reset_datastream_custom_endpoint() -> None
```

##### `reset_default_labels` <a name="reset_default_labels" id="@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels"></a>

```python
def reset_default_labels() -> None
```

##### `reset_deployment_manager_custom_endpoint` <a name="reset_deployment_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint"></a>

```python
def reset_deployment_manager_custom_endpoint() -> None
```

##### `reset_dialogflow_custom_endpoint` <a name="reset_dialogflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint"></a>

```python
def reset_dialogflow_custom_endpoint() -> None
```

##### `reset_dialogflow_cx_custom_endpoint` <a name="reset_dialogflow_cx_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint"></a>

```python
def reset_dialogflow_cx_custom_endpoint() -> None
```

##### `reset_discovery_engine_custom_endpoint` <a name="reset_discovery_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint"></a>

```python
def reset_discovery_engine_custom_endpoint() -> None
```

##### `reset_dns_custom_endpoint` <a name="reset_dns_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint"></a>

```python
def reset_dns_custom_endpoint() -> None
```

##### `reset_document_ai_custom_endpoint` <a name="reset_document_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint"></a>

```python
def reset_document_ai_custom_endpoint() -> None
```

##### `reset_document_ai_warehouse_custom_endpoint` <a name="reset_document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```python
def reset_document_ai_warehouse_custom_endpoint() -> None
```

##### `reset_edgecontainer_custom_endpoint` <a name="reset_edgecontainer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint"></a>

```python
def reset_edgecontainer_custom_endpoint() -> None
```

##### `reset_edgenetwork_custom_endpoint` <a name="reset_edgenetwork_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint"></a>

```python
def reset_edgenetwork_custom_endpoint() -> None
```

##### `reset_essential_contacts_custom_endpoint` <a name="reset_essential_contacts_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint"></a>

```python
def reset_essential_contacts_custom_endpoint() -> None
```

##### `reset_eventarc_custom_endpoint` <a name="reset_eventarc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint"></a>

```python
def reset_eventarc_custom_endpoint() -> None
```

##### `reset_filestore_custom_endpoint` <a name="reset_filestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint"></a>

```python
def reset_filestore_custom_endpoint() -> None
```

##### `reset_firebase_app_check_custom_endpoint` <a name="reset_firebase_app_check_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```python
def reset_firebase_app_check_custom_endpoint() -> None
```

##### `reset_firebaserules_custom_endpoint` <a name="reset_firebaserules_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint"></a>

```python
def reset_firebaserules_custom_endpoint() -> None
```

##### `reset_firestore_custom_endpoint` <a name="reset_firestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint"></a>

```python
def reset_firestore_custom_endpoint() -> None
```

##### `reset_gke_backup_custom_endpoint` <a name="reset_gke_backup_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint"></a>

```python
def reset_gke_backup_custom_endpoint() -> None
```

##### `reset_gke_hub2_custom_endpoint` <a name="reset_gke_hub2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint"></a>

```python
def reset_gke_hub2_custom_endpoint() -> None
```

##### `reset_gke_hub_custom_endpoint` <a name="reset_gke_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint"></a>

```python
def reset_gke_hub_custom_endpoint() -> None
```

##### `reset_gkehub_feature_custom_endpoint` <a name="reset_gkehub_feature_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkehubFeatureCustomEndpoint"></a>

```python
def reset_gkehub_feature_custom_endpoint() -> None
```

##### `reset_gkeonprem_custom_endpoint` <a name="reset_gkeonprem_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint"></a>

```python
def reset_gkeonprem_custom_endpoint() -> None
```

##### `reset_healthcare_custom_endpoint` <a name="reset_healthcare_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint"></a>

```python
def reset_healthcare_custom_endpoint() -> None
```

##### `reset_iam2_custom_endpoint` <a name="reset_iam2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint"></a>

```python
def reset_iam2_custom_endpoint() -> None
```

##### `reset_iam_beta_custom_endpoint` <a name="reset_iam_beta_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint"></a>

```python
def reset_iam_beta_custom_endpoint() -> None
```

##### `reset_iam_credentials_custom_endpoint` <a name="reset_iam_credentials_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint"></a>

```python
def reset_iam_credentials_custom_endpoint() -> None
```

##### `reset_iam_custom_endpoint` <a name="reset_iam_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint"></a>

```python
def reset_iam_custom_endpoint() -> None
```

##### `reset_iam_workforce_pool_custom_endpoint` <a name="reset_iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```python
def reset_iam_workforce_pool_custom_endpoint() -> None
```

##### `reset_iap_custom_endpoint` <a name="reset_iap_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint"></a>

```python
def reset_iap_custom_endpoint() -> None
```

##### `reset_identity_platform_custom_endpoint` <a name="reset_identity_platform_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint"></a>

```python
def reset_identity_platform_custom_endpoint() -> None
```

##### `reset_impersonate_service_account` <a name="reset_impersonate_service_account" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount"></a>

```python
def reset_impersonate_service_account() -> None
```

##### `reset_impersonate_service_account_delegates` <a name="reset_impersonate_service_account_delegates" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates"></a>

```python
def reset_impersonate_service_account_delegates() -> None
```

##### `reset_integration_connectors_custom_endpoint` <a name="reset_integration_connectors_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```python
def reset_integration_connectors_custom_endpoint() -> None
```

##### `reset_integrations_custom_endpoint` <a name="reset_integrations_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint"></a>

```python
def reset_integrations_custom_endpoint() -> None
```

##### `reset_kms_custom_endpoint` <a name="reset_kms_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint"></a>

```python
def reset_kms_custom_endpoint() -> None
```

##### `reset_logging_custom_endpoint` <a name="reset_logging_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint"></a>

```python
def reset_logging_custom_endpoint() -> None
```

##### `reset_looker_custom_endpoint` <a name="reset_looker_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint"></a>

```python
def reset_looker_custom_endpoint() -> None
```

##### `reset_memcache_custom_endpoint` <a name="reset_memcache_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint"></a>

```python
def reset_memcache_custom_endpoint() -> None
```

##### `reset_migration_center_custom_endpoint` <a name="reset_migration_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint"></a>

```python
def reset_migration_center_custom_endpoint() -> None
```

##### `reset_ml_engine_custom_endpoint` <a name="reset_ml_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint"></a>

```python
def reset_ml_engine_custom_endpoint() -> None
```

##### `reset_monitoring_custom_endpoint` <a name="reset_monitoring_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint"></a>

```python
def reset_monitoring_custom_endpoint() -> None
```

##### `reset_netapp_custom_endpoint` <a name="reset_netapp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint"></a>

```python
def reset_netapp_custom_endpoint() -> None
```

##### `reset_network_connectivity_custom_endpoint` <a name="reset_network_connectivity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint"></a>

```python
def reset_network_connectivity_custom_endpoint() -> None
```

##### `reset_network_management_custom_endpoint` <a name="reset_network_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint"></a>

```python
def reset_network_management_custom_endpoint() -> None
```

##### `reset_network_security_custom_endpoint` <a name="reset_network_security_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint"></a>

```python
def reset_network_security_custom_endpoint() -> None
```

##### `reset_network_services_custom_endpoint` <a name="reset_network_services_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint"></a>

```python
def reset_network_services_custom_endpoint() -> None
```

##### `reset_notebooks_custom_endpoint` <a name="reset_notebooks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint"></a>

```python
def reset_notebooks_custom_endpoint() -> None
```

##### `reset_org_policy_custom_endpoint` <a name="reset_org_policy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint"></a>

```python
def reset_org_policy_custom_endpoint() -> None
```

##### `reset_os_config_custom_endpoint` <a name="reset_os_config_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint"></a>

```python
def reset_os_config_custom_endpoint() -> None
```

##### `reset_os_login_custom_endpoint` <a name="reset_os_login_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint"></a>

```python
def reset_os_login_custom_endpoint() -> None
```

##### `reset_privateca_custom_endpoint` <a name="reset_privateca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint"></a>

```python
def reset_privateca_custom_endpoint() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.provider.GoogleProvider.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_ca_custom_endpoint` <a name="reset_public_ca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint"></a>

```python
def reset_public_ca_custom_endpoint() -> None
```

##### `reset_pubsub_custom_endpoint` <a name="reset_pubsub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint"></a>

```python
def reset_pubsub_custom_endpoint() -> None
```

##### `reset_pubsub_lite_custom_endpoint` <a name="reset_pubsub_lite_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint"></a>

```python
def reset_pubsub_lite_custom_endpoint() -> None
```

##### `reset_recaptcha_enterprise_custom_endpoint` <a name="reset_recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```python
def reset_recaptcha_enterprise_custom_endpoint() -> None
```

##### `reset_redis_custom_endpoint` <a name="reset_redis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint"></a>

```python
def reset_redis_custom_endpoint() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.provider.GoogleProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_request_reason` <a name="reset_request_reason" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestReason"></a>

```python
def reset_request_reason() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_resource_manager_custom_endpoint` <a name="reset_resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint"></a>

```python
def reset_resource_manager_custom_endpoint() -> None
```

##### `reset_resource_manager_v3_custom_endpoint` <a name="reset_resource_manager_v3_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint"></a>

```python
def reset_resource_manager_v3_custom_endpoint() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google.provider.GoogleProvider.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_manager_custom_endpoint` <a name="reset_secret_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint"></a>

```python
def reset_secret_manager_custom_endpoint() -> None
```

##### `reset_secure_source_manager_custom_endpoint` <a name="reset_secure_source_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint"></a>

```python
def reset_secure_source_manager_custom_endpoint() -> None
```

##### `reset_security_center_custom_endpoint` <a name="reset_security_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint"></a>

```python
def reset_security_center_custom_endpoint() -> None
```

##### `reset_securityposture_custom_endpoint` <a name="reset_securityposture_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint"></a>

```python
def reset_securityposture_custom_endpoint() -> None
```

##### `reset_service_management_custom_endpoint` <a name="reset_service_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint"></a>

```python
def reset_service_management_custom_endpoint() -> None
```

##### `reset_service_networking_custom_endpoint` <a name="reset_service_networking_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint"></a>

```python
def reset_service_networking_custom_endpoint() -> None
```

##### `reset_service_usage_custom_endpoint` <a name="reset_service_usage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint"></a>

```python
def reset_service_usage_custom_endpoint() -> None
```

##### `reset_source_repo_custom_endpoint` <a name="reset_source_repo_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint"></a>

```python
def reset_source_repo_custom_endpoint() -> None
```

##### `reset_spanner_custom_endpoint` <a name="reset_spanner_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint"></a>

```python
def reset_spanner_custom_endpoint() -> None
```

##### `reset_sql_custom_endpoint` <a name="reset_sql_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint"></a>

```python
def reset_sql_custom_endpoint() -> None
```

##### `reset_storage_custom_endpoint` <a name="reset_storage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint"></a>

```python
def reset_storage_custom_endpoint() -> None
```

##### `reset_storage_insights_custom_endpoint` <a name="reset_storage_insights_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint"></a>

```python
def reset_storage_insights_custom_endpoint() -> None
```

##### `reset_storage_transfer_custom_endpoint` <a name="reset_storage_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint"></a>

```python
def reset_storage_transfer_custom_endpoint() -> None
```

##### `reset_tags_custom_endpoint` <a name="reset_tags_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint"></a>

```python
def reset_tags_custom_endpoint() -> None
```

##### `reset_tags_location_custom_endpoint` <a name="reset_tags_location_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint"></a>

```python
def reset_tags_location_custom_endpoint() -> None
```

##### `reset_terraform_attribution_label_addition_strategy` <a name="reset_terraform_attribution_label_addition_strategy" id="@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```python
def reset_terraform_attribution_label_addition_strategy() -> None
```

##### `reset_tpu_custom_endpoint` <a name="reset_tpu_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint"></a>

```python
def reset_tpu_custom_endpoint() -> None
```

##### `reset_universe_domain` <a name="reset_universe_domain" id="@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain"></a>

```python
def reset_universe_domain() -> None
```

##### `reset_user_project_override` <a name="reset_user_project_override" id="@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride"></a>

```python
def reset_user_project_override() -> None
```

##### `reset_vertex_ai_custom_endpoint` <a name="reset_vertex_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint"></a>

```python
def reset_vertex_ai_custom_endpoint() -> None
```

##### `reset_vmwareengine_custom_endpoint` <a name="reset_vmwareengine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint"></a>

```python
def reset_vmwareengine_custom_endpoint() -> None
```

##### `reset_vpc_access_custom_endpoint` <a name="reset_vpc_access_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint"></a>

```python
def reset_vpc_access_custom_endpoint() -> None
```

##### `reset_workbench_custom_endpoint` <a name="reset_workbench_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint"></a>

```python
def reset_workbench_custom_endpoint() -> None
```

##### `reset_workflows_custom_endpoint` <a name="reset_workflows_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint"></a>

```python
def reset_workflows_custom_endpoint() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.provider.GoogleProvider.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput">access_approval_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput">access_context_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput">active_directory_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput">add_terraform_attribution_label_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput">alloydb_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput">apigee_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput">apikeys_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput">app_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput">apphub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput">artifact_registry_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput">assured_workloads_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batchingInput">batching_input</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput">beyondcorp_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput">biglake_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput">bigquery_analytics_hub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput">bigquery_connection_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput">big_query_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput">bigquery_datapolicy_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput">bigquery_data_transfer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput">bigquery_reservation_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput">bigtable_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput">billing_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput">billing_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput">binary_authorization_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput">blockchain_node_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput">certificate_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput">cloud_asset_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput">cloud_billing_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput">cloud_build_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput">cloudbuildv2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput">cloud_build_worker_pool_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput">clouddeploy_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput">clouddomains_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput">cloudfunctions2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput">cloud_functions_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput">cloud_identity_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput">cloud_ids_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput">cloud_quotas_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput">cloud_resource_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput">cloud_run_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput">cloud_run_v2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput">cloud_scheduler_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput">cloud_tasks_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput">composer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput">compute_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput">container_analysis_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput">container_attached_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput">container_aws_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput">container_azure_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput">container_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput">core_billing_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput">database_migration_service_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput">data_catalog_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput">dataflow_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput">data_fusion_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput">data_loss_prevention_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput">data_pipeline_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput">dataplex_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput">dataproc_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput">dataproc_metastore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpointInput">datastore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput">datastream_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput">default_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput">deployment_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput">dialogflow_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput">dialogflow_cx_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput">discovery_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput">dns_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput">document_ai_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput">document_ai_warehouse_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput">edgecontainer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput">edgenetwork_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput">essential_contacts_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput">eventarc_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput">filestore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput">firebase_app_check_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput">firebaserules_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput">firestore_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput">gke_backup_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput">gke_hub2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput">gke_hub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpointInput">gkehub_feature_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput">gkeonprem_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput">healthcare_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput">iam2_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput">iam_beta_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput">iam_credentials_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput">iam_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput">iam_workforce_pool_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput">iap_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput">identity_platform_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput">impersonate_service_account_delegates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput">impersonate_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput">integration_connectors_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput">integrations_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput">kms_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput">logging_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput">looker_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput">memcache_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput">migration_center_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput">ml_engine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput">monitoring_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput">netapp_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput">network_connectivity_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput">network_management_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput">network_security_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput">network_services_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput">notebooks_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput">org_policy_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput">os_config_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput">os_login_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput">privateca_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput">public_ca_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput">pubsub_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput">pubsub_lite_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput">recaptcha_enterprise_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput">redis_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput">request_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput">request_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput">resource_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput">resource_manager_v3_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput">secret_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput">secure_source_manager_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput">security_center_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput">securityposture_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput">service_management_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput">service_networking_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput">service_usage_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput">source_repo_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput">spanner_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput">sql_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput">storage_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput">storage_insights_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput">storage_transfer_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput">tags_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput">tags_location_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput">terraform_attribution_label_addition_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput">tpu_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput">universe_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput">user_project_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput">vertex_ai_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput">vmwareengine_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput">vpc_access_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput">workbench_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput">workflows_custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint">access_approval_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint">access_context_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint">active_directory_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel">add_terraform_attribution_label</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint">alloydb_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint">apigee_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint">apikeys_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint">app_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint">apphub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint">artifact_registry_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint">assured_workloads_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batching">batching</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint">beyondcorp_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint">biglake_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint">bigquery_analytics_hub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint">bigquery_connection_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint">big_query_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint">bigquery_datapolicy_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint">bigquery_data_transfer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint">bigquery_reservation_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint">bigtable_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint">billing_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProject">billing_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint">binary_authorization_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint">blockchain_node_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint">certificate_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint">cloud_asset_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint">cloud_billing_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint">cloud_build_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint">cloudbuildv2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint">cloud_build_worker_pool_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint">clouddeploy_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint">clouddomains_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint">cloudfunctions2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint">cloud_functions_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint">cloud_identity_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint">cloud_ids_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint">cloud_quotas_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint">cloud_resource_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint">cloud_run_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint">cloud_run_v2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint">cloud_scheduler_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint">cloud_tasks_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint">composer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint">compute_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint">container_analysis_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint">container_attached_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint">container_aws_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint">container_azure_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint">container_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint">core_billing_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint">database_migration_service_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint">data_catalog_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint">dataflow_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint">data_fusion_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint">data_loss_prevention_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint">data_pipeline_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint">dataplex_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint">dataproc_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint">dataproc_metastore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpoint">datastore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint">datastream_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels">default_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint">deployment_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint">dialogflow_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint">dialogflow_cx_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint">discovery_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint">dns_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint">document_ai_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint">document_ai_warehouse_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint">edgecontainer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint">edgenetwork_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint">essential_contacts_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint">eventarc_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint">filestore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint">firebase_app_check_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint">firebaserules_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint">firestore_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint">gke_backup_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint">gke_hub2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint">gke_hub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpoint">gkehub_feature_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint">gkeonprem_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint">healthcare_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint">iam2_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint">iam_beta_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint">iam_credentials_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint">iam_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint">iam_workforce_pool_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint">iap_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint">identity_platform_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount">impersonate_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates">impersonate_service_account_delegates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint">integration_connectors_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint">integrations_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint">kms_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint">logging_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint">looker_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint">memcache_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint">migration_center_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint">ml_engine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint">monitoring_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint">netapp_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint">network_connectivity_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint">network_management_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint">network_security_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint">network_services_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint">notebooks_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint">org_policy_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint">os_config_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint">os_login_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint">privateca_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint">public_ca_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint">pubsub_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint">pubsub_lite_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint">recaptcha_enterprise_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint">redis_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReason">request_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout">request_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint">resource_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint">resource_manager_v3_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint">secret_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint">secure_source_manager_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint">security_center_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint">securityposture_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint">service_management_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint">service_networking_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint">service_usage_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint">source_repo_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint">spanner_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint">sql_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint">storage_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint">storage_insights_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint">storage_transfer_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint">tags_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint">tags_location_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy">terraform_attribution_label_addition_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint">tpu_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomain">universe_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride">user_project_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint">vertex_ai_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint">vmwareengine_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint">vpc_access_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint">workbench_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint">workflows_custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.provider.GoogleProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.provider.GoogleProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google.provider.GoogleProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_approval_custom_endpoint_input`<sup>Optional</sup> <a name="access_approval_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput"></a>

```python
access_approval_custom_endpoint_input: str
```

- *Type:* str

---

##### `access_context_manager_custom_endpoint_input`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput"></a>

```python
access_context_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `active_directory_custom_endpoint_input`<sup>Optional</sup> <a name="active_directory_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput"></a>

```python
active_directory_custom_endpoint_input: str
```

- *Type:* str

---

##### `add_terraform_attribution_label_input`<sup>Optional</sup> <a name="add_terraform_attribution_label_input" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput"></a>

```python
add_terraform_attribution_label_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-google.provider.GoogleProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `alloydb_custom_endpoint_input`<sup>Optional</sup> <a name="alloydb_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput"></a>

```python
alloydb_custom_endpoint_input: str
```

- *Type:* str

---

##### `apigee_custom_endpoint_input`<sup>Optional</sup> <a name="apigee_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput"></a>

```python
apigee_custom_endpoint_input: str
```

- *Type:* str

---

##### `apikeys_custom_endpoint_input`<sup>Optional</sup> <a name="apikeys_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput"></a>

```python
apikeys_custom_endpoint_input: str
```

- *Type:* str

---

##### `app_engine_custom_endpoint_input`<sup>Optional</sup> <a name="app_engine_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput"></a>

```python
app_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `apphub_custom_endpoint_input`<sup>Optional</sup> <a name="apphub_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput"></a>

```python
apphub_custom_endpoint_input: str
```

- *Type:* str

---

##### `artifact_registry_custom_endpoint_input`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput"></a>

```python
artifact_registry_custom_endpoint_input: str
```

- *Type:* str

---

##### `assured_workloads_custom_endpoint_input`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```python
assured_workloads_custom_endpoint_input: str
```

- *Type:* str

---

##### `batching_input`<sup>Optional</sup> <a name="batching_input" id="@cdktf/provider-google.provider.GoogleProvider.property.batchingInput"></a>

```python
batching_input: GoogleProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

---

##### `beyondcorp_custom_endpoint_input`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput"></a>

```python
beyondcorp_custom_endpoint_input: str
```

- *Type:* str

---

##### `biglake_custom_endpoint_input`<sup>Optional</sup> <a name="biglake_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput"></a>

```python
biglake_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_analytics_hub_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```python
bigquery_analytics_hub_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_connection_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```python
bigquery_connection_custom_endpoint_input: str
```

- *Type:* str

---

##### `big_query_custom_endpoint_input`<sup>Optional</sup> <a name="big_query_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput"></a>

```python
big_query_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_datapolicy_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```python
bigquery_datapolicy_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_data_transfer_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```python
bigquery_data_transfer_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigquery_reservation_custom_endpoint_input`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput"></a>

```python
bigquery_reservation_custom_endpoint_input: str
```

- *Type:* str

---

##### `bigtable_custom_endpoint_input`<sup>Optional</sup> <a name="bigtable_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput"></a>

```python
bigtable_custom_endpoint_input: str
```

- *Type:* str

---

##### `billing_custom_endpoint_input`<sup>Optional</sup> <a name="billing_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput"></a>

```python
billing_custom_endpoint_input: str
```

- *Type:* str

---

##### `billing_project_input`<sup>Optional</sup> <a name="billing_project_input" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput"></a>

```python
billing_project_input: str
```

- *Type:* str

---

##### `binary_authorization_custom_endpoint_input`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```python
binary_authorization_custom_endpoint_input: str
```

- *Type:* str

---

##### `blockchain_node_engine_custom_endpoint_input`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```python
blockchain_node_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `certificate_manager_custom_endpoint_input`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput"></a>

```python
certificate_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_asset_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput"></a>

```python
cloud_asset_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_billing_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput"></a>

```python
cloud_billing_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_build_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_build_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput"></a>

```python
cloud_build_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloudbuildv2_custom_endpoint_input`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput"></a>

```python
cloudbuildv2_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_build_worker_pool_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```python
cloud_build_worker_pool_custom_endpoint_input: str
```

- *Type:* str

---

##### `clouddeploy_custom_endpoint_input`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput"></a>

```python
clouddeploy_custom_endpoint_input: str
```

- *Type:* str

---

##### `clouddomains_custom_endpoint_input`<sup>Optional</sup> <a name="clouddomains_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput"></a>

```python
clouddomains_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloudfunctions2_custom_endpoint_input`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput"></a>

```python
cloudfunctions2_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_functions_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput"></a>

```python
cloud_functions_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_identity_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput"></a>

```python
cloud_identity_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_ids_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput"></a>

```python
cloud_ids_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_quotas_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput"></a>

```python
cloud_quotas_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_resource_manager_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```python
cloud_resource_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_run_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_run_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput"></a>

```python
cloud_run_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_run_v2_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput"></a>

```python
cloud_run_v2_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_scheduler_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput"></a>

```python
cloud_scheduler_custom_endpoint_input: str
```

- *Type:* str

---

##### `cloud_tasks_custom_endpoint_input`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput"></a>

```python
cloud_tasks_custom_endpoint_input: str
```

- *Type:* str

---

##### `composer_custom_endpoint_input`<sup>Optional</sup> <a name="composer_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput"></a>

```python
composer_custom_endpoint_input: str
```

- *Type:* str

---

##### `compute_custom_endpoint_input`<sup>Optional</sup> <a name="compute_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput"></a>

```python
compute_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_analysis_custom_endpoint_input`<sup>Optional</sup> <a name="container_analysis_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput"></a>

```python
container_analysis_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_attached_custom_endpoint_input`<sup>Optional</sup> <a name="container_attached_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput"></a>

```python
container_attached_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_aws_custom_endpoint_input`<sup>Optional</sup> <a name="container_aws_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput"></a>

```python
container_aws_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_azure_custom_endpoint_input`<sup>Optional</sup> <a name="container_azure_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput"></a>

```python
container_azure_custom_endpoint_input: str
```

- *Type:* str

---

##### `container_custom_endpoint_input`<sup>Optional</sup> <a name="container_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput"></a>

```python
container_custom_endpoint_input: str
```

- *Type:* str

---

##### `core_billing_custom_endpoint_input`<sup>Optional</sup> <a name="core_billing_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput"></a>

```python
core_billing_custom_endpoint_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `database_migration_service_custom_endpoint_input`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```python
database_migration_service_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_catalog_custom_endpoint_input`<sup>Optional</sup> <a name="data_catalog_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput"></a>

```python
data_catalog_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataflow_custom_endpoint_input`<sup>Optional</sup> <a name="dataflow_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput"></a>

```python
dataflow_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_fusion_custom_endpoint_input`<sup>Optional</sup> <a name="data_fusion_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput"></a>

```python
data_fusion_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_loss_prevention_custom_endpoint_input`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput"></a>

```python
data_loss_prevention_custom_endpoint_input: str
```

- *Type:* str

---

##### `data_pipeline_custom_endpoint_input`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput"></a>

```python
data_pipeline_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataplex_custom_endpoint_input`<sup>Optional</sup> <a name="dataplex_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput"></a>

```python
dataplex_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataproc_custom_endpoint_input`<sup>Optional</sup> <a name="dataproc_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput"></a>

```python
dataproc_custom_endpoint_input: str
```

- *Type:* str

---

##### `dataproc_metastore_custom_endpoint_input`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```python
dataproc_metastore_custom_endpoint_input: str
```

- *Type:* str

---

##### `datastore_custom_endpoint_input`<sup>Optional</sup> <a name="datastore_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpointInput"></a>

```python
datastore_custom_endpoint_input: str
```

- *Type:* str

---

##### `datastream_custom_endpoint_input`<sup>Optional</sup> <a name="datastream_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput"></a>

```python
datastream_custom_endpoint_input: str
```

- *Type:* str

---

##### `default_labels_input`<sup>Optional</sup> <a name="default_labels_input" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput"></a>

```python
default_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_manager_custom_endpoint_input`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput"></a>

```python
deployment_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `dialogflow_custom_endpoint_input`<sup>Optional</sup> <a name="dialogflow_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput"></a>

```python
dialogflow_custom_endpoint_input: str
```

- *Type:* str

---

##### `dialogflow_cx_custom_endpoint_input`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput"></a>

```python
dialogflow_cx_custom_endpoint_input: str
```

- *Type:* str

---

##### `discovery_engine_custom_endpoint_input`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput"></a>

```python
discovery_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `dns_custom_endpoint_input`<sup>Optional</sup> <a name="dns_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput"></a>

```python
dns_custom_endpoint_input: str
```

- *Type:* str

---

##### `document_ai_custom_endpoint_input`<sup>Optional</sup> <a name="document_ai_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput"></a>

```python
document_ai_custom_endpoint_input: str
```

- *Type:* str

---

##### `document_ai_warehouse_custom_endpoint_input`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```python
document_ai_warehouse_custom_endpoint_input: str
```

- *Type:* str

---

##### `edgecontainer_custom_endpoint_input`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput"></a>

```python
edgecontainer_custom_endpoint_input: str
```

- *Type:* str

---

##### `edgenetwork_custom_endpoint_input`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput"></a>

```python
edgenetwork_custom_endpoint_input: str
```

- *Type:* str

---

##### `essential_contacts_custom_endpoint_input`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput"></a>

```python
essential_contacts_custom_endpoint_input: str
```

- *Type:* str

---

##### `eventarc_custom_endpoint_input`<sup>Optional</sup> <a name="eventarc_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput"></a>

```python
eventarc_custom_endpoint_input: str
```

- *Type:* str

---

##### `filestore_custom_endpoint_input`<sup>Optional</sup> <a name="filestore_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput"></a>

```python
filestore_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebase_app_check_custom_endpoint_input`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```python
firebase_app_check_custom_endpoint_input: str
```

- *Type:* str

---

##### `firebaserules_custom_endpoint_input`<sup>Optional</sup> <a name="firebaserules_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput"></a>

```python
firebaserules_custom_endpoint_input: str
```

- *Type:* str

---

##### `firestore_custom_endpoint_input`<sup>Optional</sup> <a name="firestore_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput"></a>

```python
firestore_custom_endpoint_input: str
```

- *Type:* str

---

##### `gke_backup_custom_endpoint_input`<sup>Optional</sup> <a name="gke_backup_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput"></a>

```python
gke_backup_custom_endpoint_input: str
```

- *Type:* str

---

##### `gke_hub2_custom_endpoint_input`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput"></a>

```python
gke_hub2_custom_endpoint_input: str
```

- *Type:* str

---

##### `gke_hub_custom_endpoint_input`<sup>Optional</sup> <a name="gke_hub_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput"></a>

```python
gke_hub_custom_endpoint_input: str
```

- *Type:* str

---

##### `gkehub_feature_custom_endpoint_input`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpointInput"></a>

```python
gkehub_feature_custom_endpoint_input: str
```

- *Type:* str

---

##### `gkeonprem_custom_endpoint_input`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput"></a>

```python
gkeonprem_custom_endpoint_input: str
```

- *Type:* str

---

##### `healthcare_custom_endpoint_input`<sup>Optional</sup> <a name="healthcare_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput"></a>

```python
healthcare_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam2_custom_endpoint_input`<sup>Optional</sup> <a name="iam2_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput"></a>

```python
iam2_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_beta_custom_endpoint_input`<sup>Optional</sup> <a name="iam_beta_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput"></a>

```python
iam_beta_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_credentials_custom_endpoint_input`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput"></a>

```python
iam_credentials_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_custom_endpoint_input`<sup>Optional</sup> <a name="iam_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput"></a>

```python
iam_custom_endpoint_input: str
```

- *Type:* str

---

##### `iam_workforce_pool_custom_endpoint_input`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```python
iam_workforce_pool_custom_endpoint_input: str
```

- *Type:* str

---

##### `iap_custom_endpoint_input`<sup>Optional</sup> <a name="iap_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput"></a>

```python
iap_custom_endpoint_input: str
```

- *Type:* str

---

##### `identity_platform_custom_endpoint_input`<sup>Optional</sup> <a name="identity_platform_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput"></a>

```python
identity_platform_custom_endpoint_input: str
```

- *Type:* str

---

##### `impersonate_service_account_delegates_input`<sup>Optional</sup> <a name="impersonate_service_account_delegates_input" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput"></a>

```python
impersonate_service_account_delegates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `impersonate_service_account_input`<sup>Optional</sup> <a name="impersonate_service_account_input" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput"></a>

```python
impersonate_service_account_input: str
```

- *Type:* str

---

##### `integration_connectors_custom_endpoint_input`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput"></a>

```python
integration_connectors_custom_endpoint_input: str
```

- *Type:* str

---

##### `integrations_custom_endpoint_input`<sup>Optional</sup> <a name="integrations_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput"></a>

```python
integrations_custom_endpoint_input: str
```

- *Type:* str

---

##### `kms_custom_endpoint_input`<sup>Optional</sup> <a name="kms_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput"></a>

```python
kms_custom_endpoint_input: str
```

- *Type:* str

---

##### `logging_custom_endpoint_input`<sup>Optional</sup> <a name="logging_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput"></a>

```python
logging_custom_endpoint_input: str
```

- *Type:* str

---

##### `looker_custom_endpoint_input`<sup>Optional</sup> <a name="looker_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput"></a>

```python
looker_custom_endpoint_input: str
```

- *Type:* str

---

##### `memcache_custom_endpoint_input`<sup>Optional</sup> <a name="memcache_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput"></a>

```python
memcache_custom_endpoint_input: str
```

- *Type:* str

---

##### `migration_center_custom_endpoint_input`<sup>Optional</sup> <a name="migration_center_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput"></a>

```python
migration_center_custom_endpoint_input: str
```

- *Type:* str

---

##### `ml_engine_custom_endpoint_input`<sup>Optional</sup> <a name="ml_engine_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput"></a>

```python
ml_engine_custom_endpoint_input: str
```

- *Type:* str

---

##### `monitoring_custom_endpoint_input`<sup>Optional</sup> <a name="monitoring_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput"></a>

```python
monitoring_custom_endpoint_input: str
```

- *Type:* str

---

##### `netapp_custom_endpoint_input`<sup>Optional</sup> <a name="netapp_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput"></a>

```python
netapp_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_connectivity_custom_endpoint_input`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput"></a>

```python
network_connectivity_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_management_custom_endpoint_input`<sup>Optional</sup> <a name="network_management_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput"></a>

```python
network_management_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_security_custom_endpoint_input`<sup>Optional</sup> <a name="network_security_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput"></a>

```python
network_security_custom_endpoint_input: str
```

- *Type:* str

---

##### `network_services_custom_endpoint_input`<sup>Optional</sup> <a name="network_services_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput"></a>

```python
network_services_custom_endpoint_input: str
```

- *Type:* str

---

##### `notebooks_custom_endpoint_input`<sup>Optional</sup> <a name="notebooks_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput"></a>

```python
notebooks_custom_endpoint_input: str
```

- *Type:* str

---

##### `org_policy_custom_endpoint_input`<sup>Optional</sup> <a name="org_policy_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput"></a>

```python
org_policy_custom_endpoint_input: str
```

- *Type:* str

---

##### `os_config_custom_endpoint_input`<sup>Optional</sup> <a name="os_config_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput"></a>

```python
os_config_custom_endpoint_input: str
```

- *Type:* str

---

##### `os_login_custom_endpoint_input`<sup>Optional</sup> <a name="os_login_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput"></a>

```python
os_login_custom_endpoint_input: str
```

- *Type:* str

---

##### `privateca_custom_endpoint_input`<sup>Optional</sup> <a name="privateca_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput"></a>

```python
privateca_custom_endpoint_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.provider.GoogleProvider.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_ca_custom_endpoint_input`<sup>Optional</sup> <a name="public_ca_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput"></a>

```python
public_ca_custom_endpoint_input: str
```

- *Type:* str

---

##### `pubsub_custom_endpoint_input`<sup>Optional</sup> <a name="pubsub_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput"></a>

```python
pubsub_custom_endpoint_input: str
```

- *Type:* str

---

##### `pubsub_lite_custom_endpoint_input`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput"></a>

```python
pubsub_lite_custom_endpoint_input: str
```

- *Type:* str

---

##### `recaptcha_enterprise_custom_endpoint_input`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```python
recaptcha_enterprise_custom_endpoint_input: str
```

- *Type:* str

---

##### `redis_custom_endpoint_input`<sup>Optional</sup> <a name="redis_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput"></a>

```python
redis_custom_endpoint_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.provider.GoogleProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `request_reason_input`<sup>Optional</sup> <a name="request_reason_input" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput"></a>

```python
request_reason_input: str
```

- *Type:* str

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput"></a>

```python
request_timeout_input: str
```

- *Type:* str

---

##### `resource_manager_custom_endpoint_input`<sup>Optional</sup> <a name="resource_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput"></a>

```python
resource_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `resource_manager_v3_custom_endpoint_input`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput"></a>

```python
resource_manager_v3_custom_endpoint_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google.provider.GoogleProvider.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_manager_custom_endpoint_input`<sup>Optional</sup> <a name="secret_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput"></a>

```python
secret_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `secure_source_manager_custom_endpoint_input`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput"></a>

```python
secure_source_manager_custom_endpoint_input: str
```

- *Type:* str

---

##### `security_center_custom_endpoint_input`<sup>Optional</sup> <a name="security_center_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput"></a>

```python
security_center_custom_endpoint_input: str
```

- *Type:* str

---

##### `securityposture_custom_endpoint_input`<sup>Optional</sup> <a name="securityposture_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput"></a>

```python
securityposture_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_management_custom_endpoint_input`<sup>Optional</sup> <a name="service_management_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput"></a>

```python
service_management_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_networking_custom_endpoint_input`<sup>Optional</sup> <a name="service_networking_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput"></a>

```python
service_networking_custom_endpoint_input: str
```

- *Type:* str

---

##### `service_usage_custom_endpoint_input`<sup>Optional</sup> <a name="service_usage_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput"></a>

```python
service_usage_custom_endpoint_input: str
```

- *Type:* str

---

##### `source_repo_custom_endpoint_input`<sup>Optional</sup> <a name="source_repo_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput"></a>

```python
source_repo_custom_endpoint_input: str
```

- *Type:* str

---

##### `spanner_custom_endpoint_input`<sup>Optional</sup> <a name="spanner_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput"></a>

```python
spanner_custom_endpoint_input: str
```

- *Type:* str

---

##### `sql_custom_endpoint_input`<sup>Optional</sup> <a name="sql_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput"></a>

```python
sql_custom_endpoint_input: str
```

- *Type:* str

---

##### `storage_custom_endpoint_input`<sup>Optional</sup> <a name="storage_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput"></a>

```python
storage_custom_endpoint_input: str
```

- *Type:* str

---

##### `storage_insights_custom_endpoint_input`<sup>Optional</sup> <a name="storage_insights_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput"></a>

```python
storage_insights_custom_endpoint_input: str
```

- *Type:* str

---

##### `storage_transfer_custom_endpoint_input`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput"></a>

```python
storage_transfer_custom_endpoint_input: str
```

- *Type:* str

---

##### `tags_custom_endpoint_input`<sup>Optional</sup> <a name="tags_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput"></a>

```python
tags_custom_endpoint_input: str
```

- *Type:* str

---

##### `tags_location_custom_endpoint_input`<sup>Optional</sup> <a name="tags_location_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput"></a>

```python
tags_location_custom_endpoint_input: str
```

- *Type:* str

---

##### `terraform_attribution_label_addition_strategy_input`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy_input" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```python
terraform_attribution_label_addition_strategy_input: str
```

- *Type:* str

---

##### `tpu_custom_endpoint_input`<sup>Optional</sup> <a name="tpu_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput"></a>

```python
tpu_custom_endpoint_input: str
```

- *Type:* str

---

##### `universe_domain_input`<sup>Optional</sup> <a name="universe_domain_input" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput"></a>

```python
universe_domain_input: str
```

- *Type:* str

---

##### `user_project_override_input`<sup>Optional</sup> <a name="user_project_override_input" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput"></a>

```python
user_project_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vertex_ai_custom_endpoint_input`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput"></a>

```python
vertex_ai_custom_endpoint_input: str
```

- *Type:* str

---

##### `vmwareengine_custom_endpoint_input`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput"></a>

```python
vmwareengine_custom_endpoint_input: str
```

- *Type:* str

---

##### `vpc_access_custom_endpoint_input`<sup>Optional</sup> <a name="vpc_access_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput"></a>

```python
vpc_access_custom_endpoint_input: str
```

- *Type:* str

---

##### `workbench_custom_endpoint_input`<sup>Optional</sup> <a name="workbench_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput"></a>

```python
workbench_custom_endpoint_input: str
```

- *Type:* str

---

##### `workflows_custom_endpoint_input`<sup>Optional</sup> <a name="workflows_custom_endpoint_input" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput"></a>

```python
workflows_custom_endpoint_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.provider.GoogleProvider.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access_approval_custom_endpoint`<sup>Optional</sup> <a name="access_approval_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint"></a>

```python
access_approval_custom_endpoint: str
```

- *Type:* str

---

##### `access_context_manager_custom_endpoint`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint"></a>

```python
access_context_manager_custom_endpoint: str
```

- *Type:* str

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google.provider.GoogleProvider.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `active_directory_custom_endpoint`<sup>Optional</sup> <a name="active_directory_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint"></a>

```python
active_directory_custom_endpoint: str
```

- *Type:* str

---

##### `add_terraform_attribution_label`<sup>Optional</sup> <a name="add_terraform_attribution_label" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel"></a>

```python
add_terraform_attribution_label: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `alloydb_custom_endpoint`<sup>Optional</sup> <a name="alloydb_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint"></a>

```python
alloydb_custom_endpoint: str
```

- *Type:* str

---

##### `apigee_custom_endpoint`<sup>Optional</sup> <a name="apigee_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint"></a>

```python
apigee_custom_endpoint: str
```

- *Type:* str

---

##### `apikeys_custom_endpoint`<sup>Optional</sup> <a name="apikeys_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint"></a>

```python
apikeys_custom_endpoint: str
```

- *Type:* str

---

##### `app_engine_custom_endpoint`<sup>Optional</sup> <a name="app_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint"></a>

```python
app_engine_custom_endpoint: str
```

- *Type:* str

---

##### `apphub_custom_endpoint`<sup>Optional</sup> <a name="apphub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint"></a>

```python
apphub_custom_endpoint: str
```

- *Type:* str

---

##### `artifact_registry_custom_endpoint`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint"></a>

```python
artifact_registry_custom_endpoint: str
```

- *Type:* str

---

##### `assured_workloads_custom_endpoint`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint"></a>

```python
assured_workloads_custom_endpoint: str
```

- *Type:* str

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google.provider.GoogleProvider.property.batching"></a>

```python
batching: GoogleProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

---

##### `beyondcorp_custom_endpoint`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint"></a>

```python
beyondcorp_custom_endpoint: str
```

- *Type:* str

---

##### `biglake_custom_endpoint`<sup>Optional</sup> <a name="biglake_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint"></a>

```python
biglake_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_analytics_hub_custom_endpoint`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```python
bigquery_analytics_hub_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_connection_custom_endpoint`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint"></a>

```python
bigquery_connection_custom_endpoint: str
```

- *Type:* str

---

##### `big_query_custom_endpoint`<sup>Optional</sup> <a name="big_query_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint"></a>

```python
big_query_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_datapolicy_custom_endpoint`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```python
bigquery_datapolicy_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_data_transfer_custom_endpoint`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```python
bigquery_data_transfer_custom_endpoint: str
```

- *Type:* str

---

##### `bigquery_reservation_custom_endpoint`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint"></a>

```python
bigquery_reservation_custom_endpoint: str
```

- *Type:* str

---

##### `bigtable_custom_endpoint`<sup>Optional</sup> <a name="bigtable_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint"></a>

```python
bigtable_custom_endpoint: str
```

- *Type:* str

---

##### `billing_custom_endpoint`<sup>Optional</sup> <a name="billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint"></a>

```python
billing_custom_endpoint: str
```

- *Type:* str

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

---

##### `binary_authorization_custom_endpoint`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint"></a>

```python
binary_authorization_custom_endpoint: str
```

- *Type:* str

---

##### `blockchain_node_engine_custom_endpoint`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```python
blockchain_node_engine_custom_endpoint: str
```

- *Type:* str

---

##### `certificate_manager_custom_endpoint`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint"></a>

```python
certificate_manager_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_asset_custom_endpoint`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint"></a>

```python
cloud_asset_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_billing_custom_endpoint`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint"></a>

```python
cloud_billing_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_build_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint"></a>

```python
cloud_build_custom_endpoint: str
```

- *Type:* str

---

##### `cloudbuildv2_custom_endpoint`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint"></a>

```python
cloudbuildv2_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_build_worker_pool_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```python
cloud_build_worker_pool_custom_endpoint: str
```

- *Type:* str

---

##### `clouddeploy_custom_endpoint`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint"></a>

```python
clouddeploy_custom_endpoint: str
```

- *Type:* str

---

##### `clouddomains_custom_endpoint`<sup>Optional</sup> <a name="clouddomains_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint"></a>

```python
clouddomains_custom_endpoint: str
```

- *Type:* str

---

##### `cloudfunctions2_custom_endpoint`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint"></a>

```python
cloudfunctions2_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_functions_custom_endpoint`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint"></a>

```python
cloud_functions_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_identity_custom_endpoint`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint"></a>

```python
cloud_identity_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_ids_custom_endpoint`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint"></a>

```python
cloud_ids_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_quotas_custom_endpoint`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint"></a>

```python
cloud_quotas_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_resource_manager_custom_endpoint`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint"></a>

```python
cloud_resource_manager_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_run_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint"></a>

```python
cloud_run_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_run_v2_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint"></a>

```python
cloud_run_v2_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_scheduler_custom_endpoint`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint"></a>

```python
cloud_scheduler_custom_endpoint: str
```

- *Type:* str

---

##### `cloud_tasks_custom_endpoint`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint"></a>

```python
cloud_tasks_custom_endpoint: str
```

- *Type:* str

---

##### `composer_custom_endpoint`<sup>Optional</sup> <a name="composer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint"></a>

```python
composer_custom_endpoint: str
```

- *Type:* str

---

##### `compute_custom_endpoint`<sup>Optional</sup> <a name="compute_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint"></a>

```python
compute_custom_endpoint: str
```

- *Type:* str

---

##### `container_analysis_custom_endpoint`<sup>Optional</sup> <a name="container_analysis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint"></a>

```python
container_analysis_custom_endpoint: str
```

- *Type:* str

---

##### `container_attached_custom_endpoint`<sup>Optional</sup> <a name="container_attached_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint"></a>

```python
container_attached_custom_endpoint: str
```

- *Type:* str

---

##### `container_aws_custom_endpoint`<sup>Optional</sup> <a name="container_aws_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint"></a>

```python
container_aws_custom_endpoint: str
```

- *Type:* str

---

##### `container_azure_custom_endpoint`<sup>Optional</sup> <a name="container_azure_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint"></a>

```python
container_azure_custom_endpoint: str
```

- *Type:* str

---

##### `container_custom_endpoint`<sup>Optional</sup> <a name="container_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint"></a>

```python
container_custom_endpoint: str
```

- *Type:* str

---

##### `core_billing_custom_endpoint`<sup>Optional</sup> <a name="core_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint"></a>

```python
core_billing_custom_endpoint: str
```

- *Type:* str

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.provider.GoogleProvider.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `database_migration_service_custom_endpoint`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```python
database_migration_service_custom_endpoint: str
```

- *Type:* str

---

##### `data_catalog_custom_endpoint`<sup>Optional</sup> <a name="data_catalog_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint"></a>

```python
data_catalog_custom_endpoint: str
```

- *Type:* str

---

##### `dataflow_custom_endpoint`<sup>Optional</sup> <a name="dataflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint"></a>

```python
dataflow_custom_endpoint: str
```

- *Type:* str

---

##### `data_fusion_custom_endpoint`<sup>Optional</sup> <a name="data_fusion_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint"></a>

```python
data_fusion_custom_endpoint: str
```

- *Type:* str

---

##### `data_loss_prevention_custom_endpoint`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint"></a>

```python
data_loss_prevention_custom_endpoint: str
```

- *Type:* str

---

##### `data_pipeline_custom_endpoint`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint"></a>

```python
data_pipeline_custom_endpoint: str
```

- *Type:* str

---

##### `dataplex_custom_endpoint`<sup>Optional</sup> <a name="dataplex_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint"></a>

```python
dataplex_custom_endpoint: str
```

- *Type:* str

---

##### `dataproc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint"></a>

```python
dataproc_custom_endpoint: str
```

- *Type:* str

---

##### `dataproc_metastore_custom_endpoint`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint"></a>

```python
dataproc_metastore_custom_endpoint: str
```

- *Type:* str

---

##### `datastore_custom_endpoint`<sup>Optional</sup> <a name="datastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpoint"></a>

```python
datastore_custom_endpoint: str
```

- *Type:* str

---

##### `datastream_custom_endpoint`<sup>Optional</sup> <a name="datastream_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint"></a>

```python
datastream_custom_endpoint: str
```

- *Type:* str

---

##### `default_labels`<sup>Optional</sup> <a name="default_labels" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels"></a>

```python
default_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_manager_custom_endpoint`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint"></a>

```python
deployment_manager_custom_endpoint: str
```

- *Type:* str

---

##### `dialogflow_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint"></a>

```python
dialogflow_custom_endpoint: str
```

- *Type:* str

---

##### `dialogflow_cx_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint"></a>

```python
dialogflow_cx_custom_endpoint: str
```

- *Type:* str

---

##### `discovery_engine_custom_endpoint`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint"></a>

```python
discovery_engine_custom_endpoint: str
```

- *Type:* str

---

##### `dns_custom_endpoint`<sup>Optional</sup> <a name="dns_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint"></a>

```python
dns_custom_endpoint: str
```

- *Type:* str

---

##### `document_ai_custom_endpoint`<sup>Optional</sup> <a name="document_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint"></a>

```python
document_ai_custom_endpoint: str
```

- *Type:* str

---

##### `document_ai_warehouse_custom_endpoint`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint"></a>

```python
document_ai_warehouse_custom_endpoint: str
```

- *Type:* str

---

##### `edgecontainer_custom_endpoint`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint"></a>

```python
edgecontainer_custom_endpoint: str
```

- *Type:* str

---

##### `edgenetwork_custom_endpoint`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint"></a>

```python
edgenetwork_custom_endpoint: str
```

- *Type:* str

---

##### `essential_contacts_custom_endpoint`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint"></a>

```python
essential_contacts_custom_endpoint: str
```

- *Type:* str

---

##### `eventarc_custom_endpoint`<sup>Optional</sup> <a name="eventarc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint"></a>

```python
eventarc_custom_endpoint: str
```

- *Type:* str

---

##### `filestore_custom_endpoint`<sup>Optional</sup> <a name="filestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint"></a>

```python
filestore_custom_endpoint: str
```

- *Type:* str

---

##### `firebase_app_check_custom_endpoint`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint"></a>

```python
firebase_app_check_custom_endpoint: str
```

- *Type:* str

---

##### `firebaserules_custom_endpoint`<sup>Optional</sup> <a name="firebaserules_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint"></a>

```python
firebaserules_custom_endpoint: str
```

- *Type:* str

---

##### `firestore_custom_endpoint`<sup>Optional</sup> <a name="firestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint"></a>

```python
firestore_custom_endpoint: str
```

- *Type:* str

---

##### `gke_backup_custom_endpoint`<sup>Optional</sup> <a name="gke_backup_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint"></a>

```python
gke_backup_custom_endpoint: str
```

- *Type:* str

---

##### `gke_hub2_custom_endpoint`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint"></a>

```python
gke_hub2_custom_endpoint: str
```

- *Type:* str

---

##### `gke_hub_custom_endpoint`<sup>Optional</sup> <a name="gke_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint"></a>

```python
gke_hub_custom_endpoint: str
```

- *Type:* str

---

##### `gkehub_feature_custom_endpoint`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpoint"></a>

```python
gkehub_feature_custom_endpoint: str
```

- *Type:* str

---

##### `gkeonprem_custom_endpoint`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint"></a>

```python
gkeonprem_custom_endpoint: str
```

- *Type:* str

---

##### `healthcare_custom_endpoint`<sup>Optional</sup> <a name="healthcare_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint"></a>

```python
healthcare_custom_endpoint: str
```

- *Type:* str

---

##### `iam2_custom_endpoint`<sup>Optional</sup> <a name="iam2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint"></a>

```python
iam2_custom_endpoint: str
```

- *Type:* str

---

##### `iam_beta_custom_endpoint`<sup>Optional</sup> <a name="iam_beta_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint"></a>

```python
iam_beta_custom_endpoint: str
```

- *Type:* str

---

##### `iam_credentials_custom_endpoint`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint"></a>

```python
iam_credentials_custom_endpoint: str
```

- *Type:* str

---

##### `iam_custom_endpoint`<sup>Optional</sup> <a name="iam_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint"></a>

```python
iam_custom_endpoint: str
```

- *Type:* str

---

##### `iam_workforce_pool_custom_endpoint`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```python
iam_workforce_pool_custom_endpoint: str
```

- *Type:* str

---

##### `iap_custom_endpoint`<sup>Optional</sup> <a name="iap_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint"></a>

```python
iap_custom_endpoint: str
```

- *Type:* str

---

##### `identity_platform_custom_endpoint`<sup>Optional</sup> <a name="identity_platform_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint"></a>

```python
identity_platform_custom_endpoint: str
```

- *Type:* str

---

##### `impersonate_service_account`<sup>Optional</sup> <a name="impersonate_service_account" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount"></a>

```python
impersonate_service_account: str
```

- *Type:* str

---

##### `impersonate_service_account_delegates`<sup>Optional</sup> <a name="impersonate_service_account_delegates" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates"></a>

```python
impersonate_service_account_delegates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_connectors_custom_endpoint`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint"></a>

```python
integration_connectors_custom_endpoint: str
```

- *Type:* str

---

##### `integrations_custom_endpoint`<sup>Optional</sup> <a name="integrations_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint"></a>

```python
integrations_custom_endpoint: str
```

- *Type:* str

---

##### `kms_custom_endpoint`<sup>Optional</sup> <a name="kms_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint"></a>

```python
kms_custom_endpoint: str
```

- *Type:* str

---

##### `logging_custom_endpoint`<sup>Optional</sup> <a name="logging_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint"></a>

```python
logging_custom_endpoint: str
```

- *Type:* str

---

##### `looker_custom_endpoint`<sup>Optional</sup> <a name="looker_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint"></a>

```python
looker_custom_endpoint: str
```

- *Type:* str

---

##### `memcache_custom_endpoint`<sup>Optional</sup> <a name="memcache_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint"></a>

```python
memcache_custom_endpoint: str
```

- *Type:* str

---

##### `migration_center_custom_endpoint`<sup>Optional</sup> <a name="migration_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint"></a>

```python
migration_center_custom_endpoint: str
```

- *Type:* str

---

##### `ml_engine_custom_endpoint`<sup>Optional</sup> <a name="ml_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint"></a>

```python
ml_engine_custom_endpoint: str
```

- *Type:* str

---

##### `monitoring_custom_endpoint`<sup>Optional</sup> <a name="monitoring_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint"></a>

```python
monitoring_custom_endpoint: str
```

- *Type:* str

---

##### `netapp_custom_endpoint`<sup>Optional</sup> <a name="netapp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint"></a>

```python
netapp_custom_endpoint: str
```

- *Type:* str

---

##### `network_connectivity_custom_endpoint`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint"></a>

```python
network_connectivity_custom_endpoint: str
```

- *Type:* str

---

##### `network_management_custom_endpoint`<sup>Optional</sup> <a name="network_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint"></a>

```python
network_management_custom_endpoint: str
```

- *Type:* str

---

##### `network_security_custom_endpoint`<sup>Optional</sup> <a name="network_security_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint"></a>

```python
network_security_custom_endpoint: str
```

- *Type:* str

---

##### `network_services_custom_endpoint`<sup>Optional</sup> <a name="network_services_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint"></a>

```python
network_services_custom_endpoint: str
```

- *Type:* str

---

##### `notebooks_custom_endpoint`<sup>Optional</sup> <a name="notebooks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint"></a>

```python
notebooks_custom_endpoint: str
```

- *Type:* str

---

##### `org_policy_custom_endpoint`<sup>Optional</sup> <a name="org_policy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint"></a>

```python
org_policy_custom_endpoint: str
```

- *Type:* str

---

##### `os_config_custom_endpoint`<sup>Optional</sup> <a name="os_config_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint"></a>

```python
os_config_custom_endpoint: str
```

- *Type:* str

---

##### `os_login_custom_endpoint`<sup>Optional</sup> <a name="os_login_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint"></a>

```python
os_login_custom_endpoint: str
```

- *Type:* str

---

##### `privateca_custom_endpoint`<sup>Optional</sup> <a name="privateca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint"></a>

```python
privateca_custom_endpoint: str
```

- *Type:* str

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.provider.GoogleProvider.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_ca_custom_endpoint`<sup>Optional</sup> <a name="public_ca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint"></a>

```python
public_ca_custom_endpoint: str
```

- *Type:* str

---

##### `pubsub_custom_endpoint`<sup>Optional</sup> <a name="pubsub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint"></a>

```python
pubsub_custom_endpoint: str
```

- *Type:* str

---

##### `pubsub_lite_custom_endpoint`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint"></a>

```python
pubsub_lite_custom_endpoint: str
```

- *Type:* str

---

##### `recaptcha_enterprise_custom_endpoint`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```python
recaptcha_enterprise_custom_endpoint: str
```

- *Type:* str

---

##### `redis_custom_endpoint`<sup>Optional</sup> <a name="redis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint"></a>

```python
redis_custom_endpoint: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.provider.GoogleProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `request_reason`<sup>Optional</sup> <a name="request_reason" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReason"></a>

```python
request_reason: str
```

- *Type:* str

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

---

##### `resource_manager_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint"></a>

```python
resource_manager_custom_endpoint: str
```

- *Type:* str

---

##### `resource_manager_v3_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint"></a>

```python
resource_manager_v3_custom_endpoint: str
```

- *Type:* str

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.provider.GoogleProvider.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_manager_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint"></a>

```python
secret_manager_custom_endpoint: str
```

- *Type:* str

---

##### `secure_source_manager_custom_endpoint`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint"></a>

```python
secure_source_manager_custom_endpoint: str
```

- *Type:* str

---

##### `security_center_custom_endpoint`<sup>Optional</sup> <a name="security_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint"></a>

```python
security_center_custom_endpoint: str
```

- *Type:* str

---

##### `securityposture_custom_endpoint`<sup>Optional</sup> <a name="securityposture_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint"></a>

```python
securityposture_custom_endpoint: str
```

- *Type:* str

---

##### `service_management_custom_endpoint`<sup>Optional</sup> <a name="service_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint"></a>

```python
service_management_custom_endpoint: str
```

- *Type:* str

---

##### `service_networking_custom_endpoint`<sup>Optional</sup> <a name="service_networking_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint"></a>

```python
service_networking_custom_endpoint: str
```

- *Type:* str

---

##### `service_usage_custom_endpoint`<sup>Optional</sup> <a name="service_usage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint"></a>

```python
service_usage_custom_endpoint: str
```

- *Type:* str

---

##### `source_repo_custom_endpoint`<sup>Optional</sup> <a name="source_repo_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint"></a>

```python
source_repo_custom_endpoint: str
```

- *Type:* str

---

##### `spanner_custom_endpoint`<sup>Optional</sup> <a name="spanner_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint"></a>

```python
spanner_custom_endpoint: str
```

- *Type:* str

---

##### `sql_custom_endpoint`<sup>Optional</sup> <a name="sql_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint"></a>

```python
sql_custom_endpoint: str
```

- *Type:* str

---

##### `storage_custom_endpoint`<sup>Optional</sup> <a name="storage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint"></a>

```python
storage_custom_endpoint: str
```

- *Type:* str

---

##### `storage_insights_custom_endpoint`<sup>Optional</sup> <a name="storage_insights_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint"></a>

```python
storage_insights_custom_endpoint: str
```

- *Type:* str

---

##### `storage_transfer_custom_endpoint`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint"></a>

```python
storage_transfer_custom_endpoint: str
```

- *Type:* str

---

##### `tags_custom_endpoint`<sup>Optional</sup> <a name="tags_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint"></a>

```python
tags_custom_endpoint: str
```

- *Type:* str

---

##### `tags_location_custom_endpoint`<sup>Optional</sup> <a name="tags_location_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint"></a>

```python
tags_location_custom_endpoint: str
```

- *Type:* str

---

##### `terraform_attribution_label_addition_strategy`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```python
terraform_attribution_label_addition_strategy: str
```

- *Type:* str

---

##### `tpu_custom_endpoint`<sup>Optional</sup> <a name="tpu_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint"></a>

```python
tpu_custom_endpoint: str
```

- *Type:* str

---

##### `universe_domain`<sup>Optional</sup> <a name="universe_domain" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomain"></a>

```python
universe_domain: str
```

- *Type:* str

---

##### `user_project_override`<sup>Optional</sup> <a name="user_project_override" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride"></a>

```python
user_project_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vertex_ai_custom_endpoint`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint"></a>

```python
vertex_ai_custom_endpoint: str
```

- *Type:* str

---

##### `vmwareengine_custom_endpoint`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint"></a>

```python
vmwareengine_custom_endpoint: str
```

- *Type:* str

---

##### `vpc_access_custom_endpoint`<sup>Optional</sup> <a name="vpc_access_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint"></a>

```python
vpc_access_custom_endpoint: str
```

- *Type:* str

---

##### `workbench_custom_endpoint`<sup>Optional</sup> <a name="workbench_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint"></a>

```python
workbench_custom_endpoint: str
```

- *Type:* str

---

##### `workflows_custom_endpoint`<sup>Optional</sup> <a name="workflows_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint"></a>

```python
workflows_custom_endpoint: str
```

- *Type:* str

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.provider.GoogleProvider.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProviderBatching <a name="GoogleProviderBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderBatching.Initializer"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProviderBatching(
  enable_batching: typing.Union[bool, IResolvable] = None,
  send_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching">enable_batching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#enable_batching GoogleProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter">send_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#send_after GoogleProvider#send_after}. |

---

##### `enable_batching`<sup>Optional</sup> <a name="enable_batching" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching"></a>

```python
enable_batching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#enable_batching GoogleProvider#enable_batching}.

---

##### `send_after`<sup>Optional</sup> <a name="send_after" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter"></a>

```python
send_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#send_after GoogleProvider#send_after}.

---

### GoogleProviderConfig <a name="GoogleProviderConfig" id="@cdktf/provider-google.provider.GoogleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import provider

provider.GoogleProviderConfig(
  access_approval_custom_endpoint: str = None,
  access_context_manager_custom_endpoint: str = None,
  access_token: str = None,
  active_directory_custom_endpoint: str = None,
  add_terraform_attribution_label: typing.Union[bool, IResolvable] = None,
  alias: str = None,
  alloydb_custom_endpoint: str = None,
  apigee_custom_endpoint: str = None,
  apikeys_custom_endpoint: str = None,
  app_engine_custom_endpoint: str = None,
  apphub_custom_endpoint: str = None,
  artifact_registry_custom_endpoint: str = None,
  assured_workloads_custom_endpoint: str = None,
  batching: GoogleProviderBatching = None,
  beyondcorp_custom_endpoint: str = None,
  biglake_custom_endpoint: str = None,
  bigquery_analytics_hub_custom_endpoint: str = None,
  bigquery_connection_custom_endpoint: str = None,
  big_query_custom_endpoint: str = None,
  bigquery_datapolicy_custom_endpoint: str = None,
  bigquery_data_transfer_custom_endpoint: str = None,
  bigquery_reservation_custom_endpoint: str = None,
  bigtable_custom_endpoint: str = None,
  billing_custom_endpoint: str = None,
  billing_project: str = None,
  binary_authorization_custom_endpoint: str = None,
  blockchain_node_engine_custom_endpoint: str = None,
  certificate_manager_custom_endpoint: str = None,
  cloud_asset_custom_endpoint: str = None,
  cloud_billing_custom_endpoint: str = None,
  cloud_build_custom_endpoint: str = None,
  cloudbuildv2_custom_endpoint: str = None,
  cloud_build_worker_pool_custom_endpoint: str = None,
  clouddeploy_custom_endpoint: str = None,
  clouddomains_custom_endpoint: str = None,
  cloudfunctions2_custom_endpoint: str = None,
  cloud_functions_custom_endpoint: str = None,
  cloud_identity_custom_endpoint: str = None,
  cloud_ids_custom_endpoint: str = None,
  cloud_quotas_custom_endpoint: str = None,
  cloud_resource_manager_custom_endpoint: str = None,
  cloud_run_custom_endpoint: str = None,
  cloud_run_v2_custom_endpoint: str = None,
  cloud_scheduler_custom_endpoint: str = None,
  cloud_tasks_custom_endpoint: str = None,
  composer_custom_endpoint: str = None,
  compute_custom_endpoint: str = None,
  container_analysis_custom_endpoint: str = None,
  container_attached_custom_endpoint: str = None,
  container_aws_custom_endpoint: str = None,
  container_azure_custom_endpoint: str = None,
  container_custom_endpoint: str = None,
  core_billing_custom_endpoint: str = None,
  credentials: str = None,
  database_migration_service_custom_endpoint: str = None,
  data_catalog_custom_endpoint: str = None,
  dataflow_custom_endpoint: str = None,
  data_fusion_custom_endpoint: str = None,
  data_loss_prevention_custom_endpoint: str = None,
  data_pipeline_custom_endpoint: str = None,
  dataplex_custom_endpoint: str = None,
  dataproc_custom_endpoint: str = None,
  dataproc_metastore_custom_endpoint: str = None,
  datastore_custom_endpoint: str = None,
  datastream_custom_endpoint: str = None,
  default_labels: typing.Mapping[str] = None,
  deployment_manager_custom_endpoint: str = None,
  dialogflow_custom_endpoint: str = None,
  dialogflow_cx_custom_endpoint: str = None,
  discovery_engine_custom_endpoint: str = None,
  dns_custom_endpoint: str = None,
  document_ai_custom_endpoint: str = None,
  document_ai_warehouse_custom_endpoint: str = None,
  edgecontainer_custom_endpoint: str = None,
  edgenetwork_custom_endpoint: str = None,
  essential_contacts_custom_endpoint: str = None,
  eventarc_custom_endpoint: str = None,
  filestore_custom_endpoint: str = None,
  firebase_app_check_custom_endpoint: str = None,
  firebaserules_custom_endpoint: str = None,
  firestore_custom_endpoint: str = None,
  gke_backup_custom_endpoint: str = None,
  gke_hub2_custom_endpoint: str = None,
  gke_hub_custom_endpoint: str = None,
  gkehub_feature_custom_endpoint: str = None,
  gkeonprem_custom_endpoint: str = None,
  healthcare_custom_endpoint: str = None,
  iam2_custom_endpoint: str = None,
  iam_beta_custom_endpoint: str = None,
  iam_credentials_custom_endpoint: str = None,
  iam_custom_endpoint: str = None,
  iam_workforce_pool_custom_endpoint: str = None,
  iap_custom_endpoint: str = None,
  identity_platform_custom_endpoint: str = None,
  impersonate_service_account: str = None,
  impersonate_service_account_delegates: typing.List[str] = None,
  integration_connectors_custom_endpoint: str = None,
  integrations_custom_endpoint: str = None,
  kms_custom_endpoint: str = None,
  logging_custom_endpoint: str = None,
  looker_custom_endpoint: str = None,
  memcache_custom_endpoint: str = None,
  migration_center_custom_endpoint: str = None,
  ml_engine_custom_endpoint: str = None,
  monitoring_custom_endpoint: str = None,
  netapp_custom_endpoint: str = None,
  network_connectivity_custom_endpoint: str = None,
  network_management_custom_endpoint: str = None,
  network_security_custom_endpoint: str = None,
  network_services_custom_endpoint: str = None,
  notebooks_custom_endpoint: str = None,
  org_policy_custom_endpoint: str = None,
  os_config_custom_endpoint: str = None,
  os_login_custom_endpoint: str = None,
  privateca_custom_endpoint: str = None,
  project: str = None,
  public_ca_custom_endpoint: str = None,
  pubsub_custom_endpoint: str = None,
  pubsub_lite_custom_endpoint: str = None,
  recaptcha_enterprise_custom_endpoint: str = None,
  redis_custom_endpoint: str = None,
  region: str = None,
  request_reason: str = None,
  request_timeout: str = None,
  resource_manager_custom_endpoint: str = None,
  resource_manager_v3_custom_endpoint: str = None,
  scopes: typing.List[str] = None,
  secret_manager_custom_endpoint: str = None,
  secure_source_manager_custom_endpoint: str = None,
  security_center_custom_endpoint: str = None,
  securityposture_custom_endpoint: str = None,
  service_management_custom_endpoint: str = None,
  service_networking_custom_endpoint: str = None,
  service_usage_custom_endpoint: str = None,
  source_repo_custom_endpoint: str = None,
  spanner_custom_endpoint: str = None,
  sql_custom_endpoint: str = None,
  storage_custom_endpoint: str = None,
  storage_insights_custom_endpoint: str = None,
  storage_transfer_custom_endpoint: str = None,
  tags_custom_endpoint: str = None,
  tags_location_custom_endpoint: str = None,
  terraform_attribution_label_addition_strategy: str = None,
  tpu_custom_endpoint: str = None,
  universe_domain: str = None,
  user_project_override: typing.Union[bool, IResolvable] = None,
  vertex_ai_custom_endpoint: str = None,
  vmwareengine_custom_endpoint: str = None,
  vpc_access_custom_endpoint: str = None,
  workbench_custom_endpoint: str = None,
  workflows_custom_endpoint: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint">access_approval_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint">access_context_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint">active_directory_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel">add_terraform_attribution_label</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint">alloydb_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint">apigee_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint">apikeys_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint">app_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint">apphub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint">artifact_registry_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint">assured_workloads_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.batching">batching</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint">beyondcorp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint">biglake_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">bigquery_analytics_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint">bigquery_connection_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint">big_query_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint">bigquery_datapolicy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint">bigquery_data_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint">bigquery_reservation_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint">bigtable_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint">billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject">billing_project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint">binary_authorization_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint">blockchain_node_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint">certificate_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint">cloud_asset_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint">cloud_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint">cloud_build_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint">cloudbuildv2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">cloud_build_worker_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint">clouddeploy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint">clouddomains_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint">cloudfunctions2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint">cloud_functions_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint">cloud_identity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint">cloud_ids_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint">cloud_quotas_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint">cloud_resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint">cloud_run_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint">cloud_run_v2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint">cloud_scheduler_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint">cloud_tasks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint">composer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint">compute_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint">container_analysis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint">container_attached_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint">container_aws_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint">container_azure_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint">container_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint">core_billing_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint">database_migration_service_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint">data_catalog_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint">dataflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint">data_fusion_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint">data_loss_prevention_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint">data_pipeline_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint">dataplex_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint">dataproc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint">dataproc_metastore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastoreCustomEndpoint">datastore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint">datastream_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels">default_labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint">deployment_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint">dialogflow_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint">dialogflow_cx_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint">discovery_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint">dns_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint">document_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint">document_ai_warehouse_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint">edgecontainer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint">edgenetwork_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint">essential_contacts_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint">eventarc_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint">filestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint">firebase_app_check_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint">firebaserules_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint">firestore_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint">gke_backup_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint">gke_hub2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint">gke_hub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkehubFeatureCustomEndpoint">gkehub_feature_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint">gkeonprem_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint">healthcare_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint">iam2_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint">iam_beta_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint">iam_credentials_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint">iam_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint">iam_workforce_pool_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint">iap_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint">identity_platform_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount">impersonate_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates">impersonate_service_account_delegates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint">integration_connectors_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint">integrations_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint">kms_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint">logging_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint">looker_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint">memcache_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint">migration_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint">ml_engine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint">monitoring_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint">netapp_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint">network_connectivity_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint">network_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint">network_security_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint">network_services_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint">notebooks_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint">org_policy_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint">os_config_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint">os_login_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint">privateca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint">public_ca_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint">pubsub_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint">pubsub_lite_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint">recaptcha_enterprise_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint">redis_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason">request_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout">request_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint">resource_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint">resource_manager_v3_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint">secret_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint">secure_source_manager_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint">security_center_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint">securityposture_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint">service_management_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint">service_networking_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint">service_usage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint">source_repo_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint">spanner_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint">sql_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint">storage_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint">storage_insights_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint">storage_transfer_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint">tags_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint">tags_location_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy">terraform_attribution_label_addition_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint">tpu_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain">universe_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride">user_project_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint">vertex_ai_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint">vmwareengine_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint">vpc_access_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint">workbench_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint">workflows_custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#zone GoogleProvider#zone}. |

---

##### `access_approval_custom_endpoint`<sup>Optional</sup> <a name="access_approval_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint"></a>

```python
access_approval_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `access_context_manager_custom_endpoint`<sup>Optional</sup> <a name="access_context_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```python
access_context_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#access_token GoogleProvider#access_token}.

---

##### `active_directory_custom_endpoint`<sup>Optional</sup> <a name="active_directory_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```python
active_directory_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `add_terraform_attribution_label`<sup>Optional</sup> <a name="add_terraform_attribution_label" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel"></a>

```python
add_terraform_attribution_label: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#alias GoogleProvider#alias}

---

##### `alloydb_custom_endpoint`<sup>Optional</sup> <a name="alloydb_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint"></a>

```python
alloydb_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `apigee_custom_endpoint`<sup>Optional</sup> <a name="apigee_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint"></a>

```python
apigee_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `apikeys_custom_endpoint`<sup>Optional</sup> <a name="apikeys_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint"></a>

```python
apikeys_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `app_engine_custom_endpoint`<sup>Optional</sup> <a name="app_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint"></a>

```python
app_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `apphub_custom_endpoint`<sup>Optional</sup> <a name="apphub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint"></a>

```python
apphub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `artifact_registry_custom_endpoint`<sup>Optional</sup> <a name="artifact_registry_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```python
artifact_registry_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `assured_workloads_custom_endpoint`<sup>Optional</sup> <a name="assured_workloads_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```python
assured_workloads_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.batching"></a>

```python
batching: GoogleProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#batching GoogleProvider#batching}

---

##### `beyondcorp_custom_endpoint`<sup>Optional</sup> <a name="beyondcorp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint"></a>

```python
beyondcorp_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `biglake_custom_endpoint`<sup>Optional</sup> <a name="biglake_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint"></a>

```python
biglake_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `bigquery_analytics_hub_custom_endpoint`<sup>Optional</sup> <a name="bigquery_analytics_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```python
bigquery_analytics_hub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigquery_connection_custom_endpoint`<sup>Optional</sup> <a name="bigquery_connection_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```python
bigquery_connection_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `big_query_custom_endpoint`<sup>Optional</sup> <a name="big_query_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint"></a>

```python
big_query_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `bigquery_datapolicy_custom_endpoint`<sup>Optional</sup> <a name="bigquery_datapolicy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```python
bigquery_datapolicy_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigquery_data_transfer_custom_endpoint`<sup>Optional</sup> <a name="bigquery_data_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```python
bigquery_data_transfer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigquery_reservation_custom_endpoint`<sup>Optional</sup> <a name="bigquery_reservation_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```python
bigquery_reservation_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtable_custom_endpoint`<sup>Optional</sup> <a name="bigtable_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint"></a>

```python
bigtable_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `billing_custom_endpoint`<sup>Optional</sup> <a name="billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint"></a>

```python
billing_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `billing_project`<sup>Optional</sup> <a name="billing_project" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject"></a>

```python
billing_project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#billing_project GoogleProvider#billing_project}.

---

##### `binary_authorization_custom_endpoint`<sup>Optional</sup> <a name="binary_authorization_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```python
binary_authorization_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `blockchain_node_engine_custom_endpoint`<sup>Optional</sup> <a name="blockchain_node_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```python
blockchain_node_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificate_manager_custom_endpoint`<sup>Optional</sup> <a name="certificate_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint"></a>

```python
certificate_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `cloud_asset_custom_endpoint`<sup>Optional</sup> <a name="cloud_asset_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint"></a>

```python
cloud_asset_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `cloud_billing_custom_endpoint`<sup>Optional</sup> <a name="cloud_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint"></a>

```python
cloud_billing_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `cloud_build_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint"></a>

```python
cloud_build_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2_custom_endpoint`<sup>Optional</sup> <a name="cloudbuildv2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```python
cloudbuildv2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `cloud_build_worker_pool_custom_endpoint`<sup>Optional</sup> <a name="cloud_build_worker_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```python
cloud_build_worker_pool_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `clouddeploy_custom_endpoint`<sup>Optional</sup> <a name="clouddeploy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint"></a>

```python
clouddeploy_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomains_custom_endpoint`<sup>Optional</sup> <a name="clouddomains_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint"></a>

```python
clouddomains_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2_custom_endpoint`<sup>Optional</sup> <a name="cloudfunctions2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```python
cloudfunctions2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloud_functions_custom_endpoint`<sup>Optional</sup> <a name="cloud_functions_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```python
cloud_functions_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `cloud_identity_custom_endpoint`<sup>Optional</sup> <a name="cloud_identity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```python
cloud_identity_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `cloud_ids_custom_endpoint`<sup>Optional</sup> <a name="cloud_ids_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint"></a>

```python
cloud_ids_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `cloud_quotas_custom_endpoint`<sup>Optional</sup> <a name="cloud_quotas_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```python
cloud_quotas_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `cloud_resource_manager_custom_endpoint`<sup>Optional</sup> <a name="cloud_resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```python
cloud_resource_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloud_run_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint"></a>

```python
cloud_run_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `cloud_run_v2_custom_endpoint`<sup>Optional</sup> <a name="cloud_run_v2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```python
cloud_run_v2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloud_scheduler_custom_endpoint`<sup>Optional</sup> <a name="cloud_scheduler_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```python
cloud_scheduler_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloud_tasks_custom_endpoint`<sup>Optional</sup> <a name="cloud_tasks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint"></a>

```python
cloud_tasks_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `composer_custom_endpoint`<sup>Optional</sup> <a name="composer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint"></a>

```python
composer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `compute_custom_endpoint`<sup>Optional</sup> <a name="compute_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint"></a>

```python
compute_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `container_analysis_custom_endpoint`<sup>Optional</sup> <a name="container_analysis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```python
container_analysis_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `container_attached_custom_endpoint`<sup>Optional</sup> <a name="container_attached_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint"></a>

```python
container_attached_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `container_aws_custom_endpoint`<sup>Optional</sup> <a name="container_aws_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint"></a>

```python
container_aws_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `container_azure_custom_endpoint`<sup>Optional</sup> <a name="container_azure_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint"></a>

```python
container_azure_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `container_custom_endpoint`<sup>Optional</sup> <a name="container_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint"></a>

```python
container_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `core_billing_custom_endpoint`<sup>Optional</sup> <a name="core_billing_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint"></a>

```python
core_billing_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#credentials GoogleProvider#credentials}.

---

##### `database_migration_service_custom_endpoint`<sup>Optional</sup> <a name="database_migration_service_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```python
database_migration_service_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `data_catalog_custom_endpoint`<sup>Optional</sup> <a name="data_catalog_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint"></a>

```python
data_catalog_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `dataflow_custom_endpoint`<sup>Optional</sup> <a name="dataflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint"></a>

```python
dataflow_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `data_fusion_custom_endpoint`<sup>Optional</sup> <a name="data_fusion_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint"></a>

```python
data_fusion_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `data_loss_prevention_custom_endpoint`<sup>Optional</sup> <a name="data_loss_prevention_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```python
data_loss_prevention_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `data_pipeline_custom_endpoint`<sup>Optional</sup> <a name="data_pipeline_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint"></a>

```python
data_pipeline_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `dataplex_custom_endpoint`<sup>Optional</sup> <a name="dataplex_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint"></a>

```python
dataplex_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `dataproc_custom_endpoint`<sup>Optional</sup> <a name="dataproc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint"></a>

```python
dataproc_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `dataproc_metastore_custom_endpoint`<sup>Optional</sup> <a name="dataproc_metastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```python
dataproc_metastore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastore_custom_endpoint`<sup>Optional</sup> <a name="datastore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastoreCustomEndpoint"></a>

```python
datastore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}.

---

##### `datastream_custom_endpoint`<sup>Optional</sup> <a name="datastream_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint"></a>

```python
datastream_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `default_labels`<sup>Optional</sup> <a name="default_labels" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels"></a>

```python
default_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#default_labels GoogleProvider#default_labels}.

---

##### `deployment_manager_custom_endpoint`<sup>Optional</sup> <a name="deployment_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```python
deployment_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `dialogflow_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint"></a>

```python
dialogflow_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `dialogflow_cx_custom_endpoint`<sup>Optional</sup> <a name="dialogflow_cx_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```python
dialogflow_cx_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `discovery_engine_custom_endpoint`<sup>Optional</sup> <a name="discovery_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```python
discovery_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `dns_custom_endpoint`<sup>Optional</sup> <a name="dns_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint"></a>

```python
dns_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `document_ai_custom_endpoint`<sup>Optional</sup> <a name="document_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint"></a>

```python
document_ai_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `document_ai_warehouse_custom_endpoint`<sup>Optional</sup> <a name="document_ai_warehouse_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```python
document_ai_warehouse_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainer_custom_endpoint`<sup>Optional</sup> <a name="edgecontainer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint"></a>

```python
edgecontainer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetwork_custom_endpoint`<sup>Optional</sup> <a name="edgenetwork_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint"></a>

```python
edgenetwork_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `essential_contacts_custom_endpoint`<sup>Optional</sup> <a name="essential_contacts_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint"></a>

```python
essential_contacts_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `eventarc_custom_endpoint`<sup>Optional</sup> <a name="eventarc_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint"></a>

```python
eventarc_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `filestore_custom_endpoint`<sup>Optional</sup> <a name="filestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint"></a>

```python
filestore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `firebase_app_check_custom_endpoint`<sup>Optional</sup> <a name="firebase_app_check_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```python
firebase_app_check_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaserules_custom_endpoint`<sup>Optional</sup> <a name="firebaserules_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint"></a>

```python
firebaserules_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `firestore_custom_endpoint`<sup>Optional</sup> <a name="firestore_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint"></a>

```python
firestore_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `gke_backup_custom_endpoint`<sup>Optional</sup> <a name="gke_backup_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint"></a>

```python
gke_backup_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `gke_hub2_custom_endpoint`<sup>Optional</sup> <a name="gke_hub2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint"></a>

```python
gke_hub2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `gke_hub_custom_endpoint`<sup>Optional</sup> <a name="gke_hub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint"></a>

```python
gke_hub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `gkehub_feature_custom_endpoint`<sup>Optional</sup> <a name="gkehub_feature_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```python
gkehub_feature_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}.

---

##### `gkeonprem_custom_endpoint`<sup>Optional</sup> <a name="gkeonprem_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint"></a>

```python
gkeonprem_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `healthcare_custom_endpoint`<sup>Optional</sup> <a name="healthcare_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint"></a>

```python
healthcare_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `iam2_custom_endpoint`<sup>Optional</sup> <a name="iam2_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint"></a>

```python
iam2_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `iam_beta_custom_endpoint`<sup>Optional</sup> <a name="iam_beta_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint"></a>

```python
iam_beta_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `iam_credentials_custom_endpoint`<sup>Optional</sup> <a name="iam_credentials_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```python
iam_credentials_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `iam_custom_endpoint`<sup>Optional</sup> <a name="iam_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint"></a>

```python
iam_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `iam_workforce_pool_custom_endpoint`<sup>Optional</sup> <a name="iam_workforce_pool_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```python
iam_workforce_pool_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iap_custom_endpoint`<sup>Optional</sup> <a name="iap_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint"></a>

```python
iap_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `identity_platform_custom_endpoint`<sup>Optional</sup> <a name="identity_platform_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint"></a>

```python
identity_platform_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `impersonate_service_account`<sup>Optional</sup> <a name="impersonate_service_account" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount"></a>

```python
impersonate_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `impersonate_service_account_delegates`<sup>Optional</sup> <a name="impersonate_service_account_delegates" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates"></a>

```python
impersonate_service_account_delegates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `integration_connectors_custom_endpoint`<sup>Optional</sup> <a name="integration_connectors_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```python
integration_connectors_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `integrations_custom_endpoint`<sup>Optional</sup> <a name="integrations_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint"></a>

```python
integrations_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `kms_custom_endpoint`<sup>Optional</sup> <a name="kms_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint"></a>

```python
kms_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `logging_custom_endpoint`<sup>Optional</sup> <a name="logging_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint"></a>

```python
logging_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `looker_custom_endpoint`<sup>Optional</sup> <a name="looker_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint"></a>

```python
looker_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `memcache_custom_endpoint`<sup>Optional</sup> <a name="memcache_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint"></a>

```python
memcache_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `migration_center_custom_endpoint`<sup>Optional</sup> <a name="migration_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint"></a>

```python
migration_center_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `ml_engine_custom_endpoint`<sup>Optional</sup> <a name="ml_engine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint"></a>

```python
ml_engine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `monitoring_custom_endpoint`<sup>Optional</sup> <a name="monitoring_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint"></a>

```python
monitoring_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `netapp_custom_endpoint`<sup>Optional</sup> <a name="netapp_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint"></a>

```python
netapp_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `network_connectivity_custom_endpoint`<sup>Optional</sup> <a name="network_connectivity_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```python
network_connectivity_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `network_management_custom_endpoint`<sup>Optional</sup> <a name="network_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint"></a>

```python
network_management_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `network_security_custom_endpoint`<sup>Optional</sup> <a name="network_security_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint"></a>

```python
network_security_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `network_services_custom_endpoint`<sup>Optional</sup> <a name="network_services_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint"></a>

```python
network_services_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `notebooks_custom_endpoint`<sup>Optional</sup> <a name="notebooks_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint"></a>

```python
notebooks_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `org_policy_custom_endpoint`<sup>Optional</sup> <a name="org_policy_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint"></a>

```python
org_policy_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `os_config_custom_endpoint`<sup>Optional</sup> <a name="os_config_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint"></a>

```python
os_config_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `os_login_custom_endpoint`<sup>Optional</sup> <a name="os_login_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint"></a>

```python
os_login_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `privateca_custom_endpoint`<sup>Optional</sup> <a name="privateca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint"></a>

```python
privateca_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#project GoogleProvider#project}.

---

##### `public_ca_custom_endpoint`<sup>Optional</sup> <a name="public_ca_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint"></a>

```python
public_ca_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `pubsub_custom_endpoint`<sup>Optional</sup> <a name="pubsub_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint"></a>

```python
pubsub_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `pubsub_lite_custom_endpoint`<sup>Optional</sup> <a name="pubsub_lite_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```python
pubsub_lite_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptcha_enterprise_custom_endpoint`<sup>Optional</sup> <a name="recaptcha_enterprise_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```python
recaptcha_enterprise_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redis_custom_endpoint`<sup>Optional</sup> <a name="redis_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint"></a>

```python
redis_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#region GoogleProvider#region}.

---

##### `request_reason`<sup>Optional</sup> <a name="request_reason" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason"></a>

```python
request_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_reason GoogleProvider#request_reason}.

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `resource_manager_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint"></a>

```python
resource_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `resource_manager_v3_custom_endpoint`<sup>Optional</sup> <a name="resource_manager_v3_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```python
resource_manager_v3_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#scopes GoogleProvider#scopes}.

---

##### `secret_manager_custom_endpoint`<sup>Optional</sup> <a name="secret_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint"></a>

```python
secret_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `secure_source_manager_custom_endpoint`<sup>Optional</sup> <a name="secure_source_manager_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```python
secure_source_manager_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `security_center_custom_endpoint`<sup>Optional</sup> <a name="security_center_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint"></a>

```python
security_center_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `securityposture_custom_endpoint`<sup>Optional</sup> <a name="securityposture_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint"></a>

```python
securityposture_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `service_management_custom_endpoint`<sup>Optional</sup> <a name="service_management_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint"></a>

```python
service_management_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `service_networking_custom_endpoint`<sup>Optional</sup> <a name="service_networking_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```python
service_networking_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `service_usage_custom_endpoint`<sup>Optional</sup> <a name="service_usage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint"></a>

```python
service_usage_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `source_repo_custom_endpoint`<sup>Optional</sup> <a name="source_repo_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint"></a>

```python
source_repo_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `spanner_custom_endpoint`<sup>Optional</sup> <a name="spanner_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint"></a>

```python
spanner_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `sql_custom_endpoint`<sup>Optional</sup> <a name="sql_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint"></a>

```python
sql_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `storage_custom_endpoint`<sup>Optional</sup> <a name="storage_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint"></a>

```python
storage_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `storage_insights_custom_endpoint`<sup>Optional</sup> <a name="storage_insights_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint"></a>

```python
storage_insights_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `storage_transfer_custom_endpoint`<sup>Optional</sup> <a name="storage_transfer_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint"></a>

```python
storage_transfer_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `tags_custom_endpoint`<sup>Optional</sup> <a name="tags_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint"></a>

```python
tags_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `tags_location_custom_endpoint`<sup>Optional</sup> <a name="tags_location_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint"></a>

```python
tags_location_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `terraform_attribution_label_addition_strategy`<sup>Optional</sup> <a name="terraform_attribution_label_addition_strategy" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```python
terraform_attribution_label_addition_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `tpu_custom_endpoint`<sup>Optional</sup> <a name="tpu_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint"></a>

```python
tpu_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `universe_domain`<sup>Optional</sup> <a name="universe_domain" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain"></a>

```python
universe_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `user_project_override`<sup>Optional</sup> <a name="user_project_override" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride"></a>

```python
user_project_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `vertex_ai_custom_endpoint`<sup>Optional</sup> <a name="vertex_ai_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint"></a>

```python
vertex_ai_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengine_custom_endpoint`<sup>Optional</sup> <a name="vmwareengine_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint"></a>

```python
vmwareengine_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `vpc_access_custom_endpoint`<sup>Optional</sup> <a name="vpc_access_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint"></a>

```python
vpc_access_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `workbench_custom_endpoint`<sup>Optional</sup> <a name="workbench_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint"></a>

```python
workbench_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `workflows_custom_endpoint`<sup>Optional</sup> <a name="workflows_custom_endpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint"></a>

```python
workflows_custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs#zone GoogleProvider#zone}.

---



