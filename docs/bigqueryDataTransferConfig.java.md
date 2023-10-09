# `google_bigquery_data_transfer_config`

Refer to the Terraform Registory for docs: [`google_bigquery_data_transfer_config`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config).

# `bigqueryDataTransferConfig` Submodule <a name="`bigqueryDataTransferConfig` Submodule" id="@cdktf/provider-google.bigqueryDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferConfig <a name="BigqueryDataTransferConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config google_bigquery_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfig;

BigqueryDataTransferConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dataSourceId(java.lang.String)
    .displayName(java.lang.String)
    .params(java.util.Map<java.lang.String, java.lang.String>)
//  .dataRefreshWindowDays(java.lang.Number)
//  .destinationDatasetId(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .emailPreferences(BigqueryDataTransferConfigEmailPreferences)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .notificationPubsubTopic(java.lang.String)
//  .project(java.lang.String)
//  .schedule(java.lang.String)
//  .scheduleOptions(BigqueryDataTransferConfigScheduleOptions)
//  .sensitiveParams(BigqueryDataTransferConfigSensitiveParams)
//  .serviceAccountName(java.lang.String)
//  .timeouts(BigqueryDataTransferConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>java.lang.Number</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.destinationDatasetId">destinationDatasetId</a></code> | <code>java.lang.String</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>java.lang.String</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | Service account email. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#data_source_id BigqueryDataTransferConfig#data_source_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#display_name BigqueryDataTransferConfig#display_name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.params"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#params BigqueryDataTransferConfig#params}

---

##### `dataRefreshWindowDays`<sup>Optional</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataRefreshWindowDays"></a>

- *Type:* java.lang.Number

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#data_refresh_window_days BigqueryDataTransferConfig#data_refresh_window_days}

---

##### `destinationDatasetId`<sup>Optional</sup> <a name="destinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.destinationDatasetId"></a>

- *Type:* java.lang.String

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#destination_dataset_id BigqueryDataTransferConfig#destination_dataset_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#disabled BigqueryDataTransferConfig#disabled}

---

##### `emailPreferences`<sup>Optional</sup> <a name="emailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.emailPreferences"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#email_preferences BigqueryDataTransferConfig#email_preferences}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#location BigqueryDataTransferConfig#location}

---

##### `notificationPubsubTopic`<sup>Optional</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.notificationPubsubTopic"></a>

- *Type:* java.lang.String

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#notification_pubsub_topic BigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#schedule BigqueryDataTransferConfig#schedule}

---

##### `scheduleOptions`<sup>Optional</sup> <a name="scheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scheduleOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#schedule_options BigqueryDataTransferConfig#schedule_options}

---

##### `sensitiveParams`<sup>Optional</sup> <a name="sensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.sensitiveParams"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#sensitive_params BigqueryDataTransferConfig#sensitive_params}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.serviceAccountName"></a>

- *Type:* java.lang.String

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#service_account_name BigqueryDataTransferConfig#service_account_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#timeouts BigqueryDataTransferConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences">putEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions">putScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams">putSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays">resetDataRefreshWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId">resetDestinationDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences">resetEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic">resetNotificationPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions">resetScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams">resetSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName">resetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEmailPreferences` <a name="putEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences"></a>

```java
public void putEmailPreferences(BigqueryDataTransferConfigEmailPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `putScheduleOptions` <a name="putScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions"></a>

```java
public void putScheduleOptions(BigqueryDataTransferConfigScheduleOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `putSensitiveParams` <a name="putSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams"></a>

```java
public void putSensitiveParams(BigqueryDataTransferConfigSensitiveParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts"></a>

```java
public void putTimeouts(BigqueryDataTransferConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---

##### `resetDataRefreshWindowDays` <a name="resetDataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays"></a>

```java
public void resetDataRefreshWindowDays()
```

##### `resetDestinationDatasetId` <a name="resetDestinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId"></a>

```java
public void resetDestinationDatasetId()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEmailPreferences` <a name="resetEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences"></a>

```java
public void resetEmailPreferences()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetNotificationPubsubTopic` <a name="resetNotificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic"></a>

```java
public void resetNotificationPubsubTopic()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetScheduleOptions` <a name="resetScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions"></a>

```java
public void resetScheduleOptions()
```

##### `resetSensitiveParams` <a name="resetSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams"></a>

```java
public void resetSensitiveParams()
```

##### `resetServiceAccountName` <a name="resetServiceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName"></a>

```java
public void resetServiceAccountName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfig;

BigqueryDataTransferConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfig;

BigqueryDataTransferConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfig;

BigqueryDataTransferConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput">dataRefreshWindowDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput">destinationDatasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput">emailPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput">notificationPubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput">paramsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput">scheduleOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput">sensitiveParamsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId">destinationDatasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailPreferences`<sup>Required</sup> <a name="emailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences"></a>

```java
public BigqueryDataTransferConfigEmailPreferencesOutputReference getEmailPreferences();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scheduleOptions`<sup>Required</sup> <a name="scheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions"></a>

```java
public BigqueryDataTransferConfigScheduleOptionsOutputReference getScheduleOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a>

---

##### `sensitiveParams`<sup>Required</sup> <a name="sensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams"></a>

```java
public BigqueryDataTransferConfigSensitiveParamsOutputReference getSensitiveParams();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts"></a>

```java
public BigqueryDataTransferConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a>

---

##### `dataRefreshWindowDaysInput`<sup>Optional</sup> <a name="dataRefreshWindowDaysInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput"></a>

```java
public java.lang.Number getDataRefreshWindowDaysInput();
```

- *Type:* java.lang.Number

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `destinationDatasetIdInput`<sup>Optional</sup> <a name="destinationDatasetIdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput"></a>

```java
public java.lang.String getDestinationDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailPreferencesInput`<sup>Optional</sup> <a name="emailPreferencesInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput"></a>

```java
public BigqueryDataTransferConfigEmailPreferences getEmailPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `notificationPubsubTopicInput`<sup>Optional</sup> <a name="notificationPubsubTopicInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput"></a>

```java
public java.lang.String getNotificationPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `scheduleOptionsInput`<sup>Optional</sup> <a name="scheduleOptionsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput"></a>

```java
public BigqueryDataTransferConfigScheduleOptions getScheduleOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `sensitiveParamsInput`<sup>Optional</sup> <a name="sensitiveParamsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput"></a>

```java
public BigqueryDataTransferConfigSensitiveParams getSensitiveParamsInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput"></a>

```java
public java.lang.String getServiceAccountNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---

##### `dataRefreshWindowDays`<sup>Required</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays"></a>

```java
public java.lang.Number getDataRefreshWindowDays();
```

- *Type:* java.lang.Number

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `destinationDatasetId`<sup>Required</sup> <a name="destinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId"></a>

```java
public java.lang.String getDestinationDatasetId();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `notificationPubsubTopic`<sup>Required</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic"></a>

```java
public java.lang.String getNotificationPubsubTopic();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName"></a>

```java
public java.lang.String getServiceAccountName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferConfigConfig <a name="BigqueryDataTransferConfigConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigConfig;

BigqueryDataTransferConfigConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dataSourceId(java.lang.String)
    .displayName(java.lang.String)
    .params(java.util.Map<java.lang.String, java.lang.String>)
//  .dataRefreshWindowDays(java.lang.Number)
//  .destinationDatasetId(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .emailPreferences(BigqueryDataTransferConfigEmailPreferences)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .notificationPubsubTopic(java.lang.String)
//  .project(java.lang.String)
//  .schedule(java.lang.String)
//  .scheduleOptions(BigqueryDataTransferConfigScheduleOptions)
//  .sensitiveParams(BigqueryDataTransferConfigSensitiveParams)
//  .serviceAccountName(java.lang.String)
//  .timeouts(BigqueryDataTransferConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>java.lang.Number</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId">destinationDatasetId</a></code> | <code>java.lang.String</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>java.lang.String</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | Service account email. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#data_source_id BigqueryDataTransferConfig#data_source_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#display_name BigqueryDataTransferConfig#display_name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#params BigqueryDataTransferConfig#params}

---

##### `dataRefreshWindowDays`<sup>Optional</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays"></a>

```java
public java.lang.Number getDataRefreshWindowDays();
```

- *Type:* java.lang.Number

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#data_refresh_window_days BigqueryDataTransferConfig#data_refresh_window_days}

---

##### `destinationDatasetId`<sup>Optional</sup> <a name="destinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId"></a>

```java
public java.lang.String getDestinationDatasetId();
```

- *Type:* java.lang.String

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#destination_dataset_id BigqueryDataTransferConfig#destination_dataset_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#disabled BigqueryDataTransferConfig#disabled}

---

##### `emailPreferences`<sup>Optional</sup> <a name="emailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences"></a>

```java
public BigqueryDataTransferConfigEmailPreferences getEmailPreferences();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#email_preferences BigqueryDataTransferConfig#email_preferences}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#location BigqueryDataTransferConfig#location}

---

##### `notificationPubsubTopic`<sup>Optional</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic"></a>

```java
public java.lang.String getNotificationPubsubTopic();
```

- *Type:* java.lang.String

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#notification_pubsub_topic BigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#schedule BigqueryDataTransferConfig#schedule}

---

##### `scheduleOptions`<sup>Optional</sup> <a name="scheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions"></a>

```java
public BigqueryDataTransferConfigScheduleOptions getScheduleOptions();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#schedule_options BigqueryDataTransferConfig#schedule_options}

---

##### `sensitiveParams`<sup>Optional</sup> <a name="sensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams"></a>

```java
public BigqueryDataTransferConfigSensitiveParams getSensitiveParams();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#sensitive_params BigqueryDataTransferConfig#sensitive_params}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName"></a>

```java
public java.lang.String getServiceAccountName();
```

- *Type:* java.lang.String

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#service_account_name BigqueryDataTransferConfig#service_account_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts"></a>

```java
public BigqueryDataTransferConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#timeouts BigqueryDataTransferConfig#timeouts}

---

### BigqueryDataTransferConfigEmailPreferences <a name="BigqueryDataTransferConfigEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigEmailPreferences;

BigqueryDataTransferConfigEmailPreferences.builder()
    .enableFailureEmail(java.lang.Boolean)
    .enableFailureEmail(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail">enableFailureEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, email notifications will be sent on transfer run failures. |

---

##### `enableFailureEmail`<sup>Required</sup> <a name="enableFailureEmail" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail"></a>

```java
public java.lang.Object getEnableFailureEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#enable_failure_email BigqueryDataTransferConfig#enable_failure_email}

---

### BigqueryDataTransferConfigScheduleOptions <a name="BigqueryDataTransferConfigScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigScheduleOptions;

BigqueryDataTransferConfigScheduleOptions.builder()
//  .disableAutoScheduling(java.lang.Boolean)
//  .disableAutoScheduling(IResolvable)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling">disableAutoScheduling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, automatic scheduling of data transfer runs for this configuration will be disabled. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Defines time to stop scheduling transfer runs. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Specifies time to start scheduling transfer runs. |

---

##### `disableAutoScheduling`<sup>Optional</sup> <a name="disableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling"></a>

```java
public java.lang.Object getDisableAutoScheduling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#disable_auto_scheduling BigqueryDataTransferConfig#disable_auto_scheduling}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#end_time BigqueryDataTransferConfig#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#start_time BigqueryDataTransferConfig#start_time}

---

### BigqueryDataTransferConfigSensitiveParams <a name="BigqueryDataTransferConfigSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigSensitiveParams;

BigqueryDataTransferConfigSensitiveParams.builder()
    .secretAccessKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | The Secret Access Key of the AWS account transferring data from. |

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#secret_access_key BigqueryDataTransferConfig#secret_access_key}

---

### BigqueryDataTransferConfigTimeouts <a name="BigqueryDataTransferConfigTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigTimeouts;

BigqueryDataTransferConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferConfigEmailPreferencesOutputReference <a name="BigqueryDataTransferConfigEmailPreferencesOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigEmailPreferencesOutputReference;

new BigqueryDataTransferConfigEmailPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput">enableFailureEmailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail">enableFailureEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableFailureEmailInput`<sup>Optional</sup> <a name="enableFailureEmailInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput"></a>

```java
public java.lang.Object getEnableFailureEmailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFailureEmail`<sup>Required</sup> <a name="enableFailureEmail" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail"></a>

```java
public java.lang.Object getEnableFailureEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue"></a>

```java
public BigqueryDataTransferConfigEmailPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---


### BigqueryDataTransferConfigScheduleOptionsOutputReference <a name="BigqueryDataTransferConfigScheduleOptionsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigScheduleOptionsOutputReference;

new BigqueryDataTransferConfigScheduleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling">resetDisableAutoScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableAutoScheduling` <a name="resetDisableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling"></a>

```java
public void resetDisableAutoScheduling()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput">disableAutoSchedulingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling">disableAutoScheduling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableAutoSchedulingInput`<sup>Optional</sup> <a name="disableAutoSchedulingInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput"></a>

```java
public java.lang.Object getDisableAutoSchedulingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `disableAutoScheduling`<sup>Required</sup> <a name="disableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling"></a>

```java
public java.lang.Object getDisableAutoScheduling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue"></a>

```java
public BigqueryDataTransferConfigScheduleOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---


### BigqueryDataTransferConfigSensitiveParamsOutputReference <a name="BigqueryDataTransferConfigSensitiveParamsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigSensitiveParamsOutputReference;

new BigqueryDataTransferConfigSensitiveParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue"></a>

```java
public BigqueryDataTransferConfigSensitiveParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---


### BigqueryDataTransferConfigTimeoutsOutputReference <a name="BigqueryDataTransferConfigTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_data_transfer_config.BigqueryDataTransferConfigTimeoutsOutputReference;

new BigqueryDataTransferConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---



