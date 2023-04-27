# `google_storage_transfer_agent_pool`

Refer to the Terraform Registory for docs: [`google_storage_transfer_agent_pool`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool).

# `storageTransferAgentPool` Submodule <a name="`storageTransferAgentPool` Submodule" id="@cdktf/provider-google.storageTransferAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferAgentPool <a name="StorageTransferAgentPool" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool google_storage_transfer_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  bandwidth_limit: StorageTransferAgentPoolBandwidthLimit = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: StorageTransferAgentPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.bandwidthLimit">bandwidth_limit</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.name"></a>

- *Type:* str

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:
Length of 128 characters or less.
Not start with the string goog.
Start with a lowercase ASCII character, followed by:
Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#name StorageTransferAgentPool#name}

---

##### `bandwidth_limit`<sup>Optional</sup> <a name="bandwidth_limit" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.bandwidthLimit"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#bandwidth_limit StorageTransferAgentPool#bandwidth_limit}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.displayName"></a>

- *Type:* str

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#display_name StorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#timeouts StorageTransferAgentPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit">put_bandwidth_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetBandwidthLimit">reset_bandwidth_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bandwidth_limit` <a name="put_bandwidth_limit" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit"></a>

```python
def put_bandwidth_limit(
  limit_mbps: str
) -> None
```

###### `limit_mbps`<sup>Required</sup> <a name="limit_mbps" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit.parameter.limitMbps"></a>

- *Type:* str

Bandwidth rate in megabytes per second, distributed across all the agents in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#limit_mbps StorageTransferAgentPool#limit_mbps}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}.

---

##### `reset_bandwidth_limit` <a name="reset_bandwidth_limit" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetBandwidthLimit"></a>

```python
def reset_bandwidth_limit() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimit">bandwidth_limit</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference">StorageTransferAgentPoolBandwidthLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference">StorageTransferAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimitInput">bandwidth_limit_input</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bandwidth_limit`<sup>Required</sup> <a name="bandwidth_limit" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimit"></a>

```python
bandwidth_limit: StorageTransferAgentPoolBandwidthLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference">StorageTransferAgentPoolBandwidthLimitOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeouts"></a>

```python
timeouts: StorageTransferAgentPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference">StorageTransferAgentPoolTimeoutsOutputReference</a>

---

##### `bandwidth_limit_input`<sup>Optional</sup> <a name="bandwidth_limit_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimitInput"></a>

```python
bandwidth_limit_input: StorageTransferAgentPoolBandwidthLimit
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StorageTransferAgentPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferAgentPoolBandwidthLimit <a name="StorageTransferAgentPoolBandwidthLimit" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit(
  limit_mbps: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.property.limitMbps">limit_mbps</a></code> | <code>str</code> | Bandwidth rate in megabytes per second, distributed across all the agents in the pool. |

---

##### `limit_mbps`<sup>Required</sup> <a name="limit_mbps" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.property.limitMbps"></a>

```python
limit_mbps: str
```

- *Type:* str

Bandwidth rate in megabytes per second, distributed across all the agents in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#limit_mbps StorageTransferAgentPool#limit_mbps}

---

### StorageTransferAgentPoolConfig <a name="StorageTransferAgentPoolConfig" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  bandwidth_limit: StorageTransferAgentPoolBandwidthLimit = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: StorageTransferAgentPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.name">name</a></code> | <code>str</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.bandwidthLimit">bandwidth_limit</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.displayName">display_name</a></code> | <code>str</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:
Length of 128 characters or less.
Not start with the string goog.
Start with a lowercase ASCII character, followed by:
Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z](%5Ba-z0-9-._~%5D*%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#name StorageTransferAgentPool#name}

---

##### `bandwidth_limit`<sup>Optional</sup> <a name="bandwidth_limit" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.bandwidthLimit"></a>

```python
bandwidth_limit: StorageTransferAgentPoolBandwidthLimit
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#bandwidth_limit StorageTransferAgentPool#bandwidth_limit}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#display_name StorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.timeouts"></a>

```python
timeouts: StorageTransferAgentPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#timeouts StorageTransferAgentPool#timeouts}

---

### StorageTransferAgentPoolTimeouts <a name="StorageTransferAgentPoolTimeouts" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferAgentPoolBandwidthLimitOutputReference <a name="StorageTransferAgentPoolBandwidthLimitOutputReference" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput">limit_mbps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps">limit_mbps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_mbps_input`<sup>Optional</sup> <a name="limit_mbps_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput"></a>

```python
limit_mbps_input: str
```

- *Type:* str

---

##### `limit_mbps`<sup>Required</sup> <a name="limit_mbps" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps"></a>

```python
limit_mbps: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue"></a>

```python
internal_value: StorageTransferAgentPoolBandwidthLimit
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---


### StorageTransferAgentPoolTimeoutsOutputReference <a name="StorageTransferAgentPoolTimeoutsOutputReference" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_transfer_agent_pool

storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StorageTransferAgentPoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>, cdktf.IResolvable]

---



