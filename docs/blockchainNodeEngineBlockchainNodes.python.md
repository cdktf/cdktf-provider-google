# `blockchainNodeEngineBlockchainNodes` Submodule <a name="`blockchainNodeEngineBlockchainNodes` Submodule" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainNodeEngineBlockchainNodes <a name="BlockchainNodeEngineBlockchainNodes" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes google_blockchain_node_engine_blockchain_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_node_id: str,
  location: str,
  blockchain_type: str = None,
  ethereum_details: BlockchainNodeEngineBlockchainNodesEthereumDetails = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BlockchainNodeEngineBlockchainNodesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainNodeId">blockchain_node_id</a></code> | <code>str</code> | ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of Blockchain Node being created. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainType">blockchain_type</a></code> | <code>str</code> | User-provided key-value pairs Possible values: ["ETHEREUM"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.ethereumDetails">ethereum_details</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | ethereum_details block. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-provided key-value pairs. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_node_id`<sup>Required</sup> <a name="blockchain_node_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainNodeId"></a>

- *Type:* str

ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_node_id BlockchainNodeEngineBlockchainNodes#blockchain_node_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.location"></a>

- *Type:* str

Location of Blockchain Node being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#location BlockchainNodeEngineBlockchainNodes#location}

---

##### `blockchain_type`<sup>Optional</sup> <a name="blockchain_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.blockchainType"></a>

- *Type:* str

User-provided key-value pairs Possible values: ["ETHEREUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_type BlockchainNodeEngineBlockchainNodes#blockchain_type}

---

##### `ethereum_details`<sup>Optional</sup> <a name="ethereum_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.ethereumDetails"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

ethereum_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#ethereum_details BlockchainNodeEngineBlockchainNodes#ethereum_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-provided key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#labels BlockchainNodeEngineBlockchainNodes#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#timeouts BlockchainNodeEngineBlockchainNodes#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails">put_ethereum_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetBlockchainType">reset_blockchain_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetEthereumDetails">reset_ethereum_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ethereum_details` <a name="put_ethereum_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails"></a>

```python
def put_ethereum_details(
  api_enable_admin: typing.Union[bool, IResolvable] = None,
  api_enable_debug: typing.Union[bool, IResolvable] = None,
  consensus_client: str = None,
  execution_client: str = None,
  fetchh_details: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails = None,
  network: str = None,
  node_type: str = None,
  validator_config: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig = None
) -> None
```

###### `api_enable_admin`<sup>Optional</sup> <a name="api_enable_admin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.apiEnableAdmin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the admin namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_admin BlockchainNodeEngineBlockchainNodes#api_enable_admin}

---

###### `api_enable_debug`<sup>Optional</sup> <a name="api_enable_debug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.apiEnableDebug"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the debug namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_debug BlockchainNodeEngineBlockchainNodes#api_enable_debug}

---

###### `consensus_client`<sup>Optional</sup> <a name="consensus_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.consensusClient"></a>

- *Type:* str

The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#consensus_client BlockchainNodeEngineBlockchainNodes#consensus_client}

---

###### `execution_client`<sup>Optional</sup> <a name="execution_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.executionClient"></a>

- *Type:* str

The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#execution_client BlockchainNodeEngineBlockchainNodes#execution_client}

---

###### `fetchh_details`<sup>Optional</sup> <a name="fetchh_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.fetchhDetails"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

geth_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#geth_details BlockchainNodeEngineBlockchainNodes#geth_details}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.network"></a>

- *Type:* str

The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#network BlockchainNodeEngineBlockchainNodes#network}

---

###### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.nodeType"></a>

- *Type:* str

The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#node_type BlockchainNodeEngineBlockchainNodes#node_type}

---

###### `validator_config`<sup>Optional</sup> <a name="validator_config" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.validatorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

validator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#validator_config BlockchainNodeEngineBlockchainNodes#validator_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#create BlockchainNodeEngineBlockchainNodes#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#delete BlockchainNodeEngineBlockchainNodes#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#update BlockchainNodeEngineBlockchainNodes#update}.

---

##### `reset_blockchain_type` <a name="reset_blockchain_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetBlockchainType"></a>

```python
def reset_blockchain_type() -> None
```

##### `reset_ethereum_details` <a name="reset_ethereum_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetEthereumDetails"></a>

```python
def reset_ethereum_details() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BlockchainNodeEngineBlockchainNodes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BlockchainNodeEngineBlockchainNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainNodeEngineBlockchainNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connectionInfo">connection_info</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetails">ethereum_details</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput">blockchain_node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput">blockchain_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput">ethereum_details_input</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeId">blockchain_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainType">blockchain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_info`<sup>Required</sup> <a name="connection_info" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.connectionInfo"></a>

```python
connection_info: BlockchainNodeEngineBlockchainNodesConnectionInfoList
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ethereum_details`<sup>Required</sup> <a name="ethereum_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetails"></a>

```python
ethereum_details: BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeouts"></a>

```python
timeouts: BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `blockchain_node_id_input`<sup>Optional</sup> <a name="blockchain_node_id_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput"></a>

```python
blockchain_node_id_input: str
```

- *Type:* str

---

##### `blockchain_type_input`<sup>Optional</sup> <a name="blockchain_type_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput"></a>

```python
blockchain_type_input: str
```

- *Type:* str

---

##### `ethereum_details_input`<sup>Optional</sup> <a name="ethereum_details_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput"></a>

```python
ethereum_details_input: BlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BlockchainNodeEngineBlockchainNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>]

---

##### `blockchain_node_id`<sup>Required</sup> <a name="blockchain_node_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainNodeId"></a>

```python
blockchain_node_id: str
```

- *Type:* str

---

##### `blockchain_type`<sup>Required</sup> <a name="blockchain_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.blockchainType"></a>

```python
blockchain_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainNodeEngineBlockchainNodesConfig <a name="BlockchainNodeEngineBlockchainNodesConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_node_id: str,
  location: str,
  blockchain_type: str = None,
  ethereum_details: BlockchainNodeEngineBlockchainNodesEthereumDetails = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: BlockchainNodeEngineBlockchainNodesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId">blockchain_node_id</a></code> | <code>str</code> | ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.location">location</a></code> | <code>str</code> | Location of Blockchain Node being created. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainType">blockchain_type</a></code> | <code>str</code> | User-provided key-value pairs Possible values: ["ETHEREUM"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails">ethereum_details</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | ethereum_details block. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-provided key-value pairs. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_node_id`<sup>Required</sup> <a name="blockchain_node_id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId"></a>

```python
blockchain_node_id: str
```

- *Type:* str

ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_node_id BlockchainNodeEngineBlockchainNodes#blockchain_node_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of Blockchain Node being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#location BlockchainNodeEngineBlockchainNodes#location}

---

##### `blockchain_type`<sup>Optional</sup> <a name="blockchain_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.blockchainType"></a>

```python
blockchain_type: str
```

- *Type:* str

User-provided key-value pairs Possible values: ["ETHEREUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_type BlockchainNodeEngineBlockchainNodes#blockchain_type}

---

##### `ethereum_details`<sup>Optional</sup> <a name="ethereum_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails"></a>

```python
ethereum_details: BlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

ethereum_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#ethereum_details BlockchainNodeEngineBlockchainNodes#ethereum_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-provided key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#labels BlockchainNodeEngineBlockchainNodes#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConfig.property.timeouts"></a>

```python
timeouts: BlockchainNodeEngineBlockchainNodesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#timeouts BlockchainNodeEngineBlockchainNodes#timeouts}

---

### BlockchainNodeEngineBlockchainNodesConnectionInfo <a name="BlockchainNodeEngineBlockchainNodesConnectionInfo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo()
```


### BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo()
```


### BlockchainNodeEngineBlockchainNodesEthereumDetails <a name="BlockchainNodeEngineBlockchainNodesEthereumDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails(
  api_enable_admin: typing.Union[bool, IResolvable] = None,
  api_enable_debug: typing.Union[bool, IResolvable] = None,
  consensus_client: str = None,
  execution_client: str = None,
  fetchh_details: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails = None,
  network: str = None,
  node_type: str = None,
  validator_config: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin">api_enable_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables JSON-RPC access to functions in the admin namespace. Defaults to false. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug">api_enable_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables JSON-RPC access to functions in the debug namespace. Defaults to false. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient">consensus_client</a></code> | <code>str</code> | The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient">execution_client</a></code> | <code>str</code> | The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails">fetchh_details</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | geth_details block. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.network">network</a></code> | <code>str</code> | The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType">node_type</a></code> | <code>str</code> | The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"]. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig">validator_config</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | validator_config block. |

---

##### `api_enable_admin`<sup>Optional</sup> <a name="api_enable_admin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin"></a>

```python
api_enable_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the admin namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_admin BlockchainNodeEngineBlockchainNodes#api_enable_admin}

---

##### `api_enable_debug`<sup>Optional</sup> <a name="api_enable_debug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug"></a>

```python
api_enable_debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables JSON-RPC access to functions in the debug namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_debug BlockchainNodeEngineBlockchainNodes#api_enable_debug}

---

##### `consensus_client`<sup>Optional</sup> <a name="consensus_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient"></a>

```python
consensus_client: str
```

- *Type:* str

The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#consensus_client BlockchainNodeEngineBlockchainNodes#consensus_client}

---

##### `execution_client`<sup>Optional</sup> <a name="execution_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient"></a>

```python
execution_client: str
```

- *Type:* str

The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#execution_client BlockchainNodeEngineBlockchainNodes#execution_client}

---

##### `fetchh_details`<sup>Optional</sup> <a name="fetchh_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails"></a>

```python
fetchh_details: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

geth_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#geth_details BlockchainNodeEngineBlockchainNodes#geth_details}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.network"></a>

```python
network: str
```

- *Type:* str

The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#network BlockchainNodeEngineBlockchainNodes#network}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#node_type BlockchainNodeEngineBlockchainNodes#node_type}

---

##### `validator_config`<sup>Optional</sup> <a name="validator_config" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig"></a>

```python
validator_config: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

validator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#validator_config BlockchainNodeEngineBlockchainNodes#validator_config}

---

### BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints()
```


### BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails(
  garbage_collection_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode">garbage_collection_mode</a></code> | <code>str</code> | Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"]. |

---

##### `garbage_collection_mode`<sup>Optional</sup> <a name="garbage_collection_mode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode"></a>

```python
garbage_collection_mode: str
```

- *Type:* str

Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#garbage_collection_mode BlockchainNodeEngineBlockchainNodes#garbage_collection_mode}

---

### BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig(
  mev_relay_urls: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls">mev_relay_urls</a></code> | <code>typing.List[str]</code> | URLs for MEV-relay services to use for block building. |

---

##### `mev_relay_urls`<sup>Optional</sup> <a name="mev_relay_urls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls"></a>

```python
mev_relay_urls: typing.List[str]
```

- *Type:* typing.List[str]

URLs for MEV-relay services to use for block building.

When set, a managed MEV-boost service is configured on the beacon client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#mev_relay_urls BlockchainNodeEngineBlockchainNodes#mev_relay_urls}

---

### BlockchainNodeEngineBlockchainNodesTimeouts <a name="BlockchainNodeEngineBlockchainNodesTimeouts" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#create BlockchainNodeEngineBlockchainNodes#create}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#delete BlockchainNodeEngineBlockchainNodes#delete}. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#update BlockchainNodeEngineBlockchainNodes#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#create BlockchainNodeEngineBlockchainNodes#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#delete BlockchainNodeEngineBlockchainNodes#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#update BlockchainNodeEngineBlockchainNodes#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint">json_rpc_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint">websockets_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_rpc_api_endpoint`<sup>Required</sup> <a name="json_rpc_api_endpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint"></a>

```python
json_rpc_api_endpoint: str
```

- *Type:* str

---

##### `websockets_api_endpoint`<sup>Required</sup> <a name="websockets_api_endpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint"></a>

```python
websockets_api_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a>

---


### BlockchainNodeEngineBlockchainNodesConnectionInfoList <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoList" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference <a name="BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo">endpoint_info</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo">BlockchainNodeEngineBlockchainNodesConnectionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_info`<sup>Required</sup> <a name="endpoint_info" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo"></a>

```python
endpoint_info: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a>

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainNodeEngineBlockchainNodesConnectionInfo
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesConnectionInfo">BlockchainNodeEngineBlockchainNodesConnectionInfo</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint">beacon_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint">beacon_prometheus_metrics_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint">execution_client_prometheus_metrics_api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `beacon_api_endpoint`<sup>Required</sup> <a name="beacon_api_endpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint"></a>

```python
beacon_api_endpoint: str
```

- *Type:* str

---

##### `beacon_prometheus_metrics_api_endpoint`<sup>Required</sup> <a name="beacon_prometheus_metrics_api_endpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint"></a>

```python
beacon_prometheus_metrics_api_endpoint: str
```

- *Type:* str

---

##### `execution_client_prometheus_metrics_api_endpoint`<sup>Required</sup> <a name="execution_client_prometheus_metrics_api_endpoint" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint"></a>

```python
execution_client_prometheus_metrics_api_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode">reset_garbage_collection_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_garbage_collection_mode` <a name="reset_garbage_collection_mode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode"></a>

```python
def reset_garbage_collection_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput">garbage_collection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode">garbage_collection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `garbage_collection_mode_input`<sup>Optional</sup> <a name="garbage_collection_mode_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput"></a>

```python
garbage_collection_mode_input: str
```

- *Type:* str

---

##### `garbage_collection_mode`<sup>Required</sup> <a name="garbage_collection_mode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode"></a>

```python
garbage_collection_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails">put_fetchh_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig">put_validator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin">reset_api_enable_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug">reset_api_enable_debug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient">reset_consensus_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient">reset_execution_client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails">reset_fetchh_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig">reset_validator_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fetchh_details` <a name="put_fetchh_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails"></a>

```python
def put_fetchh_details(
  garbage_collection_mode: str = None
) -> None
```

###### `garbage_collection_mode`<sup>Optional</sup> <a name="garbage_collection_mode" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails.parameter.garbageCollectionMode"></a>

- *Type:* str

Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#garbage_collection_mode BlockchainNodeEngineBlockchainNodes#garbage_collection_mode}

---

##### `put_validator_config` <a name="put_validator_config" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig"></a>

```python
def put_validator_config(
  mev_relay_urls: typing.List[str] = None
) -> None
```

###### `mev_relay_urls`<sup>Optional</sup> <a name="mev_relay_urls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig.parameter.mevRelayUrls"></a>

- *Type:* typing.List[str]

URLs for MEV-relay services to use for block building.

When set, a managed MEV-boost service is configured on the beacon client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/blockchain_node_engine_blockchain_nodes#mev_relay_urls BlockchainNodeEngineBlockchainNodes#mev_relay_urls}

---

##### `reset_api_enable_admin` <a name="reset_api_enable_admin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin"></a>

```python
def reset_api_enable_admin() -> None
```

##### `reset_api_enable_debug` <a name="reset_api_enable_debug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug"></a>

```python
def reset_api_enable_debug() -> None
```

##### `reset_consensus_client` <a name="reset_consensus_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient"></a>

```python
def reset_consensus_client() -> None
```

##### `reset_execution_client` <a name="reset_execution_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient"></a>

```python
def reset_execution_client() -> None
```

##### `reset_fetchh_details` <a name="reset_fetchh_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails"></a>

```python
def reset_fetchh_details() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_validator_config` <a name="reset_validator_config" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig"></a>

```python
def reset_validator_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints">additional_endpoints</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails">fetchh_details</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig">validator_config</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput">api_enable_admin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput">api_enable_debug_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput">consensus_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput">execution_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput">fetchh_details_input</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput">validator_config_input</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin">api_enable_admin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug">api_enable_debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient">consensus_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient">execution_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_endpoints`<sup>Required</sup> <a name="additional_endpoints" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints"></a>

```python
additional_endpoints: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a>

---

##### `fetchh_details`<sup>Required</sup> <a name="fetchh_details" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails"></a>

```python
fetchh_details: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a>

---

##### `validator_config`<sup>Required</sup> <a name="validator_config" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig"></a>

```python
validator_config: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a>

---

##### `api_enable_admin_input`<sup>Optional</sup> <a name="api_enable_admin_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput"></a>

```python
api_enable_admin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_enable_debug_input`<sup>Optional</sup> <a name="api_enable_debug_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput"></a>

```python
api_enable_debug_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consensus_client_input`<sup>Optional</sup> <a name="consensus_client_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput"></a>

```python
consensus_client_input: str
```

- *Type:* str

---

##### `execution_client_input`<sup>Optional</sup> <a name="execution_client_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput"></a>

```python
execution_client_input: str
```

- *Type:* str

---

##### `fetchh_details_input`<sup>Optional</sup> <a name="fetchh_details_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput"></a>

```python
fetchh_details_input: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `validator_config_input`<sup>Optional</sup> <a name="validator_config_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput"></a>

```python
validator_config_input: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---

##### `api_enable_admin`<sup>Required</sup> <a name="api_enable_admin" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin"></a>

```python
api_enable_admin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_enable_debug`<sup>Required</sup> <a name="api_enable_debug" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug"></a>

```python
api_enable_debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consensus_client`<sup>Required</sup> <a name="consensus_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient"></a>

```python
consensus_client: str
```

- *Type:* str

---

##### `execution_client`<sup>Required</sup> <a name="execution_client" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient"></a>

```python
execution_client: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetails">BlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---


### BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference <a name="BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls">reset_mev_relay_urls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mev_relay_urls` <a name="reset_mev_relay_urls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls"></a>

```python
def reset_mev_relay_urls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput">mev_relay_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls">mev_relay_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mev_relay_urls_input`<sup>Optional</sup> <a name="mev_relay_urls_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput"></a>

```python
mev_relay_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mev_relay_urls`<sup>Required</sup> <a name="mev_relay_urls" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls"></a>

```python
mev_relay_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---


### BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference <a name="BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import blockchain_node_engine_blockchain_nodes

blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BlockchainNodeEngineBlockchainNodesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.blockchainNodeEngineBlockchainNodes.BlockchainNodeEngineBlockchainNodesTimeouts">BlockchainNodeEngineBlockchainNodesTimeouts</a>]

---



