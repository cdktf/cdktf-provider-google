# `sccV2OrganizationNotificationConfig` Submodule <a name="`sccV2OrganizationNotificationConfig` Submodule" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationNotificationConfig <a name="SccV2OrganizationNotificationConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config google_scc_v2_organization_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_id: str,
  organization: str,
  pubsub_topic: str,
  streaming_config: SccV2OrganizationNotificationConfigStreamingConfig,
  description: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccV2OrganizationNotificationConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The organization whose Cloud Security Command Center the Notification Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.streamingConfig">streaming_config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.configId"></a>

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#config_id SccV2OrganizationNotificationConfig#config_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.organization"></a>

- *Type:* str

The organization whose Cloud Security Command Center the Notification Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#organization SccV2OrganizationNotificationConfig#organization}

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.pubsubTopic"></a>

- *Type:* str

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#pubsub_topic SccV2OrganizationNotificationConfig#pubsub_topic}

---

##### `streaming_config`<sup>Required</sup> <a name="streaming_config" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.streamingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#streaming_config SccV2OrganizationNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.description"></a>

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#description SccV2OrganizationNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.location"></a>

- *Type:* str

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#location SccV2OrganizationNotificationConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#timeouts SccV2OrganizationNotificationConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig">put_streaming_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_streaming_config` <a name="put_streaming_config" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig"></a>

```python
def put_streaming_config(
  filter: str
) -> None
```

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig.parameter.filter"></a>

- *Type:* str

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#filter SccV2OrganizationNotificationConfig#filter}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccV2OrganizationNotificationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccV2OrganizationNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfig">streaming_config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference">SccV2OrganizationNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference">SccV2OrganizationNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfigInput">streaming_config_input</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `streaming_config`<sup>Required</sup> <a name="streaming_config" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfig"></a>

```python
streaming_config: SccV2OrganizationNotificationConfigStreamingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference">SccV2OrganizationNotificationConfigStreamingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeouts"></a>

```python
timeouts: SccV2OrganizationNotificationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference">SccV2OrganizationNotificationConfigTimeoutsOutputReference</a>

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `streaming_config_input`<sup>Optional</sup> <a name="streaming_config_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfigInput"></a>

```python
streaming_config_input: SccV2OrganizationNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SccV2OrganizationNotificationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationNotificationConfigConfig <a name="SccV2OrganizationNotificationConfigConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config_id: str,
  organization: str,
  pubsub_topic: str,
  streaming_config: SccV2OrganizationNotificationConfigStreamingConfig,
  description: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccV2OrganizationNotificationConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.configId">config_id</a></code> | <code>str</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.organization">organization</a></code> | <code>str</code> | The organization whose Cloud Security Command Center the Notification Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.streamingConfig">streaming_config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.description">description</a></code> | <code>str</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.location">location</a></code> | <code>str</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#config_id SccV2OrganizationNotificationConfig#config_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The organization whose Cloud Security Command Center the Notification Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#organization SccV2OrganizationNotificationConfig#organization}

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#pubsub_topic SccV2OrganizationNotificationConfig#pubsub_topic}

---

##### `streaming_config`<sup>Required</sup> <a name="streaming_config" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.streamingConfig"></a>

```python
streaming_config: SccV2OrganizationNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#streaming_config SccV2OrganizationNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#description SccV2OrganizationNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#location SccV2OrganizationNotificationConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.timeouts"></a>

```python
timeouts: SccV2OrganizationNotificationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#timeouts SccV2OrganizationNotificationConfig#timeouts}

---

### SccV2OrganizationNotificationConfigStreamingConfig <a name="SccV2OrganizationNotificationConfigStreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig(
  filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.property.filter">filter</a></code> | <code>str</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#filter SccV2OrganizationNotificationConfig#filter}

---

### SccV2OrganizationNotificationConfigTimeouts <a name="SccV2OrganizationNotificationConfigTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationNotificationConfigStreamingConfigOutputReference <a name="SccV2OrganizationNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```python
internal_value: SccV2OrganizationNotificationConfigStreamingConfig
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---


### SccV2OrganizationNotificationConfigTimeoutsOutputReference <a name="SccV2OrganizationNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import scc_v2_organization_notification_config

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SccV2OrganizationNotificationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>]

---



