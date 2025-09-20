# `bigqueryAnalyticsHubDataExchange` Submodule <a name="`bigqueryAnalyticsHubDataExchange` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchange <a name="BigqueryAnalyticsHubDataExchange" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  display_name: str,
  location: str,
  description: str = None,
  discovery_type: str = None,
  documentation: str = None,
  icon: str = None,
  id: str = None,
  log_linked_dataset_query_user_email: typing.Union[bool, IResolvable] = None,
  primary_contact: str = None,
  project: str = None,
  sharing_environment_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig = None,
  timeouts: BigqueryAnalyticsHubDataExchangeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.discoveryType">discovery_type</a></code> | <code>str</code> | Type of discovery on the discovery page for all the listings under this exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.documentation">documentation</a></code> | <code>str</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.icon">icon</a></code> | <code>str</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.logLinkedDatasetQueryUserEmail">log_linked_dataset_query_user_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.primaryContact">primary_contact</a></code> | <code>str</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.sharingEnvironmentConfig">sharing_environment_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | sharing_environment_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#data_exchange_id BigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#display_name BigqueryAnalyticsHubDataExchange#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#location BigqueryAnalyticsHubDataExchange#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.description"></a>

- *Type:* str

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#description BigqueryAnalyticsHubDataExchange#description}

---

##### `discovery_type`<sup>Optional</sup> <a name="discovery_type" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.discoveryType"></a>

- *Type:* str

Type of discovery on the discovery page for all the listings under this exchange.

Cannot be set for a Data Clean Room. Updating this field also updates (overwrites) the discoveryType field for all the listings under this exchange. Possible values: ["DISCOVERY_TYPE_PRIVATE", "DISCOVERY_TYPE_PUBLIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#discovery_type BigqueryAnalyticsHubDataExchange#discovery_type}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.documentation"></a>

- *Type:* str

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#documentation BigqueryAnalyticsHubDataExchange#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.icon"></a>

- *Type:* str

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#icon BigqueryAnalyticsHubDataExchange#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_linked_dataset_query_user_email`<sup>Optional</sup> <a name="log_linked_dataset_query_user_email" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.logLinkedDatasetQueryUserEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user.

Once enabled, this setting cannot be turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#log_linked_dataset_query_user_email BigqueryAnalyticsHubDataExchange#log_linked_dataset_query_user_email}

---

##### `primary_contact`<sup>Optional</sup> <a name="primary_contact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.primaryContact"></a>

- *Type:* str

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#primary_contact BigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}.

---

##### `sharing_environment_config`<sup>Optional</sup> <a name="sharing_environment_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.sharingEnvironmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

sharing_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#sharing_environment_config BigqueryAnalyticsHubDataExchange#sharing_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#timeouts BigqueryAnalyticsHubDataExchange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig">put_sharing_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDiscoveryType">reset_discovery_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDocumentation">reset_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetIcon">reset_icon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetLogLinkedDatasetQueryUserEmail">reset_log_linked_dataset_query_user_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetPrimaryContact">reset_primary_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig">reset_sharing_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sharing_environment_config` <a name="put_sharing_environment_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig"></a>

```python
def put_sharing_environment_config(
  dcr_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig = None,
  default_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig = None
) -> None
```

###### `dcr_exchange_config`<sup>Optional</sup> <a name="dcr_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig.parameter.dcrExchangeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

dcr_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#dcr_exchange_config BigqueryAnalyticsHubDataExchange#dcr_exchange_config}

---

###### `default_exchange_config`<sup>Optional</sup> <a name="default_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig.parameter.defaultExchangeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

default_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#default_exchange_config BigqueryAnalyticsHubDataExchange#default_exchange_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#create BigqueryAnalyticsHubDataExchange#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#delete BigqueryAnalyticsHubDataExchange#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#update BigqueryAnalyticsHubDataExchange#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_discovery_type` <a name="reset_discovery_type" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDiscoveryType"></a>

```python
def reset_discovery_type() -> None
```

##### `reset_documentation` <a name="reset_documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDocumentation"></a>

```python
def reset_documentation() -> None
```

##### `reset_icon` <a name="reset_icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetIcon"></a>

```python
def reset_icon() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_linked_dataset_query_user_email` <a name="reset_log_linked_dataset_query_user_email" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetLogLinkedDatasetQueryUserEmail"></a>

```python
def reset_log_linked_dataset_query_user_email() -> None
```

##### `reset_primary_contact` <a name="reset_primary_contact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetPrimaryContact"></a>

```python
def reset_primary_contact() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sharing_environment_config` <a name="reset_sharing_environment_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig"></a>

```python
def reset_sharing_environment_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryAnalyticsHubDataExchange to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryAnalyticsHubDataExchange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubDataExchange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.listingCount">listing_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig">sharing_environment_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.discoveryTypeInput">discovery_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentationInput">documentation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.iconInput">icon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.logLinkedDatasetQueryUserEmailInput">log_linked_dataset_query_user_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContactInput">primary_contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput">sharing_environment_config_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.discoveryType">discovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentation">documentation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.icon">icon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.logLinkedDatasetQueryUserEmail">log_linked_dataset_query_user_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContact">primary_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `listing_count`<sup>Required</sup> <a name="listing_count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.listingCount"></a>

```python
listing_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sharing_environment_config`<sup>Required</sup> <a name="sharing_environment_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig"></a>

```python
sharing_environment_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeouts"></a>

```python
timeouts: BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a>

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovery_type_input`<sup>Optional</sup> <a name="discovery_type_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.discoveryTypeInput"></a>

```python
discovery_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `documentation_input`<sup>Optional</sup> <a name="documentation_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentationInput"></a>

```python
documentation_input: str
```

- *Type:* str

---

##### `icon_input`<sup>Optional</sup> <a name="icon_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.iconInput"></a>

```python
icon_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `log_linked_dataset_query_user_email_input`<sup>Optional</sup> <a name="log_linked_dataset_query_user_email_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.logLinkedDatasetQueryUserEmailInput"></a>

```python
log_linked_dataset_query_user_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_contact_input`<sup>Optional</sup> <a name="primary_contact_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContactInput"></a>

```python
primary_contact_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sharing_environment_config_input`<sup>Optional</sup> <a name="sharing_environment_config_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput"></a>

```python
sharing_environment_config_input: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryAnalyticsHubDataExchangeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovery_type`<sup>Required</sup> <a name="discovery_type" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentation"></a>

```python
documentation: str
```

- *Type:* str

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.icon"></a>

```python
icon: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `log_linked_dataset_query_user_email`<sup>Required</sup> <a name="log_linked_dataset_query_user_email" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.logLinkedDatasetQueryUserEmail"></a>

```python
log_linked_dataset_query_user_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_contact`<sup>Required</sup> <a name="primary_contact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContact"></a>

```python
primary_contact: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeConfig <a name="BigqueryAnalyticsHubDataExchangeConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  display_name: str,
  location: str,
  description: str = None,
  discovery_type: str = None,
  documentation: str = None,
  icon: str = None,
  id: str = None,
  log_linked_dataset_query_user_email: typing.Union[bool, IResolvable] = None,
  primary_contact: str = None,
  project: str = None,
  sharing_environment_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig = None,
  timeouts: BigqueryAnalyticsHubDataExchangeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.location">location</a></code> | <code>str</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.description">description</a></code> | <code>str</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.discoveryType">discovery_type</a></code> | <code>str</code> | Type of discovery on the discovery page for all the listings under this exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.documentation">documentation</a></code> | <code>str</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.icon">icon</a></code> | <code>str</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.logLinkedDatasetQueryUserEmail">log_linked_dataset_query_user_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.primaryContact">primary_contact</a></code> | <code>str</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig">sharing_environment_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | sharing_environment_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#data_exchange_id BigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#display_name BigqueryAnalyticsHubDataExchange#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#location BigqueryAnalyticsHubDataExchange#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#description BigqueryAnalyticsHubDataExchange#description}

---

##### `discovery_type`<sup>Optional</sup> <a name="discovery_type" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

Type of discovery on the discovery page for all the listings under this exchange.

Cannot be set for a Data Clean Room. Updating this field also updates (overwrites) the discoveryType field for all the listings under this exchange. Possible values: ["DISCOVERY_TYPE_PRIVATE", "DISCOVERY_TYPE_PUBLIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#discovery_type BigqueryAnalyticsHubDataExchange#discovery_type}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.documentation"></a>

```python
documentation: str
```

- *Type:* str

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#documentation BigqueryAnalyticsHubDataExchange#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.icon"></a>

```python
icon: str
```

- *Type:* str

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#icon BigqueryAnalyticsHubDataExchange#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_linked_dataset_query_user_email`<sup>Optional</sup> <a name="log_linked_dataset_query_user_email" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.logLinkedDatasetQueryUserEmail"></a>

```python
log_linked_dataset_query_user_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user.

Once enabled, this setting cannot be turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#log_linked_dataset_query_user_email BigqueryAnalyticsHubDataExchange#log_linked_dataset_query_user_email}

---

##### `primary_contact`<sup>Optional</sup> <a name="primary_contact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.primaryContact"></a>

```python
primary_contact: str
```

- *Type:* str

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#primary_contact BigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}.

---

##### `sharing_environment_config`<sup>Optional</sup> <a name="sharing_environment_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig"></a>

```python
sharing_environment_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

sharing_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#sharing_environment_config BigqueryAnalyticsHubDataExchange#sharing_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.timeouts"></a>

```python
timeouts: BigqueryAnalyticsHubDataExchangeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#timeouts BigqueryAnalyticsHubDataExchange#timeouts}

---

### BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig <a name="BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig(
  dcr_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig = None,
  default_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig">dcr_exchange_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | dcr_exchange_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig">default_exchange_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | default_exchange_config block. |

---

##### `dcr_exchange_config`<sup>Optional</sup> <a name="dcr_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig"></a>

```python
dcr_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

dcr_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#dcr_exchange_config BigqueryAnalyticsHubDataExchange#dcr_exchange_config}

---

##### `default_exchange_config`<sup>Optional</sup> <a name="default_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig"></a>

```python
default_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

default_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#default_exchange_config BigqueryAnalyticsHubDataExchange#default_exchange_config}

---

### BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig <a name="BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig()
```


### BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig <a name="BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig()
```


### BigqueryAnalyticsHubDataExchangeTimeouts <a name="BigqueryAnalyticsHubDataExchangeTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#create BigqueryAnalyticsHubDataExchange#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#delete BigqueryAnalyticsHubDataExchange#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#update BigqueryAnalyticsHubDataExchange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#create BigqueryAnalyticsHubDataExchange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#delete BigqueryAnalyticsHubDataExchange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/bigquery_analytics_hub_data_exchange#update BigqueryAnalyticsHubDataExchange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference <a name="BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---


### BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference <a name="BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---


### BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference <a name="BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig">put_dcr_exchange_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig">put_default_exchange_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig">reset_dcr_exchange_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig">reset_default_exchange_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dcr_exchange_config` <a name="put_dcr_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig"></a>

```python
def put_dcr_exchange_config() -> None
```

##### `put_default_exchange_config` <a name="put_default_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig"></a>

```python
def put_default_exchange_config() -> None
```

##### `reset_dcr_exchange_config` <a name="reset_dcr_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig"></a>

```python
def reset_dcr_exchange_config() -> None
```

##### `reset_default_exchange_config` <a name="reset_default_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig"></a>

```python
def reset_default_exchange_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig">dcr_exchange_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig">default_exchange_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput">dcr_exchange_config_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput">default_exchange_config_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dcr_exchange_config`<sup>Required</sup> <a name="dcr_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig"></a>

```python
dcr_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a>

---

##### `default_exchange_config`<sup>Required</sup> <a name="default_exchange_config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig"></a>

```python
default_exchange_config: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a>

---

##### `dcr_exchange_config_input`<sup>Optional</sup> <a name="dcr_exchange_config_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput"></a>

```python
dcr_exchange_config_input: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `default_exchange_config_input`<sup>Optional</sup> <a name="default_exchange_config_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput"></a>

```python
default_exchange_config_input: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---


### BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference <a name="BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_data_exchange

bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryAnalyticsHubDataExchangeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>]

---



