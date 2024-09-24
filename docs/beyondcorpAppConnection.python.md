# `beyondcorpAppConnection` Submodule <a name="`beyondcorpAppConnection` Submodule" id="@cdktf/provider-google.beyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppConnection <a name="BeyondcorpAppConnection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_endpoint: BeyondcorpAppConnectionApplicationEndpoint,
  name: str,
  connectors: typing.List[str] = None,
  display_name: str = None,
  gateway: BeyondcorpAppConnectionGateway = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  timeouts: BeyondcorpAppConnectionTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.applicationEndpoint">application_endpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | application_endpoint block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.connectors">connectors</a></code> | <code>typing.List[str]</code> | List of AppConnectors that are authorised to be associated with this AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | An arbitrary user-provided name for the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_endpoint`<sup>Required</sup> <a name="application_endpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.applicationEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

application_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#application_endpoint BeyondcorpAppConnection#application_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.name"></a>

- *Type:* str

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#name BeyondcorpAppConnection#name}

---

##### `connectors`<sup>Optional</sup> <a name="connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.connectors"></a>

- *Type:* typing.List[str]

List of AppConnectors that are authorised to be associated with this AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#connectors BeyondcorpAppConnection#connectors}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.displayName"></a>

- *Type:* str

An arbitrary user-provided name for the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#display_name BeyondcorpAppConnection#display_name}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.gateway"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#gateway BeyondcorpAppConnection#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#labels BeyondcorpAppConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.region"></a>

- *Type:* str

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#region BeyondcorpAppConnection#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#timeouts BeyondcorpAppConnection#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.Initializer.parameter.type"></a>

- *Type:* str

The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint">put_application_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway">put_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetConnectors">reset_connectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetGateway">reset_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_endpoint` <a name="put_application_endpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint"></a>

```python
def put_application_endpoint(
  host: str,
  port: typing.Union[int, float]
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint.parameter.host"></a>

- *Type:* str

Hostname or IP address of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#host BeyondcorpAppConnection#host}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putApplicationEndpoint.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#port BeyondcorpAppConnection#port}

---

##### `put_gateway` <a name="put_gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway"></a>

```python
def put_gateway(
  app_gateway: str,
  type: str = None
) -> None
```

###### `app_gateway`<sup>Required</sup> <a name="app_gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway.parameter.appGateway"></a>

- *Type:* str

AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#app_gateway BeyondcorpAppConnection#app_gateway}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putGateway.parameter.type"></a>

- *Type:* str

The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}.

---

##### `reset_connectors` <a name="reset_connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetConnectors"></a>

```python
def reset_connectors() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gateway` <a name="reset_gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetGateway"></a>

```python
def reset_gateway() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BeyondcorpAppConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BeyondcorpAppConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BeyondcorpAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpoint">application_endpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference">BeyondcorpAppConnectionApplicationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference">BeyondcorpAppConnectionGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference">BeyondcorpAppConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpointInput">application_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectorsInput">connectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gatewayInput">gateway_input</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectors">connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_endpoint`<sup>Required</sup> <a name="application_endpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpoint"></a>

```python
application_endpoint: BeyondcorpAppConnectionApplicationEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference">BeyondcorpAppConnectionApplicationEndpointOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gateway"></a>

```python
gateway: BeyondcorpAppConnectionGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference">BeyondcorpAppConnectionGatewayOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeouts"></a>

```python
timeouts: BeyondcorpAppConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference">BeyondcorpAppConnectionTimeoutsOutputReference</a>

---

##### `application_endpoint_input`<sup>Optional</sup> <a name="application_endpoint_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.applicationEndpointInput"></a>

```python
application_endpoint_input: BeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `connectors_input`<sup>Optional</sup> <a name="connectors_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectorsInput"></a>

```python
connectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.gatewayInput"></a>

```python
gateway_input: BeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BeyondcorpAppConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `connectors`<sup>Required</sup> <a name="connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.connectors"></a>

```python
connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppConnectionApplicationEndpoint <a name="BeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint(
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.host">host</a></code> | <code>str</code> | Hostname or IP address of the remote application endpoint. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port of the remote application endpoint. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.host"></a>

```python
host: str
```

- *Type:* str

Hostname or IP address of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#host BeyondcorpAppConnection#host}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#port BeyondcorpAppConnection#port}

---

### BeyondcorpAppConnectionConfig <a name="BeyondcorpAppConnectionConfig" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_endpoint: BeyondcorpAppConnectionApplicationEndpoint,
  name: str,
  connectors: typing.List[str] = None,
  display_name: str = None,
  gateway: BeyondcorpAppConnectionGateway = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  timeouts: BeyondcorpAppConnectionTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.applicationEndpoint">application_endpoint</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | application_endpoint block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.name">name</a></code> | <code>str</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connectors">connectors</a></code> | <code>typing.List[str]</code> | List of AppConnectors that are authorised to be associated with this AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | An arbitrary user-provided name for the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.region">region</a></code> | <code>str</code> | The region of the AppConnection. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.type">type</a></code> | <code>str</code> | The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_endpoint`<sup>Required</sup> <a name="application_endpoint" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.applicationEndpoint"></a>

```python
application_endpoint: BeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

application_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#application_endpoint BeyondcorpAppConnection#application_endpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#name BeyondcorpAppConnection#name}

---

##### `connectors`<sup>Optional</sup> <a name="connectors" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.connectors"></a>

```python
connectors: typing.List[str]
```

- *Type:* typing.List[str]

List of AppConnectors that are authorised to be associated with this AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#connectors BeyondcorpAppConnection#connectors}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

An arbitrary user-provided name for the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#display_name BeyondcorpAppConnection#display_name}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.gateway"></a>

```python
gateway: BeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#gateway BeyondcorpAppConnection#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#id BeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#labels BeyondcorpAppConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#project BeyondcorpAppConnection#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#region BeyondcorpAppConnection#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.timeouts"></a>

```python
timeouts: BeyondcorpAppConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#timeouts BeyondcorpAppConnection#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

### BeyondcorpAppConnectionGateway <a name="BeyondcorpAppConnectionGateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionGateway(
  app_gateway: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.appGateway">app_gateway</a></code> | <code>str</code> | AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.type">type</a></code> | <code>str</code> | The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values. |

---

##### `app_gateway`<sup>Required</sup> <a name="app_gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.appGateway"></a>

```python
app_gateway: str
```

- *Type:* str

AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#app_gateway BeyondcorpAppConnection#app_gateway}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway.property.type"></a>

```python
type: str
```

- *Type:* str

The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#type BeyondcorpAppConnection#type}

---

### BeyondcorpAppConnectionTimeouts <a name="BeyondcorpAppConnectionTimeouts" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#create BeyondcorpAppConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#delete BeyondcorpAppConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/beyondcorp_app_connection#update BeyondcorpAppConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppConnectionApplicationEndpointOutputReference <a name="BeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionApplicationEndpoint">BeyondcorpAppConnectionApplicationEndpoint</a>

---


### BeyondcorpAppConnectionGatewayOutputReference <a name="BeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">ingress_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput">app_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGateway">app_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_port`<sup>Required</sup> <a name="ingress_port" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```python
ingress_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `app_gateway_input`<sup>Optional</sup> <a name="app_gateway_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput"></a>

```python
app_gateway_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `app_gateway`<sup>Required</sup> <a name="app_gateway" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```python
app_gateway: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionGateway">BeyondcorpAppConnectionGateway</a>

---


### BeyondcorpAppConnectionTimeoutsOutputReference <a name="BeyondcorpAppConnectionTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_connection

beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BeyondcorpAppConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpAppConnection.BeyondcorpAppConnectionTimeouts">BeyondcorpAppConnectionTimeouts</a>]

---



