# `google_bigquery_data_transfer_config`

Refer to the Terraform Registory for docs: [`google_bigquery_data_transfer_config`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config).

# `bigqueryDataTransferConfig` Submodule <a name="`bigqueryDataTransferConfig` Submodule" id="@cdktf/provider-google.bigqueryDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferConfig <a name="BigqueryDataTransferConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config google_bigquery_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  display_name: str,
  params: typing.Mapping[str],
  data_refresh_window_days: typing.Union[int, float] = None,
  destination_dataset_id: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  email_preferences: BigqueryDataTransferConfigEmailPreferences = None,
  id: str = None,
  location: str = None,
  notification_pubsub_topic: str = None,
  project: str = None,
  schedule: str = None,
  schedule_options: BigqueryDataTransferConfigScheduleOptions = None,
  sensitive_params: BigqueryDataTransferConfigSensitiveParams = None,
  service_account_name: str = None,
  timeouts: BigqueryDataTransferConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.params">params</a></code> | <code>typing.Mapping[str]</code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataRefreshWindowDays">data_refresh_window_days</a></code> | <code>typing.Union[int, float]</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.destinationDatasetId">destination_dataset_id</a></code> | <code>str</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.emailPreferences">email_preferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.notificationPubsubTopic">notification_pubsub_topic</a></code> | <code>str</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scheduleOptions">schedule_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.sensitiveParams">sensitive_params</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.serviceAccountName">service_account_name</a></code> | <code>str</code> | Service account email. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataSourceId"></a>

- *Type:* str

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#data_source_id BigqueryDataTransferConfig#data_source_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.displayName"></a>

- *Type:* str

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#display_name BigqueryDataTransferConfig#display_name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.params"></a>

- *Type:* typing.Mapping[str]

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

*NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#params BigqueryDataTransferConfig#params}

---

##### `data_refresh_window_days`<sup>Optional</sup> <a name="data_refresh_window_days" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.dataRefreshWindowDays"></a>

- *Type:* typing.Union[int, float]

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#data_refresh_window_days BigqueryDataTransferConfig#data_refresh_window_days}

---

##### `destination_dataset_id`<sup>Optional</sup> <a name="destination_dataset_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.destinationDatasetId"></a>

- *Type:* str

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#destination_dataset_id BigqueryDataTransferConfig#destination_dataset_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#disabled BigqueryDataTransferConfig#disabled}

---

##### `email_preferences`<sup>Optional</sup> <a name="email_preferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.emailPreferences"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#email_preferences BigqueryDataTransferConfig#email_preferences}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#location BigqueryDataTransferConfig#location}

---

##### `notification_pubsub_topic`<sup>Optional</sup> <a name="notification_pubsub_topic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.notificationPubsubTopic"></a>

- *Type:* str

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#notification_pubsub_topic BigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.schedule"></a>

- *Type:* str

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#schedule BigqueryDataTransferConfig#schedule}

---

##### `schedule_options`<sup>Optional</sup> <a name="schedule_options" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scheduleOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#schedule_options BigqueryDataTransferConfig#schedule_options}

---

##### `sensitive_params`<sup>Optional</sup> <a name="sensitive_params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.sensitiveParams"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#sensitive_params BigqueryDataTransferConfig#sensitive_params}

---

##### `service_account_name`<sup>Optional</sup> <a name="service_account_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.serviceAccountName"></a>

- *Type:* str

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#service_account_name BigqueryDataTransferConfig#service_account_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#timeouts BigqueryDataTransferConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences">put_email_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions">put_schedule_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams">put_sensitive_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays">reset_data_refresh_window_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId">reset_destination_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences">reset_email_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic">reset_notification_pubsub_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions">reset_schedule_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams">reset_sensitive_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName">reset_service_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_email_preferences` <a name="put_email_preferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences"></a>

```python
def put_email_preferences(
  enable_failure_email: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_failure_email`<sup>Required</sup> <a name="enable_failure_email" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences.parameter.enableFailureEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#enable_failure_email BigqueryDataTransferConfig#enable_failure_email}

---

##### `put_schedule_options` <a name="put_schedule_options" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions"></a>

```python
def put_schedule_options(
  disable_auto_scheduling: typing.Union[bool, IResolvable] = None,
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `disable_auto_scheduling`<sup>Optional</sup> <a name="disable_auto_scheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions.parameter.disableAutoScheduling"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#disable_auto_scheduling BigqueryDataTransferConfig#disable_auto_scheduling}

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions.parameter.endTime"></a>

- *Type:* str

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#end_time BigqueryDataTransferConfig#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions.parameter.startTime"></a>

- *Type:* str

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#start_time BigqueryDataTransferConfig#start_time}

---

##### `put_sensitive_params` <a name="put_sensitive_params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams"></a>

```python
def put_sensitive_params(
  secret_access_key: str
) -> None
```

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams.parameter.secretAccessKey"></a>

- *Type:* str

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#secret_access_key BigqueryDataTransferConfig#secret_access_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}.

---

##### `reset_data_refresh_window_days` <a name="reset_data_refresh_window_days" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays"></a>

```python
def reset_data_refresh_window_days() -> None
```

##### `reset_destination_dataset_id` <a name="reset_destination_dataset_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId"></a>

```python
def reset_destination_dataset_id() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_email_preferences` <a name="reset_email_preferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences"></a>

```python
def reset_email_preferences() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_notification_pubsub_topic` <a name="reset_notification_pubsub_topic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic"></a>

```python
def reset_notification_pubsub_topic() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_schedule_options` <a name="reset_schedule_options" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions"></a>

```python
def reset_schedule_options() -> None
```

##### `reset_sensitive_params` <a name="reset_sensitive_params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams"></a>

```python
def reset_sensitive_params() -> None
```

##### `reset_service_account_name` <a name="reset_service_account_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName"></a>

```python
def reset_service_account_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences">email_preferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions">schedule_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams">sensitive_params</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput">data_refresh_window_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput">destination_dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput">email_preferences_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput">notification_pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput">params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput">schedule_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput">sensitive_params_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput">service_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays">data_refresh_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId">destination_dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic">notification_pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params">params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_preferences`<sup>Required</sup> <a name="email_preferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences"></a>

```python
email_preferences: BigqueryDataTransferConfigEmailPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule_options`<sup>Required</sup> <a name="schedule_options" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions"></a>

```python
schedule_options: BigqueryDataTransferConfigScheduleOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a>

---

##### `sensitive_params`<sup>Required</sup> <a name="sensitive_params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams"></a>

```python
sensitive_params: BigqueryDataTransferConfigSensitiveParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts"></a>

```python
timeouts: BigqueryDataTransferConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a>

---

##### `data_refresh_window_days_input`<sup>Optional</sup> <a name="data_refresh_window_days_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput"></a>

```python
data_refresh_window_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `destination_dataset_id_input`<sup>Optional</sup> <a name="destination_dataset_id_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput"></a>

```python
destination_dataset_id_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_preferences_input`<sup>Optional</sup> <a name="email_preferences_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput"></a>

```python
email_preferences_input: BigqueryDataTransferConfigEmailPreferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `notification_pubsub_topic_input`<sup>Optional</sup> <a name="notification_pubsub_topic_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput"></a>

```python
notification_pubsub_topic_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput"></a>

```python
params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `schedule_options_input`<sup>Optional</sup> <a name="schedule_options_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput"></a>

```python
schedule_options_input: BigqueryDataTransferConfigScheduleOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `sensitive_params_input`<sup>Optional</sup> <a name="sensitive_params_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput"></a>

```python
sensitive_params_input: BigqueryDataTransferConfigSensitiveParams
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `service_account_name_input`<sup>Optional</sup> <a name="service_account_name_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput"></a>

```python
service_account_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryDataTransferConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>]

---

##### `data_refresh_window_days`<sup>Required</sup> <a name="data_refresh_window_days" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays"></a>

```python
data_refresh_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `destination_dataset_id`<sup>Required</sup> <a name="destination_dataset_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId"></a>

```python
destination_dataset_id: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `notification_pubsub_topic`<sup>Required</sup> <a name="notification_pubsub_topic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic"></a>

```python
notification_pubsub_topic: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `service_account_name`<sup>Required</sup> <a name="service_account_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferConfigConfig <a name="BigqueryDataTransferConfigConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source_id: str,
  display_name: str,
  params: typing.Mapping[str],
  data_refresh_window_days: typing.Union[int, float] = None,
  destination_dataset_id: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  email_preferences: BigqueryDataTransferConfigEmailPreferences = None,
  id: str = None,
  location: str = None,
  notification_pubsub_topic: str = None,
  project: str = None,
  schedule: str = None,
  schedule_options: BigqueryDataTransferConfigScheduleOptions = None,
  sensitive_params: BigqueryDataTransferConfigSensitiveParams = None,
  service_account_name: str = None,
  timeouts: BigqueryDataTransferConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params">params</a></code> | <code>typing.Mapping[str]</code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays">data_refresh_window_days</a></code> | <code>typing.Union[int, float]</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId">destination_dataset_id</a></code> | <code>str</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences">email_preferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic">notification_pubsub_topic</a></code> | <code>str</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule">schedule</a></code> | <code>str</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions">schedule_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams">sensitive_params</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | Service account email. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#data_source_id BigqueryDataTransferConfig#data_source_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#display_name BigqueryDataTransferConfig#display_name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

*NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#params BigqueryDataTransferConfig#params}

---

##### `data_refresh_window_days`<sup>Optional</sup> <a name="data_refresh_window_days" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays"></a>

```python
data_refresh_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#data_refresh_window_days BigqueryDataTransferConfig#data_refresh_window_days}

---

##### `destination_dataset_id`<sup>Optional</sup> <a name="destination_dataset_id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId"></a>

```python
destination_dataset_id: str
```

- *Type:* str

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#destination_dataset_id BigqueryDataTransferConfig#destination_dataset_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#disabled BigqueryDataTransferConfig#disabled}

---

##### `email_preferences`<sup>Optional</sup> <a name="email_preferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences"></a>

```python
email_preferences: BigqueryDataTransferConfigEmailPreferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#email_preferences BigqueryDataTransferConfig#email_preferences}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#location BigqueryDataTransferConfig#location}

---

##### `notification_pubsub_topic`<sup>Optional</sup> <a name="notification_pubsub_topic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic"></a>

```python
notification_pubsub_topic: str
```

- *Type:* str

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#notification_pubsub_topic BigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#schedule BigqueryDataTransferConfig#schedule}

---

##### `schedule_options`<sup>Optional</sup> <a name="schedule_options" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions"></a>

```python
schedule_options: BigqueryDataTransferConfigScheduleOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#schedule_options BigqueryDataTransferConfig#schedule_options}

---

##### `sensitive_params`<sup>Optional</sup> <a name="sensitive_params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams"></a>

```python
sensitive_params: BigqueryDataTransferConfigSensitiveParams
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#sensitive_params BigqueryDataTransferConfig#sensitive_params}

---

##### `service_account_name`<sup>Optional</sup> <a name="service_account_name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#service_account_name BigqueryDataTransferConfig#service_account_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts"></a>

```python
timeouts: BigqueryDataTransferConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#timeouts BigqueryDataTransferConfig#timeouts}

---

### BigqueryDataTransferConfigEmailPreferences <a name="BigqueryDataTransferConfigEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences(
  enable_failure_email: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail">enable_failure_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, email notifications will be sent on transfer run failures. |

---

##### `enable_failure_email`<sup>Required</sup> <a name="enable_failure_email" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail"></a>

```python
enable_failure_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#enable_failure_email BigqueryDataTransferConfig#enable_failure_email}

---

### BigqueryDataTransferConfigScheduleOptions <a name="BigqueryDataTransferConfigScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions(
  disable_auto_scheduling: typing.Union[bool, IResolvable] = None,
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling">disable_auto_scheduling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, automatic scheduling of data transfer runs for this configuration will be disabled. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime">end_time</a></code> | <code>str</code> | Defines time to stop scheduling transfer runs. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime">start_time</a></code> | <code>str</code> | Specifies time to start scheduling transfer runs. |

---

##### `disable_auto_scheduling`<sup>Optional</sup> <a name="disable_auto_scheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling"></a>

```python
disable_auto_scheduling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#disable_auto_scheduling BigqueryDataTransferConfig#disable_auto_scheduling}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#end_time BigqueryDataTransferConfig#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#start_time BigqueryDataTransferConfig#start_time}

---

### BigqueryDataTransferConfigSensitiveParams <a name="BigqueryDataTransferConfigSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams(
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | The Secret Access Key of the AWS account transferring data from. |

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#secret_access_key BigqueryDataTransferConfig#secret_access_key}

---

### BigqueryDataTransferConfigTimeouts <a name="BigqueryDataTransferConfigTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferConfigEmailPreferencesOutputReference <a name="BigqueryDataTransferConfigEmailPreferencesOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput">enable_failure_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail">enable_failure_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_failure_email_input`<sup>Optional</sup> <a name="enable_failure_email_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput"></a>

```python
enable_failure_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_failure_email`<sup>Required</sup> <a name="enable_failure_email" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail"></a>

```python
enable_failure_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryDataTransferConfigEmailPreferences
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---


### BigqueryDataTransferConfigScheduleOptionsOutputReference <a name="BigqueryDataTransferConfigScheduleOptionsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling">reset_disable_auto_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_auto_scheduling` <a name="reset_disable_auto_scheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling"></a>

```python
def reset_disable_auto_scheduling() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput">disable_auto_scheduling_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling">disable_auto_scheduling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_auto_scheduling_input`<sup>Optional</sup> <a name="disable_auto_scheduling_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput"></a>

```python
disable_auto_scheduling_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `disable_auto_scheduling`<sup>Required</sup> <a name="disable_auto_scheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling"></a>

```python
disable_auto_scheduling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryDataTransferConfigScheduleOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---


### BigqueryDataTransferConfigSensitiveParamsOutputReference <a name="BigqueryDataTransferConfigSensitiveParamsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryDataTransferConfigSensitiveParams
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---


### BigqueryDataTransferConfigTimeoutsOutputReference <a name="BigqueryDataTransferConfigTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_data_transfer_config

bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryDataTransferConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>]

---



