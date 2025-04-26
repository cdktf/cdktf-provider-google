# `developerConnectAccountConnector` Submodule <a name="`developerConnectAccountConnector` Submodule" id="@cdktf/provider-google.developerConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectAccountConnector <a name="DeveloperConnectAccountConnector" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_connector_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfig = None,
  timeouts: DeveloperConnectAccountConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId">account_connector_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig">provider_oauth_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_connector_id`<sup>Required</sup> <a name="account_connector_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId"></a>

- *Type:* str

Required.

The ID to use for the AccountConnector, which will become the final
component of the AccountConnector's resource name. Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `provider_oauth_config`<sup>Optional</sup> <a name="provider_oauth_config" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig">put_provider_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig">reset_provider_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_oauth_config` <a name="put_provider_oauth_config" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```python
def put_provider_oauth_config(
  scopes: typing.List[str],
  system_provider_id: str = None
) -> None
```

###### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Required.

User selected scopes to apply to the Oauth config
In the event of changing scopes, user records under AccountConnector will
be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

###### `system_provider_id`<sup>Optional</sup> <a name="system_provider_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig.parameter.systemProviderId"></a>

- *Type:* str

List of providers that are owned by Developer Connect.

Possible values:
GITHUB
GITLAB
GOOGLE
SENTRY
ROVO

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provider_oauth_config` <a name="reset_provider_oauth_config" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```python
def reset_provider_oauth_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DeveloperConnectAccountConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DeveloperConnectAccountConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeveloperConnectAccountConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri">oauth_start_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig">provider_oauth_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput">account_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput">provider_oauth_config_input</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId">account_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_start_uri`<sup>Required</sup> <a name="oauth_start_uri" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri"></a>

```python
oauth_start_uri: str
```

- *Type:* str

---

##### `provider_oauth_config`<sup>Required</sup> <a name="provider_oauth_config" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```python
provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts"></a>

```python
timeouts: DeveloperConnectAccountConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `account_connector_id_input`<sup>Optional</sup> <a name="account_connector_id_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```python
account_connector_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provider_oauth_config_input`<sup>Optional</sup> <a name="provider_oauth_config_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```python
provider_oauth_config_input: DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DeveloperConnectAccountConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>]

---

##### `account_connector_id`<sup>Required</sup> <a name="account_connector_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId"></a>

```python
account_connector_id: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectAccountConnectorConfig <a name="DeveloperConnectAccountConnectorConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_connector_id: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfig = None,
  timeouts: DeveloperConnectAccountConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId">account_connector_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig">provider_oauth_config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_connector_id`<sup>Required</sup> <a name="account_connector_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```python
account_connector_id: str
```

- *Type:* str

Required.

The ID to use for the AccountConnector, which will become the final
component of the AccountConnector's resource name. Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `provider_oauth_config`<sup>Optional</sup> <a name="provider_oauth_config" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```python
provider_oauth_config: DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```python
timeouts: DeveloperConnectAccountConnectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

### DeveloperConnectAccountConnectorProviderOauthConfig <a name="DeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig(
  scopes: typing.List[str],
  system_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">system_provider_id</a></code> | <code>str</code> | List of providers that are owned by Developer Connect. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Required.

User selected scopes to apply to the Oauth config
In the event of changing scopes, user records under AccountConnector will
be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

##### `system_provider_id`<sup>Optional</sup> <a name="system_provider_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```python
system_provider_id: str
```

- *Type:* str

List of providers that are owned by Developer Connect.

Possible values:
GITHUB
GITLAB
GOOGLE
SENTRY
ROVO

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}

---

### DeveloperConnectAccountConnectorTimeouts <a name="DeveloperConnectAccountConnectorTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="DeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">reset_system_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_system_provider_id` <a name="reset_system_provider_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```python
def reset_system_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">system_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">system_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_provider_id_input`<sup>Optional</sup> <a name="system_provider_id_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```python
system_provider_id_input: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_provider_id`<sup>Required</sup> <a name="system_provider_id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```python
system_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DeveloperConnectAccountConnectorProviderOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### DeveloperConnectAccountConnectorTimeoutsOutputReference <a name="DeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import developer_connect_account_connector

developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DeveloperConnectAccountConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>]

---



