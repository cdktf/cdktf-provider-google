# `beyondcorpAppGateway` Submodule <a name="`beyondcorpAppGateway` Submodule" id="@cdktf/provider-google.beyondcorpAppGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpAppGateway <a name="BeyondcorpAppGateway" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway google_beyondcorp_app_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  display_name: str = None,
  host_type: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  timeouts: BeyondcorpAppGatewayTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | ID of the AppGateway. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | An arbitrary user-provided name for the AppGateway. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.hostType">host_type</a></code> | <code>str</code> | The type of hosting used by the AppGateway. Default value: "HOST_TYPE_UNSPECIFIED" Possible values: ["HOST_TYPE_UNSPECIFIED", "GCP_REGIONAL_MIG"]. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#id BeyondcorpAppGateway#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#project BeyondcorpAppGateway#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the AppGateway. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of network connectivity used by the AppGateway. Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "TCP_PROXY"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.name"></a>

- *Type:* str

ID of the AppGateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#name BeyondcorpAppGateway#name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.displayName"></a>

- *Type:* str

An arbitrary user-provided name for the AppGateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#display_name BeyondcorpAppGateway#display_name}

---

##### `host_type`<sup>Optional</sup> <a name="host_type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.hostType"></a>

- *Type:* str

The type of hosting used by the AppGateway. Default value: "HOST_TYPE_UNSPECIFIED" Possible values: ["HOST_TYPE_UNSPECIFIED", "GCP_REGIONAL_MIG"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#host_type BeyondcorpAppGateway#host_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#id BeyondcorpAppGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#labels BeyondcorpAppGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#project BeyondcorpAppGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.region"></a>

- *Type:* str

The region of the AppGateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#region BeyondcorpAppGateway#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#timeouts BeyondcorpAppGateway#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.Initializer.parameter.type"></a>

- *Type:* str

The type of network connectivity used by the AppGateway. Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "TCP_PROXY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#type BeyondcorpAppGateway#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetHostType">reset_host_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#create BeyondcorpAppGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#delete BeyondcorpAppGateway#delete}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_host_type` <a name="reset_host_type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetHostType"></a>

```python
def reset_host_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.allocatedConnections">allocated_connections</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList">BeyondcorpAppGatewayAllocatedConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference">BeyondcorpAppGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.hostTypeInput">host_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocated_connections`<sup>Required</sup> <a name="allocated_connections" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.allocatedConnections"></a>

```python
allocated_connections: BeyondcorpAppGatewayAllocatedConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList">BeyondcorpAppGatewayAllocatedConnectionsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.timeouts"></a>

```python
timeouts: BeyondcorpAppGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference">BeyondcorpAppGatewayTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `host_type_input`<sup>Optional</sup> <a name="host_type_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.hostTypeInput"></a>

```python
host_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[BeyondcorpAppGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpAppGatewayAllocatedConnections <a name="BeyondcorpAppGatewayAllocatedConnections" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnections()
```


### BeyondcorpAppGatewayConfig <a name="BeyondcorpAppGatewayConfig" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  display_name: str = None,
  host_type: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  region: str = None,
  timeouts: BeyondcorpAppGatewayTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.name">name</a></code> | <code>str</code> | ID of the AppGateway. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | An arbitrary user-provided name for the AppGateway. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.hostType">host_type</a></code> | <code>str</code> | The type of hosting used by the AppGateway. Default value: "HOST_TYPE_UNSPECIFIED" Possible values: ["HOST_TYPE_UNSPECIFIED", "GCP_REGIONAL_MIG"]. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#id BeyondcorpAppGateway#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#project BeyondcorpAppGateway#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.region">region</a></code> | <code>str</code> | The region of the AppGateway. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.type">type</a></code> | <code>str</code> | The type of network connectivity used by the AppGateway. Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "TCP_PROXY"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

ID of the AppGateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#name BeyondcorpAppGateway#name}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

An arbitrary user-provided name for the AppGateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#display_name BeyondcorpAppGateway#display_name}

---

##### `host_type`<sup>Optional</sup> <a name="host_type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

The type of hosting used by the AppGateway. Default value: "HOST_TYPE_UNSPECIFIED" Possible values: ["HOST_TYPE_UNSPECIFIED", "GCP_REGIONAL_MIG"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#host_type BeyondcorpAppGateway#host_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#id BeyondcorpAppGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#labels BeyondcorpAppGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#project BeyondcorpAppGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the AppGateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#region BeyondcorpAppGateway#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.timeouts"></a>

```python
timeouts: BeyondcorpAppGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#timeouts BeyondcorpAppGateway#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of network connectivity used by the AppGateway. Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "TCP_PROXY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#type BeyondcorpAppGateway#type}

---

### BeyondcorpAppGatewayTimeouts <a name="BeyondcorpAppGatewayTimeouts" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#create BeyondcorpAppGateway#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#delete BeyondcorpAppGateway#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#create BeyondcorpAppGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/beyondcorp_app_gateway#delete BeyondcorpAppGateway#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpAppGatewayAllocatedConnectionsList <a name="BeyondcorpAppGatewayAllocatedConnectionsList" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BeyondcorpAppGatewayAllocatedConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BeyondcorpAppGatewayAllocatedConnectionsOutputReference <a name="BeyondcorpAppGatewayAllocatedConnectionsOutputReference" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.ingressPort">ingress_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.pscUri">psc_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnections">BeyondcorpAppGatewayAllocatedConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_port`<sup>Required</sup> <a name="ingress_port" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.ingressPort"></a>

```python
ingress_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `psc_uri`<sup>Required</sup> <a name="psc_uri" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.pscUri"></a>

```python
psc_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpAppGatewayAllocatedConnections
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayAllocatedConnections">BeyondcorpAppGatewayAllocatedConnections</a>

---


### BeyondcorpAppGatewayTimeoutsOutputReference <a name="BeyondcorpAppGatewayTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_app_gateway

beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[BeyondcorpAppGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.beyondcorpAppGateway.BeyondcorpAppGatewayTimeouts">BeyondcorpAppGatewayTimeouts</a>, cdktf.IResolvable]

---



