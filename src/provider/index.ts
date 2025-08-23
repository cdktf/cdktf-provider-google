/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}
  */
  readonly accessApprovalCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}
  */
  readonly accessContextManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#access_token GoogleProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}
  */
  readonly activeDirectoryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}
  */
  readonly addTerraformAttributionLabel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}
  */
  readonly alloydbCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}
  */
  readonly apigeeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}
  */
  readonly apihubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}
  */
  readonly apikeysCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}
  */
  readonly appEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}
  */
  readonly apphubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}
  */
  readonly artifactRegistryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}
  */
  readonly assuredWorkloadsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}
  */
  readonly backupDrCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}
  */
  readonly beyondcorpCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}
  */
  readonly bigQueryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}
  */
  readonly biglakeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}
  */
  readonly bigqueryAnalyticsHubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}
  */
  readonly bigqueryConnectionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}
  */
  readonly bigqueryDataTransferCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}
  */
  readonly bigqueryDatapolicyCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}
  */
  readonly bigqueryReservationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}
  */
  readonly bigtableCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}
  */
  readonly billingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#billing_project GoogleProvider#billing_project}
  */
  readonly billingProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}
  */
  readonly binaryAuthorizationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}
  */
  readonly blockchainNodeEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}
  */
  readonly certificateManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}
  */
  readonly chronicleCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}
  */
  readonly cloudAssetCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}
  */
  readonly cloudBillingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}
  */
  readonly cloudBuildCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}
  */
  readonly cloudFunctionsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}
  */
  readonly cloudIdentityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}
  */
  readonly cloudIdsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}
  */
  readonly cloudQuotasCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}
  */
  readonly cloudResourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}
  */
  readonly cloudRunCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}
  */
  readonly cloudRunV2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}
  */
  readonly cloudSchedulerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}
  */
  readonly cloudTasksCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}
  */
  readonly cloudbuildv2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}
  */
  readonly clouddeployCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}
  */
  readonly clouddomainsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}
  */
  readonly cloudfunctions2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}
  */
  readonly colabCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}
  */
  readonly composerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}
  */
  readonly computeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}
  */
  readonly contactCenterInsightsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}
  */
  readonly containerAnalysisCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}
  */
  readonly containerAttachedCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}
  */
  readonly containerAwsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}
  */
  readonly containerAzureCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}
  */
  readonly containerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}
  */
  readonly coreBillingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#credentials GoogleProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}
  */
  readonly dataCatalogCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}
  */
  readonly dataFusionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}
  */
  readonly dataLossPreventionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}
  */
  readonly dataPipelineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}
  */
  readonly databaseMigrationServiceCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}
  */
  readonly dataflowCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}
  */
  readonly dataplexCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}
  */
  readonly dataprocCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}
  */
  readonly dataprocGdcCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}
  */
  readonly dataprocMetastoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}
  */
  readonly datastreamCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#default_labels GoogleProvider#default_labels}
  */
  readonly defaultLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}
  */
  readonly deploymentManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}
  */
  readonly developerConnectCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}
  */
  readonly dialogflowCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}
  */
  readonly dialogflowCxCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}
  */
  readonly discoveryEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}
  */
  readonly dnsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}
  */
  readonly documentAiCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}
  */
  readonly documentAiWarehouseCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}
  */
  readonly edgecontainerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}
  */
  readonly edgenetworkCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}
  */
  readonly essentialContactsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}
  */
  readonly eventarcCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}
  */
  readonly filestoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}
  */
  readonly firebaseAppCheckCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}
  */
  readonly firebaseAppHostingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}
  */
  readonly firebaseDataConnectCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}
  */
  readonly firebaserulesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}
  */
  readonly firestoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}
  */
  readonly geminiCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}
  */
  readonly gkeBackupCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}
  */
  readonly gkeHub2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}
  */
  readonly gkeHubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}
  */
  readonly gkeonpremCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}
  */
  readonly healthcareCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}
  */
  readonly iam2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}
  */
  readonly iam3CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}
  */
  readonly iamBetaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}
  */
  readonly iamCredentialsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}
  */
  readonly iamCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}
  */
  readonly iamWorkforcePoolCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}
  */
  readonly iapCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}
  */
  readonly identityPlatformCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#impersonate_service_account GoogleProvider#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}
  */
  readonly impersonateServiceAccountDelegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}
  */
  readonly integrationConnectorsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}
  */
  readonly integrationsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}
  */
  readonly kmsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}
  */
  readonly loggingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}
  */
  readonly lookerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}
  */
  readonly lustreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}
  */
  readonly managedKafkaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}
  */
  readonly memcacheCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}
  */
  readonly memorystoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}
  */
  readonly migrationCenterCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}
  */
  readonly mlEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}
  */
  readonly modelArmorCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}
  */
  readonly modelArmorGlobalCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}
  */
  readonly monitoringCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}
  */
  readonly netappCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}
  */
  readonly networkConnectivityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}
  */
  readonly networkManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}
  */
  readonly networkSecurityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}
  */
  readonly networkServicesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}
  */
  readonly notebooksCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}
  */
  readonly oracleDatabaseCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}
  */
  readonly orgPolicyCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}
  */
  readonly osConfigCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}
  */
  readonly osConfigV2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}
  */
  readonly osLoginCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}
  */
  readonly parallelstoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}
  */
  readonly parameterManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}
  */
  readonly parameterManagerRegionalCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}
  */
  readonly privatecaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}
  */
  readonly privilegedAccessManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#project GoogleProvider#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}
  */
  readonly publicCaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}
  */
  readonly pubsubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}
  */
  readonly pubsubLiteCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}
  */
  readonly recaptchaEnterpriseCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}
  */
  readonly redisCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#region GoogleProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#request_reason GoogleProvider#request_reason}
  */
  readonly requestReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#request_timeout GoogleProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}
  */
  readonly resourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}
  */
  readonly resourceManagerV3CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#scopes GoogleProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}
  */
  readonly secretManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}
  */
  readonly secretManagerRegionalCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}
  */
  readonly secureSourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}
  */
  readonly securityCenterCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}
  */
  readonly securityCenterManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}
  */
  readonly securityCenterV2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}
  */
  readonly securitypostureCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}
  */
  readonly serviceManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}
  */
  readonly serviceNetworkingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}
  */
  readonly serviceUsageCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}
  */
  readonly siteVerificationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}
  */
  readonly sourceRepoCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}
  */
  readonly spannerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}
  */
  readonly sqlCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}
  */
  readonly storageBatchOperationsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}
  */
  readonly storageControlCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}
  */
  readonly storageCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}
  */
  readonly storageInsightsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}
  */
  readonly storageTransferCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}
  */
  readonly tagsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}
  */
  readonly tagsLocationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}
  */
  readonly terraformAttributionLabelAdditionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}
  */
  readonly tpuCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}
  */
  readonly transcoderCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#universe_domain GoogleProvider#universe_domain}
  */
  readonly universeDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#user_project_override GoogleProvider#user_project_override}
  */
  readonly userProjectOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}
  */
  readonly vertexAiCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}
  */
  readonly vmwareengineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}
  */
  readonly vpcAccessCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}
  */
  readonly workbenchCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}
  */
  readonly workflowsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#zone GoogleProvider#zone}
  */
  readonly zone?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#alias GoogleProvider#alias}
  */
  readonly alias?: string;
  /**
  * batching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#batching GoogleProvider#batching}
  */
  readonly batching?: GoogleProviderBatching[] | cdktf.IResolvable;
  /**
  * external_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#external_credentials GoogleProvider#external_credentials}
  */
  readonly externalCredentials?: GoogleProviderExternalCredentials[] | cdktf.IResolvable;
}
export interface GoogleProviderBatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#enable_batching GoogleProvider#enable_batching}
  */
  readonly enableBatching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#send_after GoogleProvider#send_after}
  */
  readonly sendAfter?: string;
}

export function googleProviderBatchingToTerraform(struct?: GoogleProviderBatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_batching: cdktf.booleanToTerraform(struct!.enableBatching),
    send_after: cdktf.stringToTerraform(struct!.sendAfter),
  }
}


export function googleProviderBatchingToHclTerraform(struct?: GoogleProviderBatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_batching: {
      value: cdktf.booleanToHclTerraform(struct!.enableBatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_after: {
      value: cdktf.stringToHclTerraform(struct!.sendAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface GoogleProviderExternalCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#audience GoogleProvider#audience}
  */
  readonly audience: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#identity_token GoogleProvider#identity_token}
  */
  readonly identityToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#service_account_email GoogleProvider#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function googleProviderExternalCredentialsToTerraform(struct?: GoogleProviderExternalCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    identity_token: cdktf.stringToTerraform(struct!.identityToken),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function googleProviderExternalCredentialsToHclTerraform(struct?: GoogleProviderExternalCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_token: {
      value: cdktf.stringToHclTerraform(struct!.identityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs google}
*/
export class GoogleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleProvider to import
  * @param importFromId The id of the existing GoogleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs google} Resource
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
        providerVersion: '6.49.2',
        providerVersionConstraint: '~> 6.0'
      },
      terraformProviderSource: 'google'
    });
    this._accessApprovalCustomEndpoint = config.accessApprovalCustomEndpoint;
    this._accessContextManagerCustomEndpoint = config.accessContextManagerCustomEndpoint;
    this._accessToken = config.accessToken;
    this._activeDirectoryCustomEndpoint = config.activeDirectoryCustomEndpoint;
    this._addTerraformAttributionLabel = config.addTerraformAttributionLabel;
    this._alloydbCustomEndpoint = config.alloydbCustomEndpoint;
    this._apigeeCustomEndpoint = config.apigeeCustomEndpoint;
    this._apihubCustomEndpoint = config.apihubCustomEndpoint;
    this._apikeysCustomEndpoint = config.apikeysCustomEndpoint;
    this._appEngineCustomEndpoint = config.appEngineCustomEndpoint;
    this._apphubCustomEndpoint = config.apphubCustomEndpoint;
    this._artifactRegistryCustomEndpoint = config.artifactRegistryCustomEndpoint;
    this._assuredWorkloadsCustomEndpoint = config.assuredWorkloadsCustomEndpoint;
    this._backupDrCustomEndpoint = config.backupDrCustomEndpoint;
    this._beyondcorpCustomEndpoint = config.beyondcorpCustomEndpoint;
    this._bigQueryCustomEndpoint = config.bigQueryCustomEndpoint;
    this._biglakeCustomEndpoint = config.biglakeCustomEndpoint;
    this._bigqueryAnalyticsHubCustomEndpoint = config.bigqueryAnalyticsHubCustomEndpoint;
    this._bigqueryConnectionCustomEndpoint = config.bigqueryConnectionCustomEndpoint;
    this._bigqueryDataTransferCustomEndpoint = config.bigqueryDataTransferCustomEndpoint;
    this._bigqueryDatapolicyCustomEndpoint = config.bigqueryDatapolicyCustomEndpoint;
    this._bigqueryReservationCustomEndpoint = config.bigqueryReservationCustomEndpoint;
    this._bigtableCustomEndpoint = config.bigtableCustomEndpoint;
    this._billingCustomEndpoint = config.billingCustomEndpoint;
    this._billingProject = config.billingProject;
    this._binaryAuthorizationCustomEndpoint = config.binaryAuthorizationCustomEndpoint;
    this._blockchainNodeEngineCustomEndpoint = config.blockchainNodeEngineCustomEndpoint;
    this._certificateManagerCustomEndpoint = config.certificateManagerCustomEndpoint;
    this._chronicleCustomEndpoint = config.chronicleCustomEndpoint;
    this._cloudAssetCustomEndpoint = config.cloudAssetCustomEndpoint;
    this._cloudBillingCustomEndpoint = config.cloudBillingCustomEndpoint;
    this._cloudBuildCustomEndpoint = config.cloudBuildCustomEndpoint;
    this._cloudFunctionsCustomEndpoint = config.cloudFunctionsCustomEndpoint;
    this._cloudIdentityCustomEndpoint = config.cloudIdentityCustomEndpoint;
    this._cloudIdsCustomEndpoint = config.cloudIdsCustomEndpoint;
    this._cloudQuotasCustomEndpoint = config.cloudQuotasCustomEndpoint;
    this._cloudResourceManagerCustomEndpoint = config.cloudResourceManagerCustomEndpoint;
    this._cloudRunCustomEndpoint = config.cloudRunCustomEndpoint;
    this._cloudRunV2CustomEndpoint = config.cloudRunV2CustomEndpoint;
    this._cloudSchedulerCustomEndpoint = config.cloudSchedulerCustomEndpoint;
    this._cloudTasksCustomEndpoint = config.cloudTasksCustomEndpoint;
    this._cloudbuildv2CustomEndpoint = config.cloudbuildv2CustomEndpoint;
    this._clouddeployCustomEndpoint = config.clouddeployCustomEndpoint;
    this._clouddomainsCustomEndpoint = config.clouddomainsCustomEndpoint;
    this._cloudfunctions2CustomEndpoint = config.cloudfunctions2CustomEndpoint;
    this._colabCustomEndpoint = config.colabCustomEndpoint;
    this._composerCustomEndpoint = config.composerCustomEndpoint;
    this._computeCustomEndpoint = config.computeCustomEndpoint;
    this._contactCenterInsightsCustomEndpoint = config.contactCenterInsightsCustomEndpoint;
    this._containerAnalysisCustomEndpoint = config.containerAnalysisCustomEndpoint;
    this._containerAttachedCustomEndpoint = config.containerAttachedCustomEndpoint;
    this._containerAwsCustomEndpoint = config.containerAwsCustomEndpoint;
    this._containerAzureCustomEndpoint = config.containerAzureCustomEndpoint;
    this._containerCustomEndpoint = config.containerCustomEndpoint;
    this._coreBillingCustomEndpoint = config.coreBillingCustomEndpoint;
    this._credentials = config.credentials;
    this._dataCatalogCustomEndpoint = config.dataCatalogCustomEndpoint;
    this._dataFusionCustomEndpoint = config.dataFusionCustomEndpoint;
    this._dataLossPreventionCustomEndpoint = config.dataLossPreventionCustomEndpoint;
    this._dataPipelineCustomEndpoint = config.dataPipelineCustomEndpoint;
    this._databaseMigrationServiceCustomEndpoint = config.databaseMigrationServiceCustomEndpoint;
    this._dataflowCustomEndpoint = config.dataflowCustomEndpoint;
    this._dataplexCustomEndpoint = config.dataplexCustomEndpoint;
    this._dataprocCustomEndpoint = config.dataprocCustomEndpoint;
    this._dataprocGdcCustomEndpoint = config.dataprocGdcCustomEndpoint;
    this._dataprocMetastoreCustomEndpoint = config.dataprocMetastoreCustomEndpoint;
    this._datastreamCustomEndpoint = config.datastreamCustomEndpoint;
    this._defaultLabels = config.defaultLabels;
    this._deploymentManagerCustomEndpoint = config.deploymentManagerCustomEndpoint;
    this._developerConnectCustomEndpoint = config.developerConnectCustomEndpoint;
    this._dialogflowCustomEndpoint = config.dialogflowCustomEndpoint;
    this._dialogflowCxCustomEndpoint = config.dialogflowCxCustomEndpoint;
    this._discoveryEngineCustomEndpoint = config.discoveryEngineCustomEndpoint;
    this._dnsCustomEndpoint = config.dnsCustomEndpoint;
    this._documentAiCustomEndpoint = config.documentAiCustomEndpoint;
    this._documentAiWarehouseCustomEndpoint = config.documentAiWarehouseCustomEndpoint;
    this._edgecontainerCustomEndpoint = config.edgecontainerCustomEndpoint;
    this._edgenetworkCustomEndpoint = config.edgenetworkCustomEndpoint;
    this._essentialContactsCustomEndpoint = config.essentialContactsCustomEndpoint;
    this._eventarcCustomEndpoint = config.eventarcCustomEndpoint;
    this._filestoreCustomEndpoint = config.filestoreCustomEndpoint;
    this._firebaseAppCheckCustomEndpoint = config.firebaseAppCheckCustomEndpoint;
    this._firebaseAppHostingCustomEndpoint = config.firebaseAppHostingCustomEndpoint;
    this._firebaseDataConnectCustomEndpoint = config.firebaseDataConnectCustomEndpoint;
    this._firebaserulesCustomEndpoint = config.firebaserulesCustomEndpoint;
    this._firestoreCustomEndpoint = config.firestoreCustomEndpoint;
    this._geminiCustomEndpoint = config.geminiCustomEndpoint;
    this._gkeBackupCustomEndpoint = config.gkeBackupCustomEndpoint;
    this._gkeHub2CustomEndpoint = config.gkeHub2CustomEndpoint;
    this._gkeHubCustomEndpoint = config.gkeHubCustomEndpoint;
    this._gkeonpremCustomEndpoint = config.gkeonpremCustomEndpoint;
    this._healthcareCustomEndpoint = config.healthcareCustomEndpoint;
    this._iam2CustomEndpoint = config.iam2CustomEndpoint;
    this._iam3CustomEndpoint = config.iam3CustomEndpoint;
    this._iamBetaCustomEndpoint = config.iamBetaCustomEndpoint;
    this._iamCredentialsCustomEndpoint = config.iamCredentialsCustomEndpoint;
    this._iamCustomEndpoint = config.iamCustomEndpoint;
    this._iamWorkforcePoolCustomEndpoint = config.iamWorkforcePoolCustomEndpoint;
    this._iapCustomEndpoint = config.iapCustomEndpoint;
    this._identityPlatformCustomEndpoint = config.identityPlatformCustomEndpoint;
    this._impersonateServiceAccount = config.impersonateServiceAccount;
    this._impersonateServiceAccountDelegates = config.impersonateServiceAccountDelegates;
    this._integrationConnectorsCustomEndpoint = config.integrationConnectorsCustomEndpoint;
    this._integrationsCustomEndpoint = config.integrationsCustomEndpoint;
    this._kmsCustomEndpoint = config.kmsCustomEndpoint;
    this._loggingCustomEndpoint = config.loggingCustomEndpoint;
    this._lookerCustomEndpoint = config.lookerCustomEndpoint;
    this._lustreCustomEndpoint = config.lustreCustomEndpoint;
    this._managedKafkaCustomEndpoint = config.managedKafkaCustomEndpoint;
    this._memcacheCustomEndpoint = config.memcacheCustomEndpoint;
    this._memorystoreCustomEndpoint = config.memorystoreCustomEndpoint;
    this._migrationCenterCustomEndpoint = config.migrationCenterCustomEndpoint;
    this._mlEngineCustomEndpoint = config.mlEngineCustomEndpoint;
    this._modelArmorCustomEndpoint = config.modelArmorCustomEndpoint;
    this._modelArmorGlobalCustomEndpoint = config.modelArmorGlobalCustomEndpoint;
    this._monitoringCustomEndpoint = config.monitoringCustomEndpoint;
    this._netappCustomEndpoint = config.netappCustomEndpoint;
    this._networkConnectivityCustomEndpoint = config.networkConnectivityCustomEndpoint;
    this._networkManagementCustomEndpoint = config.networkManagementCustomEndpoint;
    this._networkSecurityCustomEndpoint = config.networkSecurityCustomEndpoint;
    this._networkServicesCustomEndpoint = config.networkServicesCustomEndpoint;
    this._notebooksCustomEndpoint = config.notebooksCustomEndpoint;
    this._oracleDatabaseCustomEndpoint = config.oracleDatabaseCustomEndpoint;
    this._orgPolicyCustomEndpoint = config.orgPolicyCustomEndpoint;
    this._osConfigCustomEndpoint = config.osConfigCustomEndpoint;
    this._osConfigV2CustomEndpoint = config.osConfigV2CustomEndpoint;
    this._osLoginCustomEndpoint = config.osLoginCustomEndpoint;
    this._parallelstoreCustomEndpoint = config.parallelstoreCustomEndpoint;
    this._parameterManagerCustomEndpoint = config.parameterManagerCustomEndpoint;
    this._parameterManagerRegionalCustomEndpoint = config.parameterManagerRegionalCustomEndpoint;
    this._privatecaCustomEndpoint = config.privatecaCustomEndpoint;
    this._privilegedAccessManagerCustomEndpoint = config.privilegedAccessManagerCustomEndpoint;
    this._project = config.project;
    this._publicCaCustomEndpoint = config.publicCaCustomEndpoint;
    this._pubsubCustomEndpoint = config.pubsubCustomEndpoint;
    this._pubsubLiteCustomEndpoint = config.pubsubLiteCustomEndpoint;
    this._recaptchaEnterpriseCustomEndpoint = config.recaptchaEnterpriseCustomEndpoint;
    this._redisCustomEndpoint = config.redisCustomEndpoint;
    this._region = config.region;
    this._requestReason = config.requestReason;
    this._requestTimeout = config.requestTimeout;
    this._resourceManagerCustomEndpoint = config.resourceManagerCustomEndpoint;
    this._resourceManagerV3CustomEndpoint = config.resourceManagerV3CustomEndpoint;
    this._scopes = config.scopes;
    this._secretManagerCustomEndpoint = config.secretManagerCustomEndpoint;
    this._secretManagerRegionalCustomEndpoint = config.secretManagerRegionalCustomEndpoint;
    this._secureSourceManagerCustomEndpoint = config.secureSourceManagerCustomEndpoint;
    this._securityCenterCustomEndpoint = config.securityCenterCustomEndpoint;
    this._securityCenterManagementCustomEndpoint = config.securityCenterManagementCustomEndpoint;
    this._securityCenterV2CustomEndpoint = config.securityCenterV2CustomEndpoint;
    this._securitypostureCustomEndpoint = config.securitypostureCustomEndpoint;
    this._serviceManagementCustomEndpoint = config.serviceManagementCustomEndpoint;
    this._serviceNetworkingCustomEndpoint = config.serviceNetworkingCustomEndpoint;
    this._serviceUsageCustomEndpoint = config.serviceUsageCustomEndpoint;
    this._siteVerificationCustomEndpoint = config.siteVerificationCustomEndpoint;
    this._sourceRepoCustomEndpoint = config.sourceRepoCustomEndpoint;
    this._spannerCustomEndpoint = config.spannerCustomEndpoint;
    this._sqlCustomEndpoint = config.sqlCustomEndpoint;
    this._storageBatchOperationsCustomEndpoint = config.storageBatchOperationsCustomEndpoint;
    this._storageControlCustomEndpoint = config.storageControlCustomEndpoint;
    this._storageCustomEndpoint = config.storageCustomEndpoint;
    this._storageInsightsCustomEndpoint = config.storageInsightsCustomEndpoint;
    this._storageTransferCustomEndpoint = config.storageTransferCustomEndpoint;
    this._tagsCustomEndpoint = config.tagsCustomEndpoint;
    this._tagsLocationCustomEndpoint = config.tagsLocationCustomEndpoint;
    this._terraformAttributionLabelAdditionStrategy = config.terraformAttributionLabelAdditionStrategy;
    this._tpuCustomEndpoint = config.tpuCustomEndpoint;
    this._transcoderCustomEndpoint = config.transcoderCustomEndpoint;
    this._universeDomain = config.universeDomain;
    this._userProjectOverride = config.userProjectOverride;
    this._vertexAiCustomEndpoint = config.vertexAiCustomEndpoint;
    this._vmwareengineCustomEndpoint = config.vmwareengineCustomEndpoint;
    this._vpcAccessCustomEndpoint = config.vpcAccessCustomEndpoint;
    this._workbenchCustomEndpoint = config.workbenchCustomEndpoint;
    this._workflowsCustomEndpoint = config.workflowsCustomEndpoint;
    this._zone = config.zone;
    this._alias = config.alias;
    this._batching = config.batching;
    this._externalCredentials = config.externalCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_approval_custom_endpoint - computed: false, optional: true, required: false
  private _accessApprovalCustomEndpoint?: string; 
  public get accessApprovalCustomEndpoint() {
    return this._accessApprovalCustomEndpoint;
  }
  public set accessApprovalCustomEndpoint(value: string | undefined) {
    this._accessApprovalCustomEndpoint = value;
  }
  public resetAccessApprovalCustomEndpoint() {
    this._accessApprovalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessApprovalCustomEndpointInput() {
    return this._accessApprovalCustomEndpoint;
  }

  // access_context_manager_custom_endpoint - computed: false, optional: true, required: false
  private _accessContextManagerCustomEndpoint?: string; 
  public get accessContextManagerCustomEndpoint() {
    return this._accessContextManagerCustomEndpoint;
  }
  public set accessContextManagerCustomEndpoint(value: string | undefined) {
    this._accessContextManagerCustomEndpoint = value;
  }
  public resetAccessContextManagerCustomEndpoint() {
    this._accessContextManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessContextManagerCustomEndpointInput() {
    return this._accessContextManagerCustomEndpoint;
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // active_directory_custom_endpoint - computed: false, optional: true, required: false
  private _activeDirectoryCustomEndpoint?: string; 
  public get activeDirectoryCustomEndpoint() {
    return this._activeDirectoryCustomEndpoint;
  }
  public set activeDirectoryCustomEndpoint(value: string | undefined) {
    this._activeDirectoryCustomEndpoint = value;
  }
  public resetActiveDirectoryCustomEndpoint() {
    this._activeDirectoryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryCustomEndpointInput() {
    return this._activeDirectoryCustomEndpoint;
  }

  // add_terraform_attribution_label - computed: false, optional: true, required: false
  private _addTerraformAttributionLabel?: boolean | cdktf.IResolvable; 
  public get addTerraformAttributionLabel() {
    return this._addTerraformAttributionLabel;
  }
  public set addTerraformAttributionLabel(value: boolean | cdktf.IResolvable | undefined) {
    this._addTerraformAttributionLabel = value;
  }
  public resetAddTerraformAttributionLabel() {
    this._addTerraformAttributionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addTerraformAttributionLabelInput() {
    return this._addTerraformAttributionLabel;
  }

  // alloydb_custom_endpoint - computed: false, optional: true, required: false
  private _alloydbCustomEndpoint?: string; 
  public get alloydbCustomEndpoint() {
    return this._alloydbCustomEndpoint;
  }
  public set alloydbCustomEndpoint(value: string | undefined) {
    this._alloydbCustomEndpoint = value;
  }
  public resetAlloydbCustomEndpoint() {
    this._alloydbCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alloydbCustomEndpointInput() {
    return this._alloydbCustomEndpoint;
  }

  // apigee_custom_endpoint - computed: false, optional: true, required: false
  private _apigeeCustomEndpoint?: string; 
  public get apigeeCustomEndpoint() {
    return this._apigeeCustomEndpoint;
  }
  public set apigeeCustomEndpoint(value: string | undefined) {
    this._apigeeCustomEndpoint = value;
  }
  public resetApigeeCustomEndpoint() {
    this._apigeeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeCustomEndpointInput() {
    return this._apigeeCustomEndpoint;
  }

  // apihub_custom_endpoint - computed: false, optional: true, required: false
  private _apihubCustomEndpoint?: string; 
  public get apihubCustomEndpoint() {
    return this._apihubCustomEndpoint;
  }
  public set apihubCustomEndpoint(value: string | undefined) {
    this._apihubCustomEndpoint = value;
  }
  public resetApihubCustomEndpoint() {
    this._apihubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apihubCustomEndpointInput() {
    return this._apihubCustomEndpoint;
  }

  // apikeys_custom_endpoint - computed: false, optional: true, required: false
  private _apikeysCustomEndpoint?: string; 
  public get apikeysCustomEndpoint() {
    return this._apikeysCustomEndpoint;
  }
  public set apikeysCustomEndpoint(value: string | undefined) {
    this._apikeysCustomEndpoint = value;
  }
  public resetApikeysCustomEndpoint() {
    this._apikeysCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeysCustomEndpointInput() {
    return this._apikeysCustomEndpoint;
  }

  // app_engine_custom_endpoint - computed: false, optional: true, required: false
  private _appEngineCustomEndpoint?: string; 
  public get appEngineCustomEndpoint() {
    return this._appEngineCustomEndpoint;
  }
  public set appEngineCustomEndpoint(value: string | undefined) {
    this._appEngineCustomEndpoint = value;
  }
  public resetAppEngineCustomEndpoint() {
    this._appEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineCustomEndpointInput() {
    return this._appEngineCustomEndpoint;
  }

  // apphub_custom_endpoint - computed: false, optional: true, required: false
  private _apphubCustomEndpoint?: string; 
  public get apphubCustomEndpoint() {
    return this._apphubCustomEndpoint;
  }
  public set apphubCustomEndpoint(value: string | undefined) {
    this._apphubCustomEndpoint = value;
  }
  public resetApphubCustomEndpoint() {
    this._apphubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apphubCustomEndpointInput() {
    return this._apphubCustomEndpoint;
  }

  // artifact_registry_custom_endpoint - computed: false, optional: true, required: false
  private _artifactRegistryCustomEndpoint?: string; 
  public get artifactRegistryCustomEndpoint() {
    return this._artifactRegistryCustomEndpoint;
  }
  public set artifactRegistryCustomEndpoint(value: string | undefined) {
    this._artifactRegistryCustomEndpoint = value;
  }
  public resetArtifactRegistryCustomEndpoint() {
    this._artifactRegistryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactRegistryCustomEndpointInput() {
    return this._artifactRegistryCustomEndpoint;
  }

  // assured_workloads_custom_endpoint - computed: false, optional: true, required: false
  private _assuredWorkloadsCustomEndpoint?: string; 
  public get assuredWorkloadsCustomEndpoint() {
    return this._assuredWorkloadsCustomEndpoint;
  }
  public set assuredWorkloadsCustomEndpoint(value: string | undefined) {
    this._assuredWorkloadsCustomEndpoint = value;
  }
  public resetAssuredWorkloadsCustomEndpoint() {
    this._assuredWorkloadsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuredWorkloadsCustomEndpointInput() {
    return this._assuredWorkloadsCustomEndpoint;
  }

  // backup_dr_custom_endpoint - computed: false, optional: true, required: false
  private _backupDrCustomEndpoint?: string; 
  public get backupDrCustomEndpoint() {
    return this._backupDrCustomEndpoint;
  }
  public set backupDrCustomEndpoint(value: string | undefined) {
    this._backupDrCustomEndpoint = value;
  }
  public resetBackupDrCustomEndpoint() {
    this._backupDrCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDrCustomEndpointInput() {
    return this._backupDrCustomEndpoint;
  }

  // beyondcorp_custom_endpoint - computed: false, optional: true, required: false
  private _beyondcorpCustomEndpoint?: string; 
  public get beyondcorpCustomEndpoint() {
    return this._beyondcorpCustomEndpoint;
  }
  public set beyondcorpCustomEndpoint(value: string | undefined) {
    this._beyondcorpCustomEndpoint = value;
  }
  public resetBeyondcorpCustomEndpoint() {
    this._beyondcorpCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beyondcorpCustomEndpointInput() {
    return this._beyondcorpCustomEndpoint;
  }

  // big_query_custom_endpoint - computed: false, optional: true, required: false
  private _bigQueryCustomEndpoint?: string; 
  public get bigQueryCustomEndpoint() {
    return this._bigQueryCustomEndpoint;
  }
  public set bigQueryCustomEndpoint(value: string | undefined) {
    this._bigQueryCustomEndpoint = value;
  }
  public resetBigQueryCustomEndpoint() {
    this._bigQueryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryCustomEndpointInput() {
    return this._bigQueryCustomEndpoint;
  }

  // biglake_custom_endpoint - computed: false, optional: true, required: false
  private _biglakeCustomEndpoint?: string; 
  public get biglakeCustomEndpoint() {
    return this._biglakeCustomEndpoint;
  }
  public set biglakeCustomEndpoint(value: string | undefined) {
    this._biglakeCustomEndpoint = value;
  }
  public resetBiglakeCustomEndpoint() {
    this._biglakeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biglakeCustomEndpointInput() {
    return this._biglakeCustomEndpoint;
  }

  // bigquery_analytics_hub_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryAnalyticsHubCustomEndpoint?: string; 
  public get bigqueryAnalyticsHubCustomEndpoint() {
    return this._bigqueryAnalyticsHubCustomEndpoint;
  }
  public set bigqueryAnalyticsHubCustomEndpoint(value: string | undefined) {
    this._bigqueryAnalyticsHubCustomEndpoint = value;
  }
  public resetBigqueryAnalyticsHubCustomEndpoint() {
    this._bigqueryAnalyticsHubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryAnalyticsHubCustomEndpointInput() {
    return this._bigqueryAnalyticsHubCustomEndpoint;
  }

  // bigquery_connection_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryConnectionCustomEndpoint?: string; 
  public get bigqueryConnectionCustomEndpoint() {
    return this._bigqueryConnectionCustomEndpoint;
  }
  public set bigqueryConnectionCustomEndpoint(value: string | undefined) {
    this._bigqueryConnectionCustomEndpoint = value;
  }
  public resetBigqueryConnectionCustomEndpoint() {
    this._bigqueryConnectionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConnectionCustomEndpointInput() {
    return this._bigqueryConnectionCustomEndpoint;
  }

  // bigquery_data_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDataTransferCustomEndpoint?: string; 
  public get bigqueryDataTransferCustomEndpoint() {
    return this._bigqueryDataTransferCustomEndpoint;
  }
  public set bigqueryDataTransferCustomEndpoint(value: string | undefined) {
    this._bigqueryDataTransferCustomEndpoint = value;
  }
  public resetBigqueryDataTransferCustomEndpoint() {
    this._bigqueryDataTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDataTransferCustomEndpointInput() {
    return this._bigqueryDataTransferCustomEndpoint;
  }

  // bigquery_datapolicy_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDatapolicyCustomEndpoint?: string; 
  public get bigqueryDatapolicyCustomEndpoint() {
    return this._bigqueryDatapolicyCustomEndpoint;
  }
  public set bigqueryDatapolicyCustomEndpoint(value: string | undefined) {
    this._bigqueryDatapolicyCustomEndpoint = value;
  }
  public resetBigqueryDatapolicyCustomEndpoint() {
    this._bigqueryDatapolicyCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatapolicyCustomEndpointInput() {
    return this._bigqueryDatapolicyCustomEndpoint;
  }

  // bigquery_reservation_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryReservationCustomEndpoint?: string; 
  public get bigqueryReservationCustomEndpoint() {
    return this._bigqueryReservationCustomEndpoint;
  }
  public set bigqueryReservationCustomEndpoint(value: string | undefined) {
    this._bigqueryReservationCustomEndpoint = value;
  }
  public resetBigqueryReservationCustomEndpoint() {
    this._bigqueryReservationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryReservationCustomEndpointInput() {
    return this._bigqueryReservationCustomEndpoint;
  }

  // bigtable_custom_endpoint - computed: false, optional: true, required: false
  private _bigtableCustomEndpoint?: string; 
  public get bigtableCustomEndpoint() {
    return this._bigtableCustomEndpoint;
  }
  public set bigtableCustomEndpoint(value: string | undefined) {
    this._bigtableCustomEndpoint = value;
  }
  public resetBigtableCustomEndpoint() {
    this._bigtableCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigtableCustomEndpointInput() {
    return this._bigtableCustomEndpoint;
  }

  // billing_custom_endpoint - computed: false, optional: true, required: false
  private _billingCustomEndpoint?: string; 
  public get billingCustomEndpoint() {
    return this._billingCustomEndpoint;
  }
  public set billingCustomEndpoint(value: string | undefined) {
    this._billingCustomEndpoint = value;
  }
  public resetBillingCustomEndpoint() {
    this._billingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCustomEndpointInput() {
    return this._billingCustomEndpoint;
  }

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string; 
  public get billingProject() {
    return this._billingProject;
  }
  public set billingProject(value: string | undefined) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject;
  }

  // binary_authorization_custom_endpoint - computed: false, optional: true, required: false
  private _binaryAuthorizationCustomEndpoint?: string; 
  public get binaryAuthorizationCustomEndpoint() {
    return this._binaryAuthorizationCustomEndpoint;
  }
  public set binaryAuthorizationCustomEndpoint(value: string | undefined) {
    this._binaryAuthorizationCustomEndpoint = value;
  }
  public resetBinaryAuthorizationCustomEndpoint() {
    this._binaryAuthorizationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationCustomEndpointInput() {
    return this._binaryAuthorizationCustomEndpoint;
  }

  // blockchain_node_engine_custom_endpoint - computed: false, optional: true, required: false
  private _blockchainNodeEngineCustomEndpoint?: string; 
  public get blockchainNodeEngineCustomEndpoint() {
    return this._blockchainNodeEngineCustomEndpoint;
  }
  public set blockchainNodeEngineCustomEndpoint(value: string | undefined) {
    this._blockchainNodeEngineCustomEndpoint = value;
  }
  public resetBlockchainNodeEngineCustomEndpoint() {
    this._blockchainNodeEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockchainNodeEngineCustomEndpointInput() {
    return this._blockchainNodeEngineCustomEndpoint;
  }

  // certificate_manager_custom_endpoint - computed: false, optional: true, required: false
  private _certificateManagerCustomEndpoint?: string; 
  public get certificateManagerCustomEndpoint() {
    return this._certificateManagerCustomEndpoint;
  }
  public set certificateManagerCustomEndpoint(value: string | undefined) {
    this._certificateManagerCustomEndpoint = value;
  }
  public resetCertificateManagerCustomEndpoint() {
    this._certificateManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagerCustomEndpointInput() {
    return this._certificateManagerCustomEndpoint;
  }

  // chronicle_custom_endpoint - computed: false, optional: true, required: false
  private _chronicleCustomEndpoint?: string; 
  public get chronicleCustomEndpoint() {
    return this._chronicleCustomEndpoint;
  }
  public set chronicleCustomEndpoint(value: string | undefined) {
    this._chronicleCustomEndpoint = value;
  }
  public resetChronicleCustomEndpoint() {
    this._chronicleCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chronicleCustomEndpointInput() {
    return this._chronicleCustomEndpoint;
  }

  // cloud_asset_custom_endpoint - computed: false, optional: true, required: false
  private _cloudAssetCustomEndpoint?: string; 
  public get cloudAssetCustomEndpoint() {
    return this._cloudAssetCustomEndpoint;
  }
  public set cloudAssetCustomEndpoint(value: string | undefined) {
    this._cloudAssetCustomEndpoint = value;
  }
  public resetCloudAssetCustomEndpoint() {
    this._cloudAssetCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAssetCustomEndpointInput() {
    return this._cloudAssetCustomEndpoint;
  }

  // cloud_billing_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBillingCustomEndpoint?: string; 
  public get cloudBillingCustomEndpoint() {
    return this._cloudBillingCustomEndpoint;
  }
  public set cloudBillingCustomEndpoint(value: string | undefined) {
    this._cloudBillingCustomEndpoint = value;
  }
  public resetCloudBillingCustomEndpoint() {
    this._cloudBillingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBillingCustomEndpointInput() {
    return this._cloudBillingCustomEndpoint;
  }

  // cloud_build_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBuildCustomEndpoint?: string; 
  public get cloudBuildCustomEndpoint() {
    return this._cloudBuildCustomEndpoint;
  }
  public set cloudBuildCustomEndpoint(value: string | undefined) {
    this._cloudBuildCustomEndpoint = value;
  }
  public resetCloudBuildCustomEndpoint() {
    this._cloudBuildCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildCustomEndpointInput() {
    return this._cloudBuildCustomEndpoint;
  }

  // cloud_functions_custom_endpoint - computed: false, optional: true, required: false
  private _cloudFunctionsCustomEndpoint?: string; 
  public get cloudFunctionsCustomEndpoint() {
    return this._cloudFunctionsCustomEndpoint;
  }
  public set cloudFunctionsCustomEndpoint(value: string | undefined) {
    this._cloudFunctionsCustomEndpoint = value;
  }
  public resetCloudFunctionsCustomEndpoint() {
    this._cloudFunctionsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionsCustomEndpointInput() {
    return this._cloudFunctionsCustomEndpoint;
  }

  // cloud_identity_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIdentityCustomEndpoint?: string; 
  public get cloudIdentityCustomEndpoint() {
    return this._cloudIdentityCustomEndpoint;
  }
  public set cloudIdentityCustomEndpoint(value: string | undefined) {
    this._cloudIdentityCustomEndpoint = value;
  }
  public resetCloudIdentityCustomEndpoint() {
    this._cloudIdentityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdentityCustomEndpointInput() {
    return this._cloudIdentityCustomEndpoint;
  }

  // cloud_ids_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIdsCustomEndpoint?: string; 
  public get cloudIdsCustomEndpoint() {
    return this._cloudIdsCustomEndpoint;
  }
  public set cloudIdsCustomEndpoint(value: string | undefined) {
    this._cloudIdsCustomEndpoint = value;
  }
  public resetCloudIdsCustomEndpoint() {
    this._cloudIdsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdsCustomEndpointInput() {
    return this._cloudIdsCustomEndpoint;
  }

  // cloud_quotas_custom_endpoint - computed: false, optional: true, required: false
  private _cloudQuotasCustomEndpoint?: string; 
  public get cloudQuotasCustomEndpoint() {
    return this._cloudQuotasCustomEndpoint;
  }
  public set cloudQuotasCustomEndpoint(value: string | undefined) {
    this._cloudQuotasCustomEndpoint = value;
  }
  public resetCloudQuotasCustomEndpoint() {
    this._cloudQuotasCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudQuotasCustomEndpointInput() {
    return this._cloudQuotasCustomEndpoint;
  }

  // cloud_resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _cloudResourceManagerCustomEndpoint?: string; 
  public get cloudResourceManagerCustomEndpoint() {
    return this._cloudResourceManagerCustomEndpoint;
  }
  public set cloudResourceManagerCustomEndpoint(value: string | undefined) {
    this._cloudResourceManagerCustomEndpoint = value;
  }
  public resetCloudResourceManagerCustomEndpoint() {
    this._cloudResourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceManagerCustomEndpointInput() {
    return this._cloudResourceManagerCustomEndpoint;
  }

  // cloud_run_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunCustomEndpoint?: string; 
  public get cloudRunCustomEndpoint() {
    return this._cloudRunCustomEndpoint;
  }
  public set cloudRunCustomEndpoint(value: string | undefined) {
    this._cloudRunCustomEndpoint = value;
  }
  public resetCloudRunCustomEndpoint() {
    this._cloudRunCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunCustomEndpointInput() {
    return this._cloudRunCustomEndpoint;
  }

  // cloud_run_v2_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunV2CustomEndpoint?: string; 
  public get cloudRunV2CustomEndpoint() {
    return this._cloudRunV2CustomEndpoint;
  }
  public set cloudRunV2CustomEndpoint(value: string | undefined) {
    this._cloudRunV2CustomEndpoint = value;
  }
  public resetCloudRunV2CustomEndpoint() {
    this._cloudRunV2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunV2CustomEndpointInput() {
    return this._cloudRunV2CustomEndpoint;
  }

  // cloud_scheduler_custom_endpoint - computed: false, optional: true, required: false
  private _cloudSchedulerCustomEndpoint?: string; 
  public get cloudSchedulerCustomEndpoint() {
    return this._cloudSchedulerCustomEndpoint;
  }
  public set cloudSchedulerCustomEndpoint(value: string | undefined) {
    this._cloudSchedulerCustomEndpoint = value;
  }
  public resetCloudSchedulerCustomEndpoint() {
    this._cloudSchedulerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSchedulerCustomEndpointInput() {
    return this._cloudSchedulerCustomEndpoint;
  }

  // cloud_tasks_custom_endpoint - computed: false, optional: true, required: false
  private _cloudTasksCustomEndpoint?: string; 
  public get cloudTasksCustomEndpoint() {
    return this._cloudTasksCustomEndpoint;
  }
  public set cloudTasksCustomEndpoint(value: string | undefined) {
    this._cloudTasksCustomEndpoint = value;
  }
  public resetCloudTasksCustomEndpoint() {
    this._cloudTasksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTasksCustomEndpointInput() {
    return this._cloudTasksCustomEndpoint;
  }

  // cloudbuildv2_custom_endpoint - computed: false, optional: true, required: false
  private _cloudbuildv2CustomEndpoint?: string; 
  public get cloudbuildv2CustomEndpoint() {
    return this._cloudbuildv2CustomEndpoint;
  }
  public set cloudbuildv2CustomEndpoint(value: string | undefined) {
    this._cloudbuildv2CustomEndpoint = value;
  }
  public resetCloudbuildv2CustomEndpoint() {
    this._cloudbuildv2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudbuildv2CustomEndpointInput() {
    return this._cloudbuildv2CustomEndpoint;
  }

  // clouddeploy_custom_endpoint - computed: false, optional: true, required: false
  private _clouddeployCustomEndpoint?: string; 
  public get clouddeployCustomEndpoint() {
    return this._clouddeployCustomEndpoint;
  }
  public set clouddeployCustomEndpoint(value: string | undefined) {
    this._clouddeployCustomEndpoint = value;
  }
  public resetClouddeployCustomEndpoint() {
    this._clouddeployCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clouddeployCustomEndpointInput() {
    return this._clouddeployCustomEndpoint;
  }

  // clouddomains_custom_endpoint - computed: false, optional: true, required: false
  private _clouddomainsCustomEndpoint?: string; 
  public get clouddomainsCustomEndpoint() {
    return this._clouddomainsCustomEndpoint;
  }
  public set clouddomainsCustomEndpoint(value: string | undefined) {
    this._clouddomainsCustomEndpoint = value;
  }
  public resetClouddomainsCustomEndpoint() {
    this._clouddomainsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clouddomainsCustomEndpointInput() {
    return this._clouddomainsCustomEndpoint;
  }

  // cloudfunctions2_custom_endpoint - computed: false, optional: true, required: false
  private _cloudfunctions2CustomEndpoint?: string; 
  public get cloudfunctions2CustomEndpoint() {
    return this._cloudfunctions2CustomEndpoint;
  }
  public set cloudfunctions2CustomEndpoint(value: string | undefined) {
    this._cloudfunctions2CustomEndpoint = value;
  }
  public resetCloudfunctions2CustomEndpoint() {
    this._cloudfunctions2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfunctions2CustomEndpointInput() {
    return this._cloudfunctions2CustomEndpoint;
  }

  // colab_custom_endpoint - computed: false, optional: true, required: false
  private _colabCustomEndpoint?: string; 
  public get colabCustomEndpoint() {
    return this._colabCustomEndpoint;
  }
  public set colabCustomEndpoint(value: string | undefined) {
    this._colabCustomEndpoint = value;
  }
  public resetColabCustomEndpoint() {
    this._colabCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colabCustomEndpointInput() {
    return this._colabCustomEndpoint;
  }

  // composer_custom_endpoint - computed: false, optional: true, required: false
  private _composerCustomEndpoint?: string; 
  public get composerCustomEndpoint() {
    return this._composerCustomEndpoint;
  }
  public set composerCustomEndpoint(value: string | undefined) {
    this._composerCustomEndpoint = value;
  }
  public resetComposerCustomEndpoint() {
    this._composerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composerCustomEndpointInput() {
    return this._composerCustomEndpoint;
  }

  // compute_custom_endpoint - computed: false, optional: true, required: false
  private _computeCustomEndpoint?: string; 
  public get computeCustomEndpoint() {
    return this._computeCustomEndpoint;
  }
  public set computeCustomEndpoint(value: string | undefined) {
    this._computeCustomEndpoint = value;
  }
  public resetComputeCustomEndpoint() {
    this._computeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCustomEndpointInput() {
    return this._computeCustomEndpoint;
  }

  // contact_center_insights_custom_endpoint - computed: false, optional: true, required: false
  private _contactCenterInsightsCustomEndpoint?: string; 
  public get contactCenterInsightsCustomEndpoint() {
    return this._contactCenterInsightsCustomEndpoint;
  }
  public set contactCenterInsightsCustomEndpoint(value: string | undefined) {
    this._contactCenterInsightsCustomEndpoint = value;
  }
  public resetContactCenterInsightsCustomEndpoint() {
    this._contactCenterInsightsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactCenterInsightsCustomEndpointInput() {
    return this._contactCenterInsightsCustomEndpoint;
  }

  // container_analysis_custom_endpoint - computed: false, optional: true, required: false
  private _containerAnalysisCustomEndpoint?: string; 
  public get containerAnalysisCustomEndpoint() {
    return this._containerAnalysisCustomEndpoint;
  }
  public set containerAnalysisCustomEndpoint(value: string | undefined) {
    this._containerAnalysisCustomEndpoint = value;
  }
  public resetContainerAnalysisCustomEndpoint() {
    this._containerAnalysisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAnalysisCustomEndpointInput() {
    return this._containerAnalysisCustomEndpoint;
  }

  // container_attached_custom_endpoint - computed: false, optional: true, required: false
  private _containerAttachedCustomEndpoint?: string; 
  public get containerAttachedCustomEndpoint() {
    return this._containerAttachedCustomEndpoint;
  }
  public set containerAttachedCustomEndpoint(value: string | undefined) {
    this._containerAttachedCustomEndpoint = value;
  }
  public resetContainerAttachedCustomEndpoint() {
    this._containerAttachedCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAttachedCustomEndpointInput() {
    return this._containerAttachedCustomEndpoint;
  }

  // container_aws_custom_endpoint - computed: false, optional: true, required: false
  private _containerAwsCustomEndpoint?: string; 
  public get containerAwsCustomEndpoint() {
    return this._containerAwsCustomEndpoint;
  }
  public set containerAwsCustomEndpoint(value: string | undefined) {
    this._containerAwsCustomEndpoint = value;
  }
  public resetContainerAwsCustomEndpoint() {
    this._containerAwsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAwsCustomEndpointInput() {
    return this._containerAwsCustomEndpoint;
  }

  // container_azure_custom_endpoint - computed: false, optional: true, required: false
  private _containerAzureCustomEndpoint?: string; 
  public get containerAzureCustomEndpoint() {
    return this._containerAzureCustomEndpoint;
  }
  public set containerAzureCustomEndpoint(value: string | undefined) {
    this._containerAzureCustomEndpoint = value;
  }
  public resetContainerAzureCustomEndpoint() {
    this._containerAzureCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAzureCustomEndpointInput() {
    return this._containerAzureCustomEndpoint;
  }

  // container_custom_endpoint - computed: false, optional: true, required: false
  private _containerCustomEndpoint?: string; 
  public get containerCustomEndpoint() {
    return this._containerCustomEndpoint;
  }
  public set containerCustomEndpoint(value: string | undefined) {
    this._containerCustomEndpoint = value;
  }
  public resetContainerCustomEndpoint() {
    this._containerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCustomEndpointInput() {
    return this._containerCustomEndpoint;
  }

  // core_billing_custom_endpoint - computed: false, optional: true, required: false
  private _coreBillingCustomEndpoint?: string; 
  public get coreBillingCustomEndpoint() {
    return this._coreBillingCustomEndpoint;
  }
  public set coreBillingCustomEndpoint(value: string | undefined) {
    this._coreBillingCustomEndpoint = value;
  }
  public resetCoreBillingCustomEndpoint() {
    this._coreBillingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreBillingCustomEndpointInput() {
    return this._coreBillingCustomEndpoint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // data_catalog_custom_endpoint - computed: false, optional: true, required: false
  private _dataCatalogCustomEndpoint?: string; 
  public get dataCatalogCustomEndpoint() {
    return this._dataCatalogCustomEndpoint;
  }
  public set dataCatalogCustomEndpoint(value: string | undefined) {
    this._dataCatalogCustomEndpoint = value;
  }
  public resetDataCatalogCustomEndpoint() {
    this._dataCatalogCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogCustomEndpointInput() {
    return this._dataCatalogCustomEndpoint;
  }

  // data_fusion_custom_endpoint - computed: false, optional: true, required: false
  private _dataFusionCustomEndpoint?: string; 
  public get dataFusionCustomEndpoint() {
    return this._dataFusionCustomEndpoint;
  }
  public set dataFusionCustomEndpoint(value: string | undefined) {
    this._dataFusionCustomEndpoint = value;
  }
  public resetDataFusionCustomEndpoint() {
    this._dataFusionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFusionCustomEndpointInput() {
    return this._dataFusionCustomEndpoint;
  }

  // data_loss_prevention_custom_endpoint - computed: false, optional: true, required: false
  private _dataLossPreventionCustomEndpoint?: string; 
  public get dataLossPreventionCustomEndpoint() {
    return this._dataLossPreventionCustomEndpoint;
  }
  public set dataLossPreventionCustomEndpoint(value: string | undefined) {
    this._dataLossPreventionCustomEndpoint = value;
  }
  public resetDataLossPreventionCustomEndpoint() {
    this._dataLossPreventionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLossPreventionCustomEndpointInput() {
    return this._dataLossPreventionCustomEndpoint;
  }

  // data_pipeline_custom_endpoint - computed: false, optional: true, required: false
  private _dataPipelineCustomEndpoint?: string; 
  public get dataPipelineCustomEndpoint() {
    return this._dataPipelineCustomEndpoint;
  }
  public set dataPipelineCustomEndpoint(value: string | undefined) {
    this._dataPipelineCustomEndpoint = value;
  }
  public resetDataPipelineCustomEndpoint() {
    this._dataPipelineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPipelineCustomEndpointInput() {
    return this._dataPipelineCustomEndpoint;
  }

  // database_migration_service_custom_endpoint - computed: false, optional: true, required: false
  private _databaseMigrationServiceCustomEndpoint?: string; 
  public get databaseMigrationServiceCustomEndpoint() {
    return this._databaseMigrationServiceCustomEndpoint;
  }
  public set databaseMigrationServiceCustomEndpoint(value: string | undefined) {
    this._databaseMigrationServiceCustomEndpoint = value;
  }
  public resetDatabaseMigrationServiceCustomEndpoint() {
    this._databaseMigrationServiceCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseMigrationServiceCustomEndpointInput() {
    return this._databaseMigrationServiceCustomEndpoint;
  }

  // dataflow_custom_endpoint - computed: false, optional: true, required: false
  private _dataflowCustomEndpoint?: string; 
  public get dataflowCustomEndpoint() {
    return this._dataflowCustomEndpoint;
  }
  public set dataflowCustomEndpoint(value: string | undefined) {
    this._dataflowCustomEndpoint = value;
  }
  public resetDataflowCustomEndpoint() {
    this._dataflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowCustomEndpointInput() {
    return this._dataflowCustomEndpoint;
  }

  // dataplex_custom_endpoint - computed: false, optional: true, required: false
  private _dataplexCustomEndpoint?: string; 
  public get dataplexCustomEndpoint() {
    return this._dataplexCustomEndpoint;
  }
  public set dataplexCustomEndpoint(value: string | undefined) {
    this._dataplexCustomEndpoint = value;
  }
  public resetDataplexCustomEndpoint() {
    this._dataplexCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplexCustomEndpointInput() {
    return this._dataplexCustomEndpoint;
  }

  // dataproc_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocCustomEndpoint?: string; 
  public get dataprocCustomEndpoint() {
    return this._dataprocCustomEndpoint;
  }
  public set dataprocCustomEndpoint(value: string | undefined) {
    this._dataprocCustomEndpoint = value;
  }
  public resetDataprocCustomEndpoint() {
    this._dataprocCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocCustomEndpointInput() {
    return this._dataprocCustomEndpoint;
  }

  // dataproc_gdc_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocGdcCustomEndpoint?: string; 
  public get dataprocGdcCustomEndpoint() {
    return this._dataprocGdcCustomEndpoint;
  }
  public set dataprocGdcCustomEndpoint(value: string | undefined) {
    this._dataprocGdcCustomEndpoint = value;
  }
  public resetDataprocGdcCustomEndpoint() {
    this._dataprocGdcCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocGdcCustomEndpointInput() {
    return this._dataprocGdcCustomEndpoint;
  }

  // dataproc_metastore_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocMetastoreCustomEndpoint?: string; 
  public get dataprocMetastoreCustomEndpoint() {
    return this._dataprocMetastoreCustomEndpoint;
  }
  public set dataprocMetastoreCustomEndpoint(value: string | undefined) {
    this._dataprocMetastoreCustomEndpoint = value;
  }
  public resetDataprocMetastoreCustomEndpoint() {
    this._dataprocMetastoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetastoreCustomEndpointInput() {
    return this._dataprocMetastoreCustomEndpoint;
  }

  // datastream_custom_endpoint - computed: false, optional: true, required: false
  private _datastreamCustomEndpoint?: string; 
  public get datastreamCustomEndpoint() {
    return this._datastreamCustomEndpoint;
  }
  public set datastreamCustomEndpoint(value: string | undefined) {
    this._datastreamCustomEndpoint = value;
  }
  public resetDatastreamCustomEndpoint() {
    this._datastreamCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastreamCustomEndpointInput() {
    return this._datastreamCustomEndpoint;
  }

  // default_labels - computed: false, optional: true, required: false
  private _defaultLabels?: { [key: string]: string }; 
  public get defaultLabels() {
    return this._defaultLabels;
  }
  public set defaultLabels(value: { [key: string]: string } | undefined) {
    this._defaultLabels = value;
  }
  public resetDefaultLabels() {
    this._defaultLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLabelsInput() {
    return this._defaultLabels;
  }

  // deployment_manager_custom_endpoint - computed: false, optional: true, required: false
  private _deploymentManagerCustomEndpoint?: string; 
  public get deploymentManagerCustomEndpoint() {
    return this._deploymentManagerCustomEndpoint;
  }
  public set deploymentManagerCustomEndpoint(value: string | undefined) {
    this._deploymentManagerCustomEndpoint = value;
  }
  public resetDeploymentManagerCustomEndpoint() {
    this._deploymentManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentManagerCustomEndpointInput() {
    return this._deploymentManagerCustomEndpoint;
  }

  // developer_connect_custom_endpoint - computed: false, optional: true, required: false
  private _developerConnectCustomEndpoint?: string; 
  public get developerConnectCustomEndpoint() {
    return this._developerConnectCustomEndpoint;
  }
  public set developerConnectCustomEndpoint(value: string | undefined) {
    this._developerConnectCustomEndpoint = value;
  }
  public resetDeveloperConnectCustomEndpoint() {
    this._developerConnectCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerConnectCustomEndpointInput() {
    return this._developerConnectCustomEndpoint;
  }

  // dialogflow_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCustomEndpoint?: string; 
  public get dialogflowCustomEndpoint() {
    return this._dialogflowCustomEndpoint;
  }
  public set dialogflowCustomEndpoint(value: string | undefined) {
    this._dialogflowCustomEndpoint = value;
  }
  public resetDialogflowCustomEndpoint() {
    this._dialogflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCustomEndpointInput() {
    return this._dialogflowCustomEndpoint;
  }

  // dialogflow_cx_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCxCustomEndpoint?: string; 
  public get dialogflowCxCustomEndpoint() {
    return this._dialogflowCxCustomEndpoint;
  }
  public set dialogflowCxCustomEndpoint(value: string | undefined) {
    this._dialogflowCxCustomEndpoint = value;
  }
  public resetDialogflowCxCustomEndpoint() {
    this._dialogflowCxCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCxCustomEndpointInput() {
    return this._dialogflowCxCustomEndpoint;
  }

  // discovery_engine_custom_endpoint - computed: false, optional: true, required: false
  private _discoveryEngineCustomEndpoint?: string; 
  public get discoveryEngineCustomEndpoint() {
    return this._discoveryEngineCustomEndpoint;
  }
  public set discoveryEngineCustomEndpoint(value: string | undefined) {
    this._discoveryEngineCustomEndpoint = value;
  }
  public resetDiscoveryEngineCustomEndpoint() {
    this._discoveryEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEngineCustomEndpointInput() {
    return this._discoveryEngineCustomEndpoint;
  }

  // dns_custom_endpoint - computed: false, optional: true, required: false
  private _dnsCustomEndpoint?: string; 
  public get dnsCustomEndpoint() {
    return this._dnsCustomEndpoint;
  }
  public set dnsCustomEndpoint(value: string | undefined) {
    this._dnsCustomEndpoint = value;
  }
  public resetDnsCustomEndpoint() {
    this._dnsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomEndpointInput() {
    return this._dnsCustomEndpoint;
  }

  // document_ai_custom_endpoint - computed: false, optional: true, required: false
  private _documentAiCustomEndpoint?: string; 
  public get documentAiCustomEndpoint() {
    return this._documentAiCustomEndpoint;
  }
  public set documentAiCustomEndpoint(value: string | undefined) {
    this._documentAiCustomEndpoint = value;
  }
  public resetDocumentAiCustomEndpoint() {
    this._documentAiCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentAiCustomEndpointInput() {
    return this._documentAiCustomEndpoint;
  }

  // document_ai_warehouse_custom_endpoint - computed: false, optional: true, required: false
  private _documentAiWarehouseCustomEndpoint?: string; 
  public get documentAiWarehouseCustomEndpoint() {
    return this._documentAiWarehouseCustomEndpoint;
  }
  public set documentAiWarehouseCustomEndpoint(value: string | undefined) {
    this._documentAiWarehouseCustomEndpoint = value;
  }
  public resetDocumentAiWarehouseCustomEndpoint() {
    this._documentAiWarehouseCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentAiWarehouseCustomEndpointInput() {
    return this._documentAiWarehouseCustomEndpoint;
  }

  // edgecontainer_custom_endpoint - computed: false, optional: true, required: false
  private _edgecontainerCustomEndpoint?: string; 
  public get edgecontainerCustomEndpoint() {
    return this._edgecontainerCustomEndpoint;
  }
  public set edgecontainerCustomEndpoint(value: string | undefined) {
    this._edgecontainerCustomEndpoint = value;
  }
  public resetEdgecontainerCustomEndpoint() {
    this._edgecontainerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecontainerCustomEndpointInput() {
    return this._edgecontainerCustomEndpoint;
  }

  // edgenetwork_custom_endpoint - computed: false, optional: true, required: false
  private _edgenetworkCustomEndpoint?: string; 
  public get edgenetworkCustomEndpoint() {
    return this._edgenetworkCustomEndpoint;
  }
  public set edgenetworkCustomEndpoint(value: string | undefined) {
    this._edgenetworkCustomEndpoint = value;
  }
  public resetEdgenetworkCustomEndpoint() {
    this._edgenetworkCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgenetworkCustomEndpointInput() {
    return this._edgenetworkCustomEndpoint;
  }

  // essential_contacts_custom_endpoint - computed: false, optional: true, required: false
  private _essentialContactsCustomEndpoint?: string; 
  public get essentialContactsCustomEndpoint() {
    return this._essentialContactsCustomEndpoint;
  }
  public set essentialContactsCustomEndpoint(value: string | undefined) {
    this._essentialContactsCustomEndpoint = value;
  }
  public resetEssentialContactsCustomEndpoint() {
    this._essentialContactsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialContactsCustomEndpointInput() {
    return this._essentialContactsCustomEndpoint;
  }

  // eventarc_custom_endpoint - computed: false, optional: true, required: false
  private _eventarcCustomEndpoint?: string; 
  public get eventarcCustomEndpoint() {
    return this._eventarcCustomEndpoint;
  }
  public set eventarcCustomEndpoint(value: string | undefined) {
    this._eventarcCustomEndpoint = value;
  }
  public resetEventarcCustomEndpoint() {
    this._eventarcCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventarcCustomEndpointInput() {
    return this._eventarcCustomEndpoint;
  }

  // filestore_custom_endpoint - computed: false, optional: true, required: false
  private _filestoreCustomEndpoint?: string; 
  public get filestoreCustomEndpoint() {
    return this._filestoreCustomEndpoint;
  }
  public set filestoreCustomEndpoint(value: string | undefined) {
    this._filestoreCustomEndpoint = value;
  }
  public resetFilestoreCustomEndpoint() {
    this._filestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreCustomEndpointInput() {
    return this._filestoreCustomEndpoint;
  }

  // firebase_app_check_custom_endpoint - computed: false, optional: true, required: false
  private _firebaseAppCheckCustomEndpoint?: string; 
  public get firebaseAppCheckCustomEndpoint() {
    return this._firebaseAppCheckCustomEndpoint;
  }
  public set firebaseAppCheckCustomEndpoint(value: string | undefined) {
    this._firebaseAppCheckCustomEndpoint = value;
  }
  public resetFirebaseAppCheckCustomEndpoint() {
    this._firebaseAppCheckCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseAppCheckCustomEndpointInput() {
    return this._firebaseAppCheckCustomEndpoint;
  }

  // firebase_app_hosting_custom_endpoint - computed: false, optional: true, required: false
  private _firebaseAppHostingCustomEndpoint?: string; 
  public get firebaseAppHostingCustomEndpoint() {
    return this._firebaseAppHostingCustomEndpoint;
  }
  public set firebaseAppHostingCustomEndpoint(value: string | undefined) {
    this._firebaseAppHostingCustomEndpoint = value;
  }
  public resetFirebaseAppHostingCustomEndpoint() {
    this._firebaseAppHostingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseAppHostingCustomEndpointInput() {
    return this._firebaseAppHostingCustomEndpoint;
  }

  // firebase_data_connect_custom_endpoint - computed: false, optional: true, required: false
  private _firebaseDataConnectCustomEndpoint?: string; 
  public get firebaseDataConnectCustomEndpoint() {
    return this._firebaseDataConnectCustomEndpoint;
  }
  public set firebaseDataConnectCustomEndpoint(value: string | undefined) {
    this._firebaseDataConnectCustomEndpoint = value;
  }
  public resetFirebaseDataConnectCustomEndpoint() {
    this._firebaseDataConnectCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaseDataConnectCustomEndpointInput() {
    return this._firebaseDataConnectCustomEndpoint;
  }

  // firebaserules_custom_endpoint - computed: false, optional: true, required: false
  private _firebaserulesCustomEndpoint?: string; 
  public get firebaserulesCustomEndpoint() {
    return this._firebaserulesCustomEndpoint;
  }
  public set firebaserulesCustomEndpoint(value: string | undefined) {
    this._firebaserulesCustomEndpoint = value;
  }
  public resetFirebaserulesCustomEndpoint() {
    this._firebaserulesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaserulesCustomEndpointInput() {
    return this._firebaserulesCustomEndpoint;
  }

  // firestore_custom_endpoint - computed: false, optional: true, required: false
  private _firestoreCustomEndpoint?: string; 
  public get firestoreCustomEndpoint() {
    return this._firestoreCustomEndpoint;
  }
  public set firestoreCustomEndpoint(value: string | undefined) {
    this._firestoreCustomEndpoint = value;
  }
  public resetFirestoreCustomEndpoint() {
    this._firestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firestoreCustomEndpointInput() {
    return this._firestoreCustomEndpoint;
  }

  // gemini_custom_endpoint - computed: false, optional: true, required: false
  private _geminiCustomEndpoint?: string; 
  public get geminiCustomEndpoint() {
    return this._geminiCustomEndpoint;
  }
  public set geminiCustomEndpoint(value: string | undefined) {
    this._geminiCustomEndpoint = value;
  }
  public resetGeminiCustomEndpoint() {
    this._geminiCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiCustomEndpointInput() {
    return this._geminiCustomEndpoint;
  }

  // gke_backup_custom_endpoint - computed: false, optional: true, required: false
  private _gkeBackupCustomEndpoint?: string; 
  public get gkeBackupCustomEndpoint() {
    return this._gkeBackupCustomEndpoint;
  }
  public set gkeBackupCustomEndpoint(value: string | undefined) {
    this._gkeBackupCustomEndpoint = value;
  }
  public resetGkeBackupCustomEndpoint() {
    this._gkeBackupCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeBackupCustomEndpointInput() {
    return this._gkeBackupCustomEndpoint;
  }

  // gke_hub2_custom_endpoint - computed: false, optional: true, required: false
  private _gkeHub2CustomEndpoint?: string; 
  public get gkeHub2CustomEndpoint() {
    return this._gkeHub2CustomEndpoint;
  }
  public set gkeHub2CustomEndpoint(value: string | undefined) {
    this._gkeHub2CustomEndpoint = value;
  }
  public resetGkeHub2CustomEndpoint() {
    this._gkeHub2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeHub2CustomEndpointInput() {
    return this._gkeHub2CustomEndpoint;
  }

  // gke_hub_custom_endpoint - computed: false, optional: true, required: false
  private _gkeHubCustomEndpoint?: string; 
  public get gkeHubCustomEndpoint() {
    return this._gkeHubCustomEndpoint;
  }
  public set gkeHubCustomEndpoint(value: string | undefined) {
    this._gkeHubCustomEndpoint = value;
  }
  public resetGkeHubCustomEndpoint() {
    this._gkeHubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeHubCustomEndpointInput() {
    return this._gkeHubCustomEndpoint;
  }

  // gkeonprem_custom_endpoint - computed: false, optional: true, required: false
  private _gkeonpremCustomEndpoint?: string; 
  public get gkeonpremCustomEndpoint() {
    return this._gkeonpremCustomEndpoint;
  }
  public set gkeonpremCustomEndpoint(value: string | undefined) {
    this._gkeonpremCustomEndpoint = value;
  }
  public resetGkeonpremCustomEndpoint() {
    this._gkeonpremCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeonpremCustomEndpointInput() {
    return this._gkeonpremCustomEndpoint;
  }

  // healthcare_custom_endpoint - computed: false, optional: true, required: false
  private _healthcareCustomEndpoint?: string; 
  public get healthcareCustomEndpoint() {
    return this._healthcareCustomEndpoint;
  }
  public set healthcareCustomEndpoint(value: string | undefined) {
    this._healthcareCustomEndpoint = value;
  }
  public resetHealthcareCustomEndpoint() {
    this._healthcareCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcareCustomEndpointInput() {
    return this._healthcareCustomEndpoint;
  }

  // iam2_custom_endpoint - computed: false, optional: true, required: false
  private _iam2CustomEndpoint?: string; 
  public get iam2CustomEndpoint() {
    return this._iam2CustomEndpoint;
  }
  public set iam2CustomEndpoint(value: string | undefined) {
    this._iam2CustomEndpoint = value;
  }
  public resetIam2CustomEndpoint() {
    this._iam2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iam2CustomEndpointInput() {
    return this._iam2CustomEndpoint;
  }

  // iam3_custom_endpoint - computed: false, optional: true, required: false
  private _iam3CustomEndpoint?: string; 
  public get iam3CustomEndpoint() {
    return this._iam3CustomEndpoint;
  }
  public set iam3CustomEndpoint(value: string | undefined) {
    this._iam3CustomEndpoint = value;
  }
  public resetIam3CustomEndpoint() {
    this._iam3CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iam3CustomEndpointInput() {
    return this._iam3CustomEndpoint;
  }

  // iam_beta_custom_endpoint - computed: false, optional: true, required: false
  private _iamBetaCustomEndpoint?: string; 
  public get iamBetaCustomEndpoint() {
    return this._iamBetaCustomEndpoint;
  }
  public set iamBetaCustomEndpoint(value: string | undefined) {
    this._iamBetaCustomEndpoint = value;
  }
  public resetIamBetaCustomEndpoint() {
    this._iamBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamBetaCustomEndpointInput() {
    return this._iamBetaCustomEndpoint;
  }

  // iam_credentials_custom_endpoint - computed: false, optional: true, required: false
  private _iamCredentialsCustomEndpoint?: string; 
  public get iamCredentialsCustomEndpoint() {
    return this._iamCredentialsCustomEndpoint;
  }
  public set iamCredentialsCustomEndpoint(value: string | undefined) {
    this._iamCredentialsCustomEndpoint = value;
  }
  public resetIamCredentialsCustomEndpoint() {
    this._iamCredentialsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCredentialsCustomEndpointInput() {
    return this._iamCredentialsCustomEndpoint;
  }

  // iam_custom_endpoint - computed: false, optional: true, required: false
  private _iamCustomEndpoint?: string; 
  public get iamCustomEndpoint() {
    return this._iamCustomEndpoint;
  }
  public set iamCustomEndpoint(value: string | undefined) {
    this._iamCustomEndpoint = value;
  }
  public resetIamCustomEndpoint() {
    this._iamCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCustomEndpointInput() {
    return this._iamCustomEndpoint;
  }

  // iam_workforce_pool_custom_endpoint - computed: false, optional: true, required: false
  private _iamWorkforcePoolCustomEndpoint?: string; 
  public get iamWorkforcePoolCustomEndpoint() {
    return this._iamWorkforcePoolCustomEndpoint;
  }
  public set iamWorkforcePoolCustomEndpoint(value: string | undefined) {
    this._iamWorkforcePoolCustomEndpoint = value;
  }
  public resetIamWorkforcePoolCustomEndpoint() {
    this._iamWorkforcePoolCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamWorkforcePoolCustomEndpointInput() {
    return this._iamWorkforcePoolCustomEndpoint;
  }

  // iap_custom_endpoint - computed: false, optional: true, required: false
  private _iapCustomEndpoint?: string; 
  public get iapCustomEndpoint() {
    return this._iapCustomEndpoint;
  }
  public set iapCustomEndpoint(value: string | undefined) {
    this._iapCustomEndpoint = value;
  }
  public resetIapCustomEndpoint() {
    this._iapCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapCustomEndpointInput() {
    return this._iapCustomEndpoint;
  }

  // identity_platform_custom_endpoint - computed: false, optional: true, required: false
  private _identityPlatformCustomEndpoint?: string; 
  public get identityPlatformCustomEndpoint() {
    return this._identityPlatformCustomEndpoint;
  }
  public set identityPlatformCustomEndpoint(value: string | undefined) {
    this._identityPlatformCustomEndpoint = value;
  }
  public resetIdentityPlatformCustomEndpoint() {
    this._identityPlatformCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPlatformCustomEndpointInput() {
    return this._identityPlatformCustomEndpoint;
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: string; 
  public get impersonateServiceAccount() {
    return this._impersonateServiceAccount;
  }
  public set impersonateServiceAccount(value: string | undefined) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount;
  }

  // impersonate_service_account_delegates - computed: false, optional: true, required: false
  private _impersonateServiceAccountDelegates?: string[]; 
  public get impersonateServiceAccountDelegates() {
    return this._impersonateServiceAccountDelegates;
  }
  public set impersonateServiceAccountDelegates(value: string[] | undefined) {
    this._impersonateServiceAccountDelegates = value;
  }
  public resetImpersonateServiceAccountDelegates() {
    this._impersonateServiceAccountDelegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountDelegatesInput() {
    return this._impersonateServiceAccountDelegates;
  }

  // integration_connectors_custom_endpoint - computed: false, optional: true, required: false
  private _integrationConnectorsCustomEndpoint?: string; 
  public get integrationConnectorsCustomEndpoint() {
    return this._integrationConnectorsCustomEndpoint;
  }
  public set integrationConnectorsCustomEndpoint(value: string | undefined) {
    this._integrationConnectorsCustomEndpoint = value;
  }
  public resetIntegrationConnectorsCustomEndpoint() {
    this._integrationConnectorsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationConnectorsCustomEndpointInput() {
    return this._integrationConnectorsCustomEndpoint;
  }

  // integrations_custom_endpoint - computed: false, optional: true, required: false
  private _integrationsCustomEndpoint?: string; 
  public get integrationsCustomEndpoint() {
    return this._integrationsCustomEndpoint;
  }
  public set integrationsCustomEndpoint(value: string | undefined) {
    this._integrationsCustomEndpoint = value;
  }
  public resetIntegrationsCustomEndpoint() {
    this._integrationsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsCustomEndpointInput() {
    return this._integrationsCustomEndpoint;
  }

  // kms_custom_endpoint - computed: false, optional: true, required: false
  private _kmsCustomEndpoint?: string; 
  public get kmsCustomEndpoint() {
    return this._kmsCustomEndpoint;
  }
  public set kmsCustomEndpoint(value: string | undefined) {
    this._kmsCustomEndpoint = value;
  }
  public resetKmsCustomEndpoint() {
    this._kmsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsCustomEndpointInput() {
    return this._kmsCustomEndpoint;
  }

  // logging_custom_endpoint - computed: false, optional: true, required: false
  private _loggingCustomEndpoint?: string; 
  public get loggingCustomEndpoint() {
    return this._loggingCustomEndpoint;
  }
  public set loggingCustomEndpoint(value: string | undefined) {
    this._loggingCustomEndpoint = value;
  }
  public resetLoggingCustomEndpoint() {
    this._loggingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingCustomEndpointInput() {
    return this._loggingCustomEndpoint;
  }

  // looker_custom_endpoint - computed: false, optional: true, required: false
  private _lookerCustomEndpoint?: string; 
  public get lookerCustomEndpoint() {
    return this._lookerCustomEndpoint;
  }
  public set lookerCustomEndpoint(value: string | undefined) {
    this._lookerCustomEndpoint = value;
  }
  public resetLookerCustomEndpoint() {
    this._lookerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerCustomEndpointInput() {
    return this._lookerCustomEndpoint;
  }

  // lustre_custom_endpoint - computed: false, optional: true, required: false
  private _lustreCustomEndpoint?: string; 
  public get lustreCustomEndpoint() {
    return this._lustreCustomEndpoint;
  }
  public set lustreCustomEndpoint(value: string | undefined) {
    this._lustreCustomEndpoint = value;
  }
  public resetLustreCustomEndpoint() {
    this._lustreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreCustomEndpointInput() {
    return this._lustreCustomEndpoint;
  }

  // managed_kafka_custom_endpoint - computed: false, optional: true, required: false
  private _managedKafkaCustomEndpoint?: string; 
  public get managedKafkaCustomEndpoint() {
    return this._managedKafkaCustomEndpoint;
  }
  public set managedKafkaCustomEndpoint(value: string | undefined) {
    this._managedKafkaCustomEndpoint = value;
  }
  public resetManagedKafkaCustomEndpoint() {
    this._managedKafkaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKafkaCustomEndpointInput() {
    return this._managedKafkaCustomEndpoint;
  }

  // memcache_custom_endpoint - computed: false, optional: true, required: false
  private _memcacheCustomEndpoint?: string; 
  public get memcacheCustomEndpoint() {
    return this._memcacheCustomEndpoint;
  }
  public set memcacheCustomEndpoint(value: string | undefined) {
    this._memcacheCustomEndpoint = value;
  }
  public resetMemcacheCustomEndpoint() {
    this._memcacheCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheCustomEndpointInput() {
    return this._memcacheCustomEndpoint;
  }

  // memorystore_custom_endpoint - computed: false, optional: true, required: false
  private _memorystoreCustomEndpoint?: string; 
  public get memorystoreCustomEndpoint() {
    return this._memorystoreCustomEndpoint;
  }
  public set memorystoreCustomEndpoint(value: string | undefined) {
    this._memorystoreCustomEndpoint = value;
  }
  public resetMemorystoreCustomEndpoint() {
    this._memorystoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorystoreCustomEndpointInput() {
    return this._memorystoreCustomEndpoint;
  }

  // migration_center_custom_endpoint - computed: false, optional: true, required: false
  private _migrationCenterCustomEndpoint?: string; 
  public get migrationCenterCustomEndpoint() {
    return this._migrationCenterCustomEndpoint;
  }
  public set migrationCenterCustomEndpoint(value: string | undefined) {
    this._migrationCenterCustomEndpoint = value;
  }
  public resetMigrationCenterCustomEndpoint() {
    this._migrationCenterCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationCenterCustomEndpointInput() {
    return this._migrationCenterCustomEndpoint;
  }

  // ml_engine_custom_endpoint - computed: false, optional: true, required: false
  private _mlEngineCustomEndpoint?: string; 
  public get mlEngineCustomEndpoint() {
    return this._mlEngineCustomEndpoint;
  }
  public set mlEngineCustomEndpoint(value: string | undefined) {
    this._mlEngineCustomEndpoint = value;
  }
  public resetMlEngineCustomEndpoint() {
    this._mlEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlEngineCustomEndpointInput() {
    return this._mlEngineCustomEndpoint;
  }

  // model_armor_custom_endpoint - computed: false, optional: true, required: false
  private _modelArmorCustomEndpoint?: string; 
  public get modelArmorCustomEndpoint() {
    return this._modelArmorCustomEndpoint;
  }
  public set modelArmorCustomEndpoint(value: string | undefined) {
    this._modelArmorCustomEndpoint = value;
  }
  public resetModelArmorCustomEndpoint() {
    this._modelArmorCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArmorCustomEndpointInput() {
    return this._modelArmorCustomEndpoint;
  }

  // model_armor_global_custom_endpoint - computed: false, optional: true, required: false
  private _modelArmorGlobalCustomEndpoint?: string; 
  public get modelArmorGlobalCustomEndpoint() {
    return this._modelArmorGlobalCustomEndpoint;
  }
  public set modelArmorGlobalCustomEndpoint(value: string | undefined) {
    this._modelArmorGlobalCustomEndpoint = value;
  }
  public resetModelArmorGlobalCustomEndpoint() {
    this._modelArmorGlobalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArmorGlobalCustomEndpointInput() {
    return this._modelArmorGlobalCustomEndpoint;
  }

  // monitoring_custom_endpoint - computed: false, optional: true, required: false
  private _monitoringCustomEndpoint?: string; 
  public get monitoringCustomEndpoint() {
    return this._monitoringCustomEndpoint;
  }
  public set monitoringCustomEndpoint(value: string | undefined) {
    this._monitoringCustomEndpoint = value;
  }
  public resetMonitoringCustomEndpoint() {
    this._monitoringCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCustomEndpointInput() {
    return this._monitoringCustomEndpoint;
  }

  // netapp_custom_endpoint - computed: false, optional: true, required: false
  private _netappCustomEndpoint?: string; 
  public get netappCustomEndpoint() {
    return this._netappCustomEndpoint;
  }
  public set netappCustomEndpoint(value: string | undefined) {
    this._netappCustomEndpoint = value;
  }
  public resetNetappCustomEndpoint() {
    this._netappCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappCustomEndpointInput() {
    return this._netappCustomEndpoint;
  }

  // network_connectivity_custom_endpoint - computed: false, optional: true, required: false
  private _networkConnectivityCustomEndpoint?: string; 
  public get networkConnectivityCustomEndpoint() {
    return this._networkConnectivityCustomEndpoint;
  }
  public set networkConnectivityCustomEndpoint(value: string | undefined) {
    this._networkConnectivityCustomEndpoint = value;
  }
  public resetNetworkConnectivityCustomEndpoint() {
    this._networkConnectivityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityCustomEndpointInput() {
    return this._networkConnectivityCustomEndpoint;
  }

  // network_management_custom_endpoint - computed: false, optional: true, required: false
  private _networkManagementCustomEndpoint?: string; 
  public get networkManagementCustomEndpoint() {
    return this._networkManagementCustomEndpoint;
  }
  public set networkManagementCustomEndpoint(value: string | undefined) {
    this._networkManagementCustomEndpoint = value;
  }
  public resetNetworkManagementCustomEndpoint() {
    this._networkManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkManagementCustomEndpointInput() {
    return this._networkManagementCustomEndpoint;
  }

  // network_security_custom_endpoint - computed: false, optional: true, required: false
  private _networkSecurityCustomEndpoint?: string; 
  public get networkSecurityCustomEndpoint() {
    return this._networkSecurityCustomEndpoint;
  }
  public set networkSecurityCustomEndpoint(value: string | undefined) {
    this._networkSecurityCustomEndpoint = value;
  }
  public resetNetworkSecurityCustomEndpoint() {
    this._networkSecurityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityCustomEndpointInput() {
    return this._networkSecurityCustomEndpoint;
  }

  // network_services_custom_endpoint - computed: false, optional: true, required: false
  private _networkServicesCustomEndpoint?: string; 
  public get networkServicesCustomEndpoint() {
    return this._networkServicesCustomEndpoint;
  }
  public set networkServicesCustomEndpoint(value: string | undefined) {
    this._networkServicesCustomEndpoint = value;
  }
  public resetNetworkServicesCustomEndpoint() {
    this._networkServicesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServicesCustomEndpointInput() {
    return this._networkServicesCustomEndpoint;
  }

  // notebooks_custom_endpoint - computed: false, optional: true, required: false
  private _notebooksCustomEndpoint?: string; 
  public get notebooksCustomEndpoint() {
    return this._notebooksCustomEndpoint;
  }
  public set notebooksCustomEndpoint(value: string | undefined) {
    this._notebooksCustomEndpoint = value;
  }
  public resetNotebooksCustomEndpoint() {
    this._notebooksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksCustomEndpointInput() {
    return this._notebooksCustomEndpoint;
  }

  // oracle_database_custom_endpoint - computed: false, optional: true, required: false
  private _oracleDatabaseCustomEndpoint?: string; 
  public get oracleDatabaseCustomEndpoint() {
    return this._oracleDatabaseCustomEndpoint;
  }
  public set oracleDatabaseCustomEndpoint(value: string | undefined) {
    this._oracleDatabaseCustomEndpoint = value;
  }
  public resetOracleDatabaseCustomEndpoint() {
    this._oracleDatabaseCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDatabaseCustomEndpointInput() {
    return this._oracleDatabaseCustomEndpoint;
  }

  // org_policy_custom_endpoint - computed: false, optional: true, required: false
  private _orgPolicyCustomEndpoint?: string; 
  public get orgPolicyCustomEndpoint() {
    return this._orgPolicyCustomEndpoint;
  }
  public set orgPolicyCustomEndpoint(value: string | undefined) {
    this._orgPolicyCustomEndpoint = value;
  }
  public resetOrgPolicyCustomEndpoint() {
    this._orgPolicyCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgPolicyCustomEndpointInput() {
    return this._orgPolicyCustomEndpoint;
  }

  // os_config_custom_endpoint - computed: false, optional: true, required: false
  private _osConfigCustomEndpoint?: string; 
  public get osConfigCustomEndpoint() {
    return this._osConfigCustomEndpoint;
  }
  public set osConfigCustomEndpoint(value: string | undefined) {
    this._osConfigCustomEndpoint = value;
  }
  public resetOsConfigCustomEndpoint() {
    this._osConfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConfigCustomEndpointInput() {
    return this._osConfigCustomEndpoint;
  }

  // os_config_v2_custom_endpoint - computed: false, optional: true, required: false
  private _osConfigV2CustomEndpoint?: string; 
  public get osConfigV2CustomEndpoint() {
    return this._osConfigV2CustomEndpoint;
  }
  public set osConfigV2CustomEndpoint(value: string | undefined) {
    this._osConfigV2CustomEndpoint = value;
  }
  public resetOsConfigV2CustomEndpoint() {
    this._osConfigV2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConfigV2CustomEndpointInput() {
    return this._osConfigV2CustomEndpoint;
  }

  // os_login_custom_endpoint - computed: false, optional: true, required: false
  private _osLoginCustomEndpoint?: string; 
  public get osLoginCustomEndpoint() {
    return this._osLoginCustomEndpoint;
  }
  public set osLoginCustomEndpoint(value: string | undefined) {
    this._osLoginCustomEndpoint = value;
  }
  public resetOsLoginCustomEndpoint() {
    this._osLoginCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osLoginCustomEndpointInput() {
    return this._osLoginCustomEndpoint;
  }

  // parallelstore_custom_endpoint - computed: false, optional: true, required: false
  private _parallelstoreCustomEndpoint?: string; 
  public get parallelstoreCustomEndpoint() {
    return this._parallelstoreCustomEndpoint;
  }
  public set parallelstoreCustomEndpoint(value: string | undefined) {
    this._parallelstoreCustomEndpoint = value;
  }
  public resetParallelstoreCustomEndpoint() {
    this._parallelstoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelstoreCustomEndpointInput() {
    return this._parallelstoreCustomEndpoint;
  }

  // parameter_manager_custom_endpoint - computed: false, optional: true, required: false
  private _parameterManagerCustomEndpoint?: string; 
  public get parameterManagerCustomEndpoint() {
    return this._parameterManagerCustomEndpoint;
  }
  public set parameterManagerCustomEndpoint(value: string | undefined) {
    this._parameterManagerCustomEndpoint = value;
  }
  public resetParameterManagerCustomEndpoint() {
    this._parameterManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterManagerCustomEndpointInput() {
    return this._parameterManagerCustomEndpoint;
  }

  // parameter_manager_regional_custom_endpoint - computed: false, optional: true, required: false
  private _parameterManagerRegionalCustomEndpoint?: string; 
  public get parameterManagerRegionalCustomEndpoint() {
    return this._parameterManagerRegionalCustomEndpoint;
  }
  public set parameterManagerRegionalCustomEndpoint(value: string | undefined) {
    this._parameterManagerRegionalCustomEndpoint = value;
  }
  public resetParameterManagerRegionalCustomEndpoint() {
    this._parameterManagerRegionalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterManagerRegionalCustomEndpointInput() {
    return this._parameterManagerRegionalCustomEndpoint;
  }

  // privateca_custom_endpoint - computed: false, optional: true, required: false
  private _privatecaCustomEndpoint?: string; 
  public get privatecaCustomEndpoint() {
    return this._privatecaCustomEndpoint;
  }
  public set privatecaCustomEndpoint(value: string | undefined) {
    this._privatecaCustomEndpoint = value;
  }
  public resetPrivatecaCustomEndpoint() {
    this._privatecaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatecaCustomEndpointInput() {
    return this._privatecaCustomEndpoint;
  }

  // privileged_access_manager_custom_endpoint - computed: false, optional: true, required: false
  private _privilegedAccessManagerCustomEndpoint?: string; 
  public get privilegedAccessManagerCustomEndpoint() {
    return this._privilegedAccessManagerCustomEndpoint;
  }
  public set privilegedAccessManagerCustomEndpoint(value: string | undefined) {
    this._privilegedAccessManagerCustomEndpoint = value;
  }
  public resetPrivilegedAccessManagerCustomEndpoint() {
    this._privilegedAccessManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedAccessManagerCustomEndpointInput() {
    return this._privilegedAccessManagerCustomEndpoint;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // public_ca_custom_endpoint - computed: false, optional: true, required: false
  private _publicCaCustomEndpoint?: string; 
  public get publicCaCustomEndpoint() {
    return this._publicCaCustomEndpoint;
  }
  public set publicCaCustomEndpoint(value: string | undefined) {
    this._publicCaCustomEndpoint = value;
  }
  public resetPublicCaCustomEndpoint() {
    this._publicCaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCaCustomEndpointInput() {
    return this._publicCaCustomEndpoint;
  }

  // pubsub_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubCustomEndpoint?: string; 
  public get pubsubCustomEndpoint() {
    return this._pubsubCustomEndpoint;
  }
  public set pubsubCustomEndpoint(value: string | undefined) {
    this._pubsubCustomEndpoint = value;
  }
  public resetPubsubCustomEndpoint() {
    this._pubsubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubCustomEndpointInput() {
    return this._pubsubCustomEndpoint;
  }

  // pubsub_lite_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubLiteCustomEndpoint?: string; 
  public get pubsubLiteCustomEndpoint() {
    return this._pubsubLiteCustomEndpoint;
  }
  public set pubsubLiteCustomEndpoint(value: string | undefined) {
    this._pubsubLiteCustomEndpoint = value;
  }
  public resetPubsubLiteCustomEndpoint() {
    this._pubsubLiteCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubLiteCustomEndpointInput() {
    return this._pubsubLiteCustomEndpoint;
  }

  // recaptcha_enterprise_custom_endpoint - computed: false, optional: true, required: false
  private _recaptchaEnterpriseCustomEndpoint?: string; 
  public get recaptchaEnterpriseCustomEndpoint() {
    return this._recaptchaEnterpriseCustomEndpoint;
  }
  public set recaptchaEnterpriseCustomEndpoint(value: string | undefined) {
    this._recaptchaEnterpriseCustomEndpoint = value;
  }
  public resetRecaptchaEnterpriseCustomEndpoint() {
    this._recaptchaEnterpriseCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaEnterpriseCustomEndpointInput() {
    return this._recaptchaEnterpriseCustomEndpoint;
  }

  // redis_custom_endpoint - computed: false, optional: true, required: false
  private _redisCustomEndpoint?: string; 
  public get redisCustomEndpoint() {
    return this._redisCustomEndpoint;
  }
  public set redisCustomEndpoint(value: string | undefined) {
    this._redisCustomEndpoint = value;
  }
  public resetRedisCustomEndpoint() {
    this._redisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCustomEndpointInput() {
    return this._redisCustomEndpoint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_reason - computed: false, optional: true, required: false
  private _requestReason?: string; 
  public get requestReason() {
    return this._requestReason;
  }
  public set requestReason(value: string | undefined) {
    this._requestReason = value;
  }
  public resetRequestReason() {
    this._requestReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestReasonInput() {
    return this._requestReason;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerCustomEndpoint?: string; 
  public get resourceManagerCustomEndpoint() {
    return this._resourceManagerCustomEndpoint;
  }
  public set resourceManagerCustomEndpoint(value: string | undefined) {
    this._resourceManagerCustomEndpoint = value;
  }
  public resetResourceManagerCustomEndpoint() {
    this._resourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerCustomEndpointInput() {
    return this._resourceManagerCustomEndpoint;
  }

  // resource_manager_v3_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerV3CustomEndpoint?: string; 
  public get resourceManagerV3CustomEndpoint() {
    return this._resourceManagerV3CustomEndpoint;
  }
  public set resourceManagerV3CustomEndpoint(value: string | undefined) {
    this._resourceManagerV3CustomEndpoint = value;
  }
  public resetResourceManagerV3CustomEndpoint() {
    this._resourceManagerV3CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerV3CustomEndpointInput() {
    return this._resourceManagerV3CustomEndpoint;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_manager_custom_endpoint - computed: false, optional: true, required: false
  private _secretManagerCustomEndpoint?: string; 
  public get secretManagerCustomEndpoint() {
    return this._secretManagerCustomEndpoint;
  }
  public set secretManagerCustomEndpoint(value: string | undefined) {
    this._secretManagerCustomEndpoint = value;
  }
  public resetSecretManagerCustomEndpoint() {
    this._secretManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerCustomEndpointInput() {
    return this._secretManagerCustomEndpoint;
  }

  // secret_manager_regional_custom_endpoint - computed: false, optional: true, required: false
  private _secretManagerRegionalCustomEndpoint?: string; 
  public get secretManagerRegionalCustomEndpoint() {
    return this._secretManagerRegionalCustomEndpoint;
  }
  public set secretManagerRegionalCustomEndpoint(value: string | undefined) {
    this._secretManagerRegionalCustomEndpoint = value;
  }
  public resetSecretManagerRegionalCustomEndpoint() {
    this._secretManagerRegionalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerRegionalCustomEndpointInput() {
    return this._secretManagerRegionalCustomEndpoint;
  }

  // secure_source_manager_custom_endpoint - computed: false, optional: true, required: false
  private _secureSourceManagerCustomEndpoint?: string; 
  public get secureSourceManagerCustomEndpoint() {
    return this._secureSourceManagerCustomEndpoint;
  }
  public set secureSourceManagerCustomEndpoint(value: string | undefined) {
    this._secureSourceManagerCustomEndpoint = value;
  }
  public resetSecureSourceManagerCustomEndpoint() {
    this._secureSourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSourceManagerCustomEndpointInput() {
    return this._secureSourceManagerCustomEndpoint;
  }

  // security_center_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterCustomEndpoint?: string; 
  public get securityCenterCustomEndpoint() {
    return this._securityCenterCustomEndpoint;
  }
  public set securityCenterCustomEndpoint(value: string | undefined) {
    this._securityCenterCustomEndpoint = value;
  }
  public resetSecurityCenterCustomEndpoint() {
    this._securityCenterCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCenterCustomEndpointInput() {
    return this._securityCenterCustomEndpoint;
  }

  // security_center_management_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterManagementCustomEndpoint?: string; 
  public get securityCenterManagementCustomEndpoint() {
    return this._securityCenterManagementCustomEndpoint;
  }
  public set securityCenterManagementCustomEndpoint(value: string | undefined) {
    this._securityCenterManagementCustomEndpoint = value;
  }
  public resetSecurityCenterManagementCustomEndpoint() {
    this._securityCenterManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCenterManagementCustomEndpointInput() {
    return this._securityCenterManagementCustomEndpoint;
  }

  // security_center_v2_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterV2CustomEndpoint?: string; 
  public get securityCenterV2CustomEndpoint() {
    return this._securityCenterV2CustomEndpoint;
  }
  public set securityCenterV2CustomEndpoint(value: string | undefined) {
    this._securityCenterV2CustomEndpoint = value;
  }
  public resetSecurityCenterV2CustomEndpoint() {
    this._securityCenterV2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCenterV2CustomEndpointInput() {
    return this._securityCenterV2CustomEndpoint;
  }

  // securityposture_custom_endpoint - computed: false, optional: true, required: false
  private _securitypostureCustomEndpoint?: string; 
  public get securitypostureCustomEndpoint() {
    return this._securitypostureCustomEndpoint;
  }
  public set securitypostureCustomEndpoint(value: string | undefined) {
    this._securitypostureCustomEndpoint = value;
  }
  public resetSecuritypostureCustomEndpoint() {
    this._securitypostureCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitypostureCustomEndpointInput() {
    return this._securitypostureCustomEndpoint;
  }

  // service_management_custom_endpoint - computed: false, optional: true, required: false
  private _serviceManagementCustomEndpoint?: string; 
  public get serviceManagementCustomEndpoint() {
    return this._serviceManagementCustomEndpoint;
  }
  public set serviceManagementCustomEndpoint(value: string | undefined) {
    this._serviceManagementCustomEndpoint = value;
  }
  public resetServiceManagementCustomEndpoint() {
    this._serviceManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagementCustomEndpointInput() {
    return this._serviceManagementCustomEndpoint;
  }

  // service_networking_custom_endpoint - computed: false, optional: true, required: false
  private _serviceNetworkingCustomEndpoint?: string; 
  public get serviceNetworkingCustomEndpoint() {
    return this._serviceNetworkingCustomEndpoint;
  }
  public set serviceNetworkingCustomEndpoint(value: string | undefined) {
    this._serviceNetworkingCustomEndpoint = value;
  }
  public resetServiceNetworkingCustomEndpoint() {
    this._serviceNetworkingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingCustomEndpointInput() {
    return this._serviceNetworkingCustomEndpoint;
  }

  // service_usage_custom_endpoint - computed: false, optional: true, required: false
  private _serviceUsageCustomEndpoint?: string; 
  public get serviceUsageCustomEndpoint() {
    return this._serviceUsageCustomEndpoint;
  }
  public set serviceUsageCustomEndpoint(value: string | undefined) {
    this._serviceUsageCustomEndpoint = value;
  }
  public resetServiceUsageCustomEndpoint() {
    this._serviceUsageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUsageCustomEndpointInput() {
    return this._serviceUsageCustomEndpoint;
  }

  // site_verification_custom_endpoint - computed: false, optional: true, required: false
  private _siteVerificationCustomEndpoint?: string; 
  public get siteVerificationCustomEndpoint() {
    return this._siteVerificationCustomEndpoint;
  }
  public set siteVerificationCustomEndpoint(value: string | undefined) {
    this._siteVerificationCustomEndpoint = value;
  }
  public resetSiteVerificationCustomEndpoint() {
    this._siteVerificationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVerificationCustomEndpointInput() {
    return this._siteVerificationCustomEndpoint;
  }

  // source_repo_custom_endpoint - computed: false, optional: true, required: false
  private _sourceRepoCustomEndpoint?: string; 
  public get sourceRepoCustomEndpoint() {
    return this._sourceRepoCustomEndpoint;
  }
  public set sourceRepoCustomEndpoint(value: string | undefined) {
    this._sourceRepoCustomEndpoint = value;
  }
  public resetSourceRepoCustomEndpoint() {
    this._sourceRepoCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepoCustomEndpointInput() {
    return this._sourceRepoCustomEndpoint;
  }

  // spanner_custom_endpoint - computed: false, optional: true, required: false
  private _spannerCustomEndpoint?: string; 
  public get spannerCustomEndpoint() {
    return this._spannerCustomEndpoint;
  }
  public set spannerCustomEndpoint(value: string | undefined) {
    this._spannerCustomEndpoint = value;
  }
  public resetSpannerCustomEndpoint() {
    this._spannerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerCustomEndpointInput() {
    return this._spannerCustomEndpoint;
  }

  // sql_custom_endpoint - computed: false, optional: true, required: false
  private _sqlCustomEndpoint?: string; 
  public get sqlCustomEndpoint() {
    return this._sqlCustomEndpoint;
  }
  public set sqlCustomEndpoint(value: string | undefined) {
    this._sqlCustomEndpoint = value;
  }
  public resetSqlCustomEndpoint() {
    this._sqlCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCustomEndpointInput() {
    return this._sqlCustomEndpoint;
  }

  // storage_batch_operations_custom_endpoint - computed: false, optional: true, required: false
  private _storageBatchOperationsCustomEndpoint?: string; 
  public get storageBatchOperationsCustomEndpoint() {
    return this._storageBatchOperationsCustomEndpoint;
  }
  public set storageBatchOperationsCustomEndpoint(value: string | undefined) {
    this._storageBatchOperationsCustomEndpoint = value;
  }
  public resetStorageBatchOperationsCustomEndpoint() {
    this._storageBatchOperationsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBatchOperationsCustomEndpointInput() {
    return this._storageBatchOperationsCustomEndpoint;
  }

  // storage_control_custom_endpoint - computed: false, optional: true, required: false
  private _storageControlCustomEndpoint?: string; 
  public get storageControlCustomEndpoint() {
    return this._storageControlCustomEndpoint;
  }
  public set storageControlCustomEndpoint(value: string | undefined) {
    this._storageControlCustomEndpoint = value;
  }
  public resetStorageControlCustomEndpoint() {
    this._storageControlCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControlCustomEndpointInput() {
    return this._storageControlCustomEndpoint;
  }

  // storage_custom_endpoint - computed: false, optional: true, required: false
  private _storageCustomEndpoint?: string; 
  public get storageCustomEndpoint() {
    return this._storageCustomEndpoint;
  }
  public set storageCustomEndpoint(value: string | undefined) {
    this._storageCustomEndpoint = value;
  }
  public resetStorageCustomEndpoint() {
    this._storageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCustomEndpointInput() {
    return this._storageCustomEndpoint;
  }

  // storage_insights_custom_endpoint - computed: false, optional: true, required: false
  private _storageInsightsCustomEndpoint?: string; 
  public get storageInsightsCustomEndpoint() {
    return this._storageInsightsCustomEndpoint;
  }
  public set storageInsightsCustomEndpoint(value: string | undefined) {
    this._storageInsightsCustomEndpoint = value;
  }
  public resetStorageInsightsCustomEndpoint() {
    this._storageInsightsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInsightsCustomEndpointInput() {
    return this._storageInsightsCustomEndpoint;
  }

  // storage_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _storageTransferCustomEndpoint?: string; 
  public get storageTransferCustomEndpoint() {
    return this._storageTransferCustomEndpoint;
  }
  public set storageTransferCustomEndpoint(value: string | undefined) {
    this._storageTransferCustomEndpoint = value;
  }
  public resetStorageTransferCustomEndpoint() {
    this._storageTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTransferCustomEndpointInput() {
    return this._storageTransferCustomEndpoint;
  }

  // tags_custom_endpoint - computed: false, optional: true, required: false
  private _tagsCustomEndpoint?: string; 
  public get tagsCustomEndpoint() {
    return this._tagsCustomEndpoint;
  }
  public set tagsCustomEndpoint(value: string | undefined) {
    this._tagsCustomEndpoint = value;
  }
  public resetTagsCustomEndpoint() {
    this._tagsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsCustomEndpointInput() {
    return this._tagsCustomEndpoint;
  }

  // tags_location_custom_endpoint - computed: false, optional: true, required: false
  private _tagsLocationCustomEndpoint?: string; 
  public get tagsLocationCustomEndpoint() {
    return this._tagsLocationCustomEndpoint;
  }
  public set tagsLocationCustomEndpoint(value: string | undefined) {
    this._tagsLocationCustomEndpoint = value;
  }
  public resetTagsLocationCustomEndpoint() {
    this._tagsLocationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsLocationCustomEndpointInput() {
    return this._tagsLocationCustomEndpoint;
  }

  // terraform_attribution_label_addition_strategy - computed: false, optional: true, required: false
  private _terraformAttributionLabelAdditionStrategy?: string; 
  public get terraformAttributionLabelAdditionStrategy() {
    return this._terraformAttributionLabelAdditionStrategy;
  }
  public set terraformAttributionLabelAdditionStrategy(value: string | undefined) {
    this._terraformAttributionLabelAdditionStrategy = value;
  }
  public resetTerraformAttributionLabelAdditionStrategy() {
    this._terraformAttributionLabelAdditionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformAttributionLabelAdditionStrategyInput() {
    return this._terraformAttributionLabelAdditionStrategy;
  }

  // tpu_custom_endpoint - computed: false, optional: true, required: false
  private _tpuCustomEndpoint?: string; 
  public get tpuCustomEndpoint() {
    return this._tpuCustomEndpoint;
  }
  public set tpuCustomEndpoint(value: string | undefined) {
    this._tpuCustomEndpoint = value;
  }
  public resetTpuCustomEndpoint() {
    this._tpuCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuCustomEndpointInput() {
    return this._tpuCustomEndpoint;
  }

  // transcoder_custom_endpoint - computed: false, optional: true, required: false
  private _transcoderCustomEndpoint?: string; 
  public get transcoderCustomEndpoint() {
    return this._transcoderCustomEndpoint;
  }
  public set transcoderCustomEndpoint(value: string | undefined) {
    this._transcoderCustomEndpoint = value;
  }
  public resetTranscoderCustomEndpoint() {
    this._transcoderCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcoderCustomEndpointInput() {
    return this._transcoderCustomEndpoint;
  }

  // universe_domain - computed: false, optional: true, required: false
  private _universeDomain?: string; 
  public get universeDomain() {
    return this._universeDomain;
  }
  public set universeDomain(value: string | undefined) {
    this._universeDomain = value;
  }
  public resetUniverseDomain() {
    this._universeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universeDomainInput() {
    return this._universeDomain;
  }

  // user_project_override - computed: false, optional: true, required: false
  private _userProjectOverride?: boolean | cdktf.IResolvable; 
  public get userProjectOverride() {
    return this._userProjectOverride;
  }
  public set userProjectOverride(value: boolean | cdktf.IResolvable | undefined) {
    this._userProjectOverride = value;
  }
  public resetUserProjectOverride() {
    this._userProjectOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProjectOverrideInput() {
    return this._userProjectOverride;
  }

  // vertex_ai_custom_endpoint - computed: false, optional: true, required: false
  private _vertexAiCustomEndpoint?: string; 
  public get vertexAiCustomEndpoint() {
    return this._vertexAiCustomEndpoint;
  }
  public set vertexAiCustomEndpoint(value: string | undefined) {
    this._vertexAiCustomEndpoint = value;
  }
  public resetVertexAiCustomEndpoint() {
    this._vertexAiCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexAiCustomEndpointInput() {
    return this._vertexAiCustomEndpoint;
  }

  // vmwareengine_custom_endpoint - computed: false, optional: true, required: false
  private _vmwareengineCustomEndpoint?: string; 
  public get vmwareengineCustomEndpoint() {
    return this._vmwareengineCustomEndpoint;
  }
  public set vmwareengineCustomEndpoint(value: string | undefined) {
    this._vmwareengineCustomEndpoint = value;
  }
  public resetVmwareengineCustomEndpoint() {
    this._vmwareengineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareengineCustomEndpointInput() {
    return this._vmwareengineCustomEndpoint;
  }

  // vpc_access_custom_endpoint - computed: false, optional: true, required: false
  private _vpcAccessCustomEndpoint?: string; 
  public get vpcAccessCustomEndpoint() {
    return this._vpcAccessCustomEndpoint;
  }
  public set vpcAccessCustomEndpoint(value: string | undefined) {
    this._vpcAccessCustomEndpoint = value;
  }
  public resetVpcAccessCustomEndpoint() {
    this._vpcAccessCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessCustomEndpointInput() {
    return this._vpcAccessCustomEndpoint;
  }

  // workbench_custom_endpoint - computed: false, optional: true, required: false
  private _workbenchCustomEndpoint?: string; 
  public get workbenchCustomEndpoint() {
    return this._workbenchCustomEndpoint;
  }
  public set workbenchCustomEndpoint(value: string | undefined) {
    this._workbenchCustomEndpoint = value;
  }
  public resetWorkbenchCustomEndpoint() {
    this._workbenchCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workbenchCustomEndpointInput() {
    return this._workbenchCustomEndpoint;
  }

  // workflows_custom_endpoint - computed: false, optional: true, required: false
  private _workflowsCustomEndpoint?: string; 
  public get workflowsCustomEndpoint() {
    return this._workflowsCustomEndpoint;
  }
  public set workflowsCustomEndpoint(value: string | undefined) {
    this._workflowsCustomEndpoint = value;
  }
  public resetWorkflowsCustomEndpoint() {
    this._workflowsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsCustomEndpointInput() {
    return this._workflowsCustomEndpoint;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // batching - computed: false, optional: true, required: false
  private _batching?: GoogleProviderBatching[] | cdktf.IResolvable; 
  public get batching() {
    return this._batching;
  }
  public set batching(value: GoogleProviderBatching[] | cdktf.IResolvable | undefined) {
    this._batching = value;
  }
  public resetBatching() {
    this._batching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingInput() {
    return this._batching;
  }

  // external_credentials - computed: false, optional: true, required: false
  private _externalCredentials?: GoogleProviderExternalCredentials[] | cdktf.IResolvable; 
  public get externalCredentials() {
    return this._externalCredentials;
  }
  public set externalCredentials(value: GoogleProviderExternalCredentials[] | cdktf.IResolvable | undefined) {
    this._externalCredentials = value;
  }
  public resetExternalCredentials() {
    this._externalCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCredentialsInput() {
    return this._externalCredentials;
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
      add_terraform_attribution_label: cdktf.booleanToTerraform(this._addTerraformAttributionLabel),
      alloydb_custom_endpoint: cdktf.stringToTerraform(this._alloydbCustomEndpoint),
      apigee_custom_endpoint: cdktf.stringToTerraform(this._apigeeCustomEndpoint),
      apihub_custom_endpoint: cdktf.stringToTerraform(this._apihubCustomEndpoint),
      apikeys_custom_endpoint: cdktf.stringToTerraform(this._apikeysCustomEndpoint),
      app_engine_custom_endpoint: cdktf.stringToTerraform(this._appEngineCustomEndpoint),
      apphub_custom_endpoint: cdktf.stringToTerraform(this._apphubCustomEndpoint),
      artifact_registry_custom_endpoint: cdktf.stringToTerraform(this._artifactRegistryCustomEndpoint),
      assured_workloads_custom_endpoint: cdktf.stringToTerraform(this._assuredWorkloadsCustomEndpoint),
      backup_dr_custom_endpoint: cdktf.stringToTerraform(this._backupDrCustomEndpoint),
      beyondcorp_custom_endpoint: cdktf.stringToTerraform(this._beyondcorpCustomEndpoint),
      big_query_custom_endpoint: cdktf.stringToTerraform(this._bigQueryCustomEndpoint),
      biglake_custom_endpoint: cdktf.stringToTerraform(this._biglakeCustomEndpoint),
      bigquery_analytics_hub_custom_endpoint: cdktf.stringToTerraform(this._bigqueryAnalyticsHubCustomEndpoint),
      bigquery_connection_custom_endpoint: cdktf.stringToTerraform(this._bigqueryConnectionCustomEndpoint),
      bigquery_data_transfer_custom_endpoint: cdktf.stringToTerraform(this._bigqueryDataTransferCustomEndpoint),
      bigquery_datapolicy_custom_endpoint: cdktf.stringToTerraform(this._bigqueryDatapolicyCustomEndpoint),
      bigquery_reservation_custom_endpoint: cdktf.stringToTerraform(this._bigqueryReservationCustomEndpoint),
      bigtable_custom_endpoint: cdktf.stringToTerraform(this._bigtableCustomEndpoint),
      billing_custom_endpoint: cdktf.stringToTerraform(this._billingCustomEndpoint),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      binary_authorization_custom_endpoint: cdktf.stringToTerraform(this._binaryAuthorizationCustomEndpoint),
      blockchain_node_engine_custom_endpoint: cdktf.stringToTerraform(this._blockchainNodeEngineCustomEndpoint),
      certificate_manager_custom_endpoint: cdktf.stringToTerraform(this._certificateManagerCustomEndpoint),
      chronicle_custom_endpoint: cdktf.stringToTerraform(this._chronicleCustomEndpoint),
      cloud_asset_custom_endpoint: cdktf.stringToTerraform(this._cloudAssetCustomEndpoint),
      cloud_billing_custom_endpoint: cdktf.stringToTerraform(this._cloudBillingCustomEndpoint),
      cloud_build_custom_endpoint: cdktf.stringToTerraform(this._cloudBuildCustomEndpoint),
      cloud_functions_custom_endpoint: cdktf.stringToTerraform(this._cloudFunctionsCustomEndpoint),
      cloud_identity_custom_endpoint: cdktf.stringToTerraform(this._cloudIdentityCustomEndpoint),
      cloud_ids_custom_endpoint: cdktf.stringToTerraform(this._cloudIdsCustomEndpoint),
      cloud_quotas_custom_endpoint: cdktf.stringToTerraform(this._cloudQuotasCustomEndpoint),
      cloud_resource_manager_custom_endpoint: cdktf.stringToTerraform(this._cloudResourceManagerCustomEndpoint),
      cloud_run_custom_endpoint: cdktf.stringToTerraform(this._cloudRunCustomEndpoint),
      cloud_run_v2_custom_endpoint: cdktf.stringToTerraform(this._cloudRunV2CustomEndpoint),
      cloud_scheduler_custom_endpoint: cdktf.stringToTerraform(this._cloudSchedulerCustomEndpoint),
      cloud_tasks_custom_endpoint: cdktf.stringToTerraform(this._cloudTasksCustomEndpoint),
      cloudbuildv2_custom_endpoint: cdktf.stringToTerraform(this._cloudbuildv2CustomEndpoint),
      clouddeploy_custom_endpoint: cdktf.stringToTerraform(this._clouddeployCustomEndpoint),
      clouddomains_custom_endpoint: cdktf.stringToTerraform(this._clouddomainsCustomEndpoint),
      cloudfunctions2_custom_endpoint: cdktf.stringToTerraform(this._cloudfunctions2CustomEndpoint),
      colab_custom_endpoint: cdktf.stringToTerraform(this._colabCustomEndpoint),
      composer_custom_endpoint: cdktf.stringToTerraform(this._composerCustomEndpoint),
      compute_custom_endpoint: cdktf.stringToTerraform(this._computeCustomEndpoint),
      contact_center_insights_custom_endpoint: cdktf.stringToTerraform(this._contactCenterInsightsCustomEndpoint),
      container_analysis_custom_endpoint: cdktf.stringToTerraform(this._containerAnalysisCustomEndpoint),
      container_attached_custom_endpoint: cdktf.stringToTerraform(this._containerAttachedCustomEndpoint),
      container_aws_custom_endpoint: cdktf.stringToTerraform(this._containerAwsCustomEndpoint),
      container_azure_custom_endpoint: cdktf.stringToTerraform(this._containerAzureCustomEndpoint),
      container_custom_endpoint: cdktf.stringToTerraform(this._containerCustomEndpoint),
      core_billing_custom_endpoint: cdktf.stringToTerraform(this._coreBillingCustomEndpoint),
      credentials: cdktf.stringToTerraform(this._credentials),
      data_catalog_custom_endpoint: cdktf.stringToTerraform(this._dataCatalogCustomEndpoint),
      data_fusion_custom_endpoint: cdktf.stringToTerraform(this._dataFusionCustomEndpoint),
      data_loss_prevention_custom_endpoint: cdktf.stringToTerraform(this._dataLossPreventionCustomEndpoint),
      data_pipeline_custom_endpoint: cdktf.stringToTerraform(this._dataPipelineCustomEndpoint),
      database_migration_service_custom_endpoint: cdktf.stringToTerraform(this._databaseMigrationServiceCustomEndpoint),
      dataflow_custom_endpoint: cdktf.stringToTerraform(this._dataflowCustomEndpoint),
      dataplex_custom_endpoint: cdktf.stringToTerraform(this._dataplexCustomEndpoint),
      dataproc_custom_endpoint: cdktf.stringToTerraform(this._dataprocCustomEndpoint),
      dataproc_gdc_custom_endpoint: cdktf.stringToTerraform(this._dataprocGdcCustomEndpoint),
      dataproc_metastore_custom_endpoint: cdktf.stringToTerraform(this._dataprocMetastoreCustomEndpoint),
      datastream_custom_endpoint: cdktf.stringToTerraform(this._datastreamCustomEndpoint),
      default_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultLabels),
      deployment_manager_custom_endpoint: cdktf.stringToTerraform(this._deploymentManagerCustomEndpoint),
      developer_connect_custom_endpoint: cdktf.stringToTerraform(this._developerConnectCustomEndpoint),
      dialogflow_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCustomEndpoint),
      dialogflow_cx_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCxCustomEndpoint),
      discovery_engine_custom_endpoint: cdktf.stringToTerraform(this._discoveryEngineCustomEndpoint),
      dns_custom_endpoint: cdktf.stringToTerraform(this._dnsCustomEndpoint),
      document_ai_custom_endpoint: cdktf.stringToTerraform(this._documentAiCustomEndpoint),
      document_ai_warehouse_custom_endpoint: cdktf.stringToTerraform(this._documentAiWarehouseCustomEndpoint),
      edgecontainer_custom_endpoint: cdktf.stringToTerraform(this._edgecontainerCustomEndpoint),
      edgenetwork_custom_endpoint: cdktf.stringToTerraform(this._edgenetworkCustomEndpoint),
      essential_contacts_custom_endpoint: cdktf.stringToTerraform(this._essentialContactsCustomEndpoint),
      eventarc_custom_endpoint: cdktf.stringToTerraform(this._eventarcCustomEndpoint),
      filestore_custom_endpoint: cdktf.stringToTerraform(this._filestoreCustomEndpoint),
      firebase_app_check_custom_endpoint: cdktf.stringToTerraform(this._firebaseAppCheckCustomEndpoint),
      firebase_app_hosting_custom_endpoint: cdktf.stringToTerraform(this._firebaseAppHostingCustomEndpoint),
      firebase_data_connect_custom_endpoint: cdktf.stringToTerraform(this._firebaseDataConnectCustomEndpoint),
      firebaserules_custom_endpoint: cdktf.stringToTerraform(this._firebaserulesCustomEndpoint),
      firestore_custom_endpoint: cdktf.stringToTerraform(this._firestoreCustomEndpoint),
      gemini_custom_endpoint: cdktf.stringToTerraform(this._geminiCustomEndpoint),
      gke_backup_custom_endpoint: cdktf.stringToTerraform(this._gkeBackupCustomEndpoint),
      gke_hub2_custom_endpoint: cdktf.stringToTerraform(this._gkeHub2CustomEndpoint),
      gke_hub_custom_endpoint: cdktf.stringToTerraform(this._gkeHubCustomEndpoint),
      gkeonprem_custom_endpoint: cdktf.stringToTerraform(this._gkeonpremCustomEndpoint),
      healthcare_custom_endpoint: cdktf.stringToTerraform(this._healthcareCustomEndpoint),
      iam2_custom_endpoint: cdktf.stringToTerraform(this._iam2CustomEndpoint),
      iam3_custom_endpoint: cdktf.stringToTerraform(this._iam3CustomEndpoint),
      iam_beta_custom_endpoint: cdktf.stringToTerraform(this._iamBetaCustomEndpoint),
      iam_credentials_custom_endpoint: cdktf.stringToTerraform(this._iamCredentialsCustomEndpoint),
      iam_custom_endpoint: cdktf.stringToTerraform(this._iamCustomEndpoint),
      iam_workforce_pool_custom_endpoint: cdktf.stringToTerraform(this._iamWorkforcePoolCustomEndpoint),
      iap_custom_endpoint: cdktf.stringToTerraform(this._iapCustomEndpoint),
      identity_platform_custom_endpoint: cdktf.stringToTerraform(this._identityPlatformCustomEndpoint),
      impersonate_service_account: cdktf.stringToTerraform(this._impersonateServiceAccount),
      impersonate_service_account_delegates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._impersonateServiceAccountDelegates),
      integration_connectors_custom_endpoint: cdktf.stringToTerraform(this._integrationConnectorsCustomEndpoint),
      integrations_custom_endpoint: cdktf.stringToTerraform(this._integrationsCustomEndpoint),
      kms_custom_endpoint: cdktf.stringToTerraform(this._kmsCustomEndpoint),
      logging_custom_endpoint: cdktf.stringToTerraform(this._loggingCustomEndpoint),
      looker_custom_endpoint: cdktf.stringToTerraform(this._lookerCustomEndpoint),
      lustre_custom_endpoint: cdktf.stringToTerraform(this._lustreCustomEndpoint),
      managed_kafka_custom_endpoint: cdktf.stringToTerraform(this._managedKafkaCustomEndpoint),
      memcache_custom_endpoint: cdktf.stringToTerraform(this._memcacheCustomEndpoint),
      memorystore_custom_endpoint: cdktf.stringToTerraform(this._memorystoreCustomEndpoint),
      migration_center_custom_endpoint: cdktf.stringToTerraform(this._migrationCenterCustomEndpoint),
      ml_engine_custom_endpoint: cdktf.stringToTerraform(this._mlEngineCustomEndpoint),
      model_armor_custom_endpoint: cdktf.stringToTerraform(this._modelArmorCustomEndpoint),
      model_armor_global_custom_endpoint: cdktf.stringToTerraform(this._modelArmorGlobalCustomEndpoint),
      monitoring_custom_endpoint: cdktf.stringToTerraform(this._monitoringCustomEndpoint),
      netapp_custom_endpoint: cdktf.stringToTerraform(this._netappCustomEndpoint),
      network_connectivity_custom_endpoint: cdktf.stringToTerraform(this._networkConnectivityCustomEndpoint),
      network_management_custom_endpoint: cdktf.stringToTerraform(this._networkManagementCustomEndpoint),
      network_security_custom_endpoint: cdktf.stringToTerraform(this._networkSecurityCustomEndpoint),
      network_services_custom_endpoint: cdktf.stringToTerraform(this._networkServicesCustomEndpoint),
      notebooks_custom_endpoint: cdktf.stringToTerraform(this._notebooksCustomEndpoint),
      oracle_database_custom_endpoint: cdktf.stringToTerraform(this._oracleDatabaseCustomEndpoint),
      org_policy_custom_endpoint: cdktf.stringToTerraform(this._orgPolicyCustomEndpoint),
      os_config_custom_endpoint: cdktf.stringToTerraform(this._osConfigCustomEndpoint),
      os_config_v2_custom_endpoint: cdktf.stringToTerraform(this._osConfigV2CustomEndpoint),
      os_login_custom_endpoint: cdktf.stringToTerraform(this._osLoginCustomEndpoint),
      parallelstore_custom_endpoint: cdktf.stringToTerraform(this._parallelstoreCustomEndpoint),
      parameter_manager_custom_endpoint: cdktf.stringToTerraform(this._parameterManagerCustomEndpoint),
      parameter_manager_regional_custom_endpoint: cdktf.stringToTerraform(this._parameterManagerRegionalCustomEndpoint),
      privateca_custom_endpoint: cdktf.stringToTerraform(this._privatecaCustomEndpoint),
      privileged_access_manager_custom_endpoint: cdktf.stringToTerraform(this._privilegedAccessManagerCustomEndpoint),
      project: cdktf.stringToTerraform(this._project),
      public_ca_custom_endpoint: cdktf.stringToTerraform(this._publicCaCustomEndpoint),
      pubsub_custom_endpoint: cdktf.stringToTerraform(this._pubsubCustomEndpoint),
      pubsub_lite_custom_endpoint: cdktf.stringToTerraform(this._pubsubLiteCustomEndpoint),
      recaptcha_enterprise_custom_endpoint: cdktf.stringToTerraform(this._recaptchaEnterpriseCustomEndpoint),
      redis_custom_endpoint: cdktf.stringToTerraform(this._redisCustomEndpoint),
      region: cdktf.stringToTerraform(this._region),
      request_reason: cdktf.stringToTerraform(this._requestReason),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      resource_manager_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerCustomEndpoint),
      resource_manager_v3_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerV3CustomEndpoint),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      secret_manager_custom_endpoint: cdktf.stringToTerraform(this._secretManagerCustomEndpoint),
      secret_manager_regional_custom_endpoint: cdktf.stringToTerraform(this._secretManagerRegionalCustomEndpoint),
      secure_source_manager_custom_endpoint: cdktf.stringToTerraform(this._secureSourceManagerCustomEndpoint),
      security_center_custom_endpoint: cdktf.stringToTerraform(this._securityCenterCustomEndpoint),
      security_center_management_custom_endpoint: cdktf.stringToTerraform(this._securityCenterManagementCustomEndpoint),
      security_center_v2_custom_endpoint: cdktf.stringToTerraform(this._securityCenterV2CustomEndpoint),
      securityposture_custom_endpoint: cdktf.stringToTerraform(this._securitypostureCustomEndpoint),
      service_management_custom_endpoint: cdktf.stringToTerraform(this._serviceManagementCustomEndpoint),
      service_networking_custom_endpoint: cdktf.stringToTerraform(this._serviceNetworkingCustomEndpoint),
      service_usage_custom_endpoint: cdktf.stringToTerraform(this._serviceUsageCustomEndpoint),
      site_verification_custom_endpoint: cdktf.stringToTerraform(this._siteVerificationCustomEndpoint),
      source_repo_custom_endpoint: cdktf.stringToTerraform(this._sourceRepoCustomEndpoint),
      spanner_custom_endpoint: cdktf.stringToTerraform(this._spannerCustomEndpoint),
      sql_custom_endpoint: cdktf.stringToTerraform(this._sqlCustomEndpoint),
      storage_batch_operations_custom_endpoint: cdktf.stringToTerraform(this._storageBatchOperationsCustomEndpoint),
      storage_control_custom_endpoint: cdktf.stringToTerraform(this._storageControlCustomEndpoint),
      storage_custom_endpoint: cdktf.stringToTerraform(this._storageCustomEndpoint),
      storage_insights_custom_endpoint: cdktf.stringToTerraform(this._storageInsightsCustomEndpoint),
      storage_transfer_custom_endpoint: cdktf.stringToTerraform(this._storageTransferCustomEndpoint),
      tags_custom_endpoint: cdktf.stringToTerraform(this._tagsCustomEndpoint),
      tags_location_custom_endpoint: cdktf.stringToTerraform(this._tagsLocationCustomEndpoint),
      terraform_attribution_label_addition_strategy: cdktf.stringToTerraform(this._terraformAttributionLabelAdditionStrategy),
      tpu_custom_endpoint: cdktf.stringToTerraform(this._tpuCustomEndpoint),
      transcoder_custom_endpoint: cdktf.stringToTerraform(this._transcoderCustomEndpoint),
      universe_domain: cdktf.stringToTerraform(this._universeDomain),
      user_project_override: cdktf.booleanToTerraform(this._userProjectOverride),
      vertex_ai_custom_endpoint: cdktf.stringToTerraform(this._vertexAiCustomEndpoint),
      vmwareengine_custom_endpoint: cdktf.stringToTerraform(this._vmwareengineCustomEndpoint),
      vpc_access_custom_endpoint: cdktf.stringToTerraform(this._vpcAccessCustomEndpoint),
      workbench_custom_endpoint: cdktf.stringToTerraform(this._workbenchCustomEndpoint),
      workflows_custom_endpoint: cdktf.stringToTerraform(this._workflowsCustomEndpoint),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
      batching: cdktf.listMapper(googleProviderBatchingToTerraform, true)(this._batching),
      external_credentials: cdktf.listMapper(googleProviderExternalCredentialsToTerraform, true)(this._externalCredentials),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_approval_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._accessApprovalCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_context_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._accessContextManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._activeDirectoryCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_terraform_attribution_label: {
        value: cdktf.booleanToHclTerraform(this._addTerraformAttributionLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alloydb_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._alloydbCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apigee_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._apigeeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apihub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._apihubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apikeys_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._apikeysCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_engine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._appEngineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apphub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._apphubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_registry_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._artifactRegistryCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assured_workloads_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._assuredWorkloadsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_dr_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._backupDrCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beyondcorp_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._beyondcorpCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      big_query_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigQueryCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biglake_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._biglakeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_analytics_hub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryAnalyticsHubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_connection_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryConnectionCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_data_transfer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryDataTransferCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_datapolicy_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryDatapolicyCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_reservation_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryReservationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigtable_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigtableCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._billingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_project: {
        value: cdktf.stringToHclTerraform(this._billingProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_authorization_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._binaryAuthorizationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blockchain_node_engine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._blockchainNodeEngineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._certificateManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chronicle_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._chronicleCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_asset_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudAssetCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_billing_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudBillingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_build_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudBuildCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_functions_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudFunctionsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_identity_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudIdentityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ids_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudIdsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_quotas_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudQuotasCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_resource_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudResourceManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_run_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudRunCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_run_v2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudRunV2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_scheduler_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudSchedulerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_tasks_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudTasksCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudbuildv2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudbuildv2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clouddeploy_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._clouddeployCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clouddomains_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._clouddomainsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudfunctions2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudfunctions2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      colab_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._colabCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      composer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._composerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._computeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_center_insights_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._contactCenterInsightsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_analysis_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAnalysisCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_attached_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAttachedCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_aws_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAwsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_azure_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAzureCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_billing_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._coreBillingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_catalog_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataCatalogCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_fusion_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataFusionCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_loss_prevention_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataLossPreventionCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_pipeline_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataPipelineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_migration_service_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._databaseMigrationServiceCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataflow_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataflowCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataplex_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataplexCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataproc_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataprocCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataproc_gdc_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataprocGdcCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataproc_metastore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataprocMetastoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastream_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._datastreamCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deployment_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._deploymentManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      developer_connect_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._developerConnectCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialogflow_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dialogflowCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialogflow_cx_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dialogflowCxCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_engine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._discoveryEngineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dnsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_ai_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._documentAiCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_ai_warehouse_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._documentAiWarehouseCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecontainer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._edgecontainerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgenetwork_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._edgenetworkCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      essential_contacts_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._essentialContactsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventarc_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._eventarcCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filestore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._filestoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firebase_app_check_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firebaseAppCheckCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firebase_app_hosting_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firebaseAppHostingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firebase_data_connect_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firebaseDataConnectCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firebaserules_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firebaserulesCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firestore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firestoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gemini_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._geminiCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_backup_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeBackupCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_hub2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeHub2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_hub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeHubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gkeonprem_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeonpremCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcare_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._healthcareCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iam2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam3_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iam3CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_beta_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamBetaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_credentials_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamCredentialsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_workforce_pool_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamWorkforcePoolCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iap_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iapCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_platform_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._identityPlatformCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonate_service_account: {
        value: cdktf.stringToHclTerraform(this._impersonateServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonate_service_account_delegates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._impersonateServiceAccountDelegates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      integration_connectors_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._integrationConnectorsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integrations_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._integrationsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._kmsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._loggingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      looker_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._lookerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lustre_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._lustreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_kafka_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._managedKafkaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memcache_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._memcacheCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memorystore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._memorystoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_center_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._migrationCenterCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ml_engine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._mlEngineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_armor_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._modelArmorCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_armor_global_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._modelArmorGlobalCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._monitoringCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netapp_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._netappCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_connectivity_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkConnectivityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_management_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkManagementCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkSecurityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_services_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkServicesCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebooks_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._notebooksCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_database_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._oracleDatabaseCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_policy_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._orgPolicyCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_config_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._osConfigCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_config_v2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._osConfigV2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_login_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._osLoginCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallelstore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._parallelstoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._parameterManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_manager_regional_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._parameterManagerRegionalCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privateca_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._privatecaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileged_access_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._privilegedAccessManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ca_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._publicCaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._pubsubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_lite_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._pubsubLiteCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recaptcha_enterprise_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._recaptchaEnterpriseCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._redisCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_reason: {
        value: cdktf.stringToHclTerraform(this._requestReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.stringToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_v3_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagerV3CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secret_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._secretManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_manager_regional_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._secretManagerRegionalCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_source_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._secureSourceManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_center_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._securityCenterCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_center_management_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._securityCenterManagementCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_center_v2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._securityCenterV2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      securityposture_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._securitypostureCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_management_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceManagementCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_networking_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceNetworkingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_usage_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceUsageCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_verification_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._siteVerificationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_repo_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._sourceRepoCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spanner_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._spannerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._sqlCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_batch_operations_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageBatchOperationsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_control_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageControlCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_insights_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageInsightsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_transfer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageTransferCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tagsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags_location_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tagsLocationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_attribution_label_addition_strategy: {
        value: cdktf.stringToHclTerraform(this._terraformAttributionLabelAdditionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpu_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tpuCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transcoder_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._transcoderCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      universe_domain: {
        value: cdktf.stringToHclTerraform(this._universeDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_project_override: {
        value: cdktf.booleanToHclTerraform(this._userProjectOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vertex_ai_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._vertexAiCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmwareengine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._vmwareengineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_access_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._vpcAccessCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workbench_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._workbenchCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflows_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._workflowsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batching: {
        value: cdktf.listMapperHcl(googleProviderBatchingToHclTerraform, true)(this._batching),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleProviderBatchingList",
      },
      external_credentials: {
        value: cdktf.listMapperHcl(googleProviderExternalCredentialsToHclTerraform, true)(this._externalCredentials),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleProviderExternalCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
