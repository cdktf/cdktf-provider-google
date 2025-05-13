# `discoveryEngineChatEngine` Submodule <a name="`discoveryEngineChatEngine` Submodule" id="@cdktf/provider-google.discoveryEngineChatEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineChatEngine <a name="DiscoveryEngineChatEngine" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine google_discovery_engine_chat_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chat_engine_config: DiscoveryEngineChatEngineChatEngineConfig,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  common_config: DiscoveryEngineChatEngineCommonConfig = None,
  id: str = None,
  industry_vertical: str = None,
  project: str = None,
  timeouts: DiscoveryEngineChatEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.chatEngineConfig">chat_engine_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_engine_config`<sup>Required</sup> <a name="chat_engine_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.chatEngineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#chat_engine_config DiscoveryEngineChatEngine#chat_engine_config}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#collection_id DiscoveryEngineChatEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* typing.List[str]

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#data_store_ids DiscoveryEngineChatEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#display_name DiscoveryEngineChatEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.engineId"></a>

- *Type:* str

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#engine_id DiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.location"></a>

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#common_config DiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#industry_vertical DiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#timeouts DiscoveryEngineChatEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig">put_chat_engine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig">put_common_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetCommonConfig">reset_common_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetIndustryVertical">reset_industry_vertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_chat_engine_config` <a name="put_chat_engine_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig"></a>

```python
def put_chat_engine_config(
  agent_creation_config: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig = None,
  allow_cross_region: typing.Union[bool, IResolvable] = None,
  dialogflow_agent_to_link: str = None
) -> None
```

###### `agent_creation_config`<sup>Optional</sup> <a name="agent_creation_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig.parameter.agentCreationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#agent_creation_config DiscoveryEngineChatEngine#agent_creation_config}

---

###### `allow_cross_region`<sup>Optional</sup> <a name="allow_cross_region" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig.parameter.allowCrossRegion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the flag set to true, we allow the agent and engine are in different locations, otherwise the agent and engine are required to be in the same location.

The flag is set to false by default.
Note that the 'allow_cross_region' are one-time consumed by and passed
to EngineService.CreateEngine. It means they cannot be retrieved using
EngineService.GetEngine or EngineService.ListEngines API after engine
creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#allow_cross_region DiscoveryEngineChatEngine#allow_cross_region}

---

###### `dialogflow_agent_to_link`<sup>Optional</sup> <a name="dialogflow_agent_to_link" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig.parameter.dialogflowAgentToLink"></a>

- *Type:* str

The resource name of an existing Dialogflow agent to link to this Chat Engine.

Format: 'projects/<Project_ID>/locations/<Location_ID>/agents/<Agent_ID>'.
Exactly one of 'agent_creation_config' or 'dialogflow_agent_to_link' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#dialogflow_agent_to_link DiscoveryEngineChatEngine#dialogflow_agent_to_link}

---

##### `put_common_config` <a name="put_common_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig"></a>

```python
def put_common_config(
  company_name: str = None
) -> None
```

###### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig.parameter.companyName"></a>

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#company_name DiscoveryEngineChatEngine#company_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}.

---

##### `reset_common_config` <a name="reset_common_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetCommonConfig"></a>

```python
def reset_common_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_industry_vertical` <a name="reset_industry_vertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetIndustryVertical"></a>

```python
def reset_industry_vertical() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineChatEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineChatEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineChatEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfig">chat_engine_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineMetadata">chat_engine_metadata</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList">DiscoveryEngineChatEngineChatEngineMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference">DiscoveryEngineChatEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference">DiscoveryEngineChatEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfigInput">chat_engine_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfigInput">common_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIdsInput">data_store_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_engine_config`<sup>Required</sup> <a name="chat_engine_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfig"></a>

```python
chat_engine_config: DiscoveryEngineChatEngineChatEngineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigOutputReference</a>

---

##### `chat_engine_metadata`<sup>Required</sup> <a name="chat_engine_metadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineMetadata"></a>

```python
chat_engine_metadata: DiscoveryEngineChatEngineChatEngineMetadataList
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList">DiscoveryEngineChatEngineChatEngineMetadataList</a>

---

##### `common_config`<sup>Required</sup> <a name="common_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfig"></a>

```python
common_config: DiscoveryEngineChatEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference">DiscoveryEngineChatEngineCommonConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeouts"></a>

```python
timeouts: DiscoveryEngineChatEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference">DiscoveryEngineChatEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `chat_engine_config_input`<sup>Optional</sup> <a name="chat_engine_config_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfigInput"></a>

```python
chat_engine_config_input: DiscoveryEngineChatEngineChatEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `common_config_input`<sup>Optional</sup> <a name="common_config_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfigInput"></a>

```python
common_config_input: DiscoveryEngineChatEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---

##### `data_store_ids_input`<sup>Optional</sup> <a name="data_store_ids_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIdsInput"></a>

```python
data_store_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DiscoveryEngineChatEngineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineChatEngineChatEngineConfig <a name="DiscoveryEngineChatEngineChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig(
  agent_creation_config: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig = None,
  allow_cross_region: typing.Union[bool, IResolvable] = None,
  dialogflow_agent_to_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig">agent_creation_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | agent_creation_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.allowCrossRegion">allow_cross_region</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the flag set to true, we allow the agent and engine are in different locations, otherwise the agent and engine are required to be in the same location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink">dialogflow_agent_to_link</a></code> | <code>str</code> | The resource name of an existing Dialogflow agent to link to this Chat Engine. |

---

##### `agent_creation_config`<sup>Optional</sup> <a name="agent_creation_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig"></a>

```python
agent_creation_config: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#agent_creation_config DiscoveryEngineChatEngine#agent_creation_config}

---

##### `allow_cross_region`<sup>Optional</sup> <a name="allow_cross_region" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.allowCrossRegion"></a>

```python
allow_cross_region: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the flag set to true, we allow the agent and engine are in different locations, otherwise the agent and engine are required to be in the same location.

The flag is set to false by default.
Note that the 'allow_cross_region' are one-time consumed by and passed
to EngineService.CreateEngine. It means they cannot be retrieved using
EngineService.GetEngine or EngineService.ListEngines API after engine
creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#allow_cross_region DiscoveryEngineChatEngine#allow_cross_region}

---

##### `dialogflow_agent_to_link`<sup>Optional</sup> <a name="dialogflow_agent_to_link" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink"></a>

```python
dialogflow_agent_to_link: str
```

- *Type:* str

The resource name of an existing Dialogflow agent to link to this Chat Engine.

Format: 'projects/<Project_ID>/locations/<Location_ID>/agents/<Agent_ID>'.
Exactly one of 'agent_creation_config' or 'dialogflow_agent_to_link' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#dialogflow_agent_to_link DiscoveryEngineChatEngine#dialogflow_agent_to_link}

---

### DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig <a name="DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig(
  default_language_code: str,
  time_zone: str,
  business: str = None,
  location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business">business</a></code> | <code>str</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location">location</a></code> | <code>str</code> | Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine. |

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#default_language_code DiscoveryEngineChatEngine#default_language_code}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#time_zone DiscoveryEngineChatEngine#time_zone}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business"></a>

```python
business: str
```

- *Type:* str

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#business DiscoveryEngineChatEngine#business}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

### DiscoveryEngineChatEngineChatEngineMetadata <a name="DiscoveryEngineChatEngineChatEngineMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata()
```


### DiscoveryEngineChatEngineCommonConfig <a name="DiscoveryEngineChatEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig(
  company_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.property.companyName">company_name</a></code> | <code>str</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#company_name DiscoveryEngineChatEngine#company_name}

---

### DiscoveryEngineChatEngineConfig <a name="DiscoveryEngineChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chat_engine_config: DiscoveryEngineChatEngineChatEngineConfig,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  common_config: DiscoveryEngineChatEngineCommonConfig = None,
  id: str = None,
  industry_vertical: str = None,
  project: str = None,
  timeouts: DiscoveryEngineChatEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.chatEngineConfig">chat_engine_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.engineId">engine_id</a></code> | <code>str</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.commonConfig">common_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chat_engine_config`<sup>Required</sup> <a name="chat_engine_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.chatEngineConfig"></a>

```python
chat_engine_config: DiscoveryEngineChatEngineChatEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#chat_engine_config DiscoveryEngineChatEngine#chat_engine_config}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#collection_id DiscoveryEngineChatEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#data_store_ids DiscoveryEngineChatEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#display_name DiscoveryEngineChatEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#engine_id DiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.commonConfig"></a>

```python
common_config: DiscoveryEngineChatEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#common_config DiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#industry_vertical DiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineChatEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#timeouts DiscoveryEngineChatEngine#timeouts}

---

### DiscoveryEngineChatEngineTimeouts <a name="DiscoveryEngineChatEngineTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference <a name="DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness">reset_business</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_business` <a name="reset_business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness"></a>

```python
def reset_business() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput">business_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business">business</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_input`<sup>Optional</sup> <a name="business_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput"></a>

```python
business_input: str
```

- *Type:* str

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business"></a>

```python
business: str
```

- *Type:* str

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---


### DiscoveryEngineChatEngineChatEngineConfigOutputReference <a name="DiscoveryEngineChatEngineChatEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig">put_agent_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig">reset_agent_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAllowCrossRegion">reset_allow_cross_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink">reset_dialogflow_agent_to_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_creation_config` <a name="put_agent_creation_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig"></a>

```python
def put_agent_creation_config(
  default_language_code: str,
  time_zone: str,
  business: str = None,
  location: str = None
) -> None
```

###### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#default_language_code DiscoveryEngineChatEngine#default_language_code}

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.timeZone"></a>

- *Type:* str

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#time_zone DiscoveryEngineChatEngine#time_zone}

---

###### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.business"></a>

- *Type:* str

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#business DiscoveryEngineChatEngine#business}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.location"></a>

- *Type:* str

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

##### `reset_agent_creation_config` <a name="reset_agent_creation_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig"></a>

```python
def reset_agent_creation_config() -> None
```

##### `reset_allow_cross_region` <a name="reset_allow_cross_region" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAllowCrossRegion"></a>

```python
def reset_allow_cross_region() -> None
```

##### `reset_dialogflow_agent_to_link` <a name="reset_dialogflow_agent_to_link" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink"></a>

```python
def reset_dialogflow_agent_to_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig">agent_creation_config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput">agent_creation_config_input</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegionInput">allow_cross_region_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput">dialogflow_agent_to_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegion">allow_cross_region</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink">dialogflow_agent_to_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_creation_config`<sup>Required</sup> <a name="agent_creation_config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig"></a>

```python
agent_creation_config: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a>

---

##### `agent_creation_config_input`<sup>Optional</sup> <a name="agent_creation_config_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput"></a>

```python
agent_creation_config_input: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `allow_cross_region_input`<sup>Optional</sup> <a name="allow_cross_region_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegionInput"></a>

```python
allow_cross_region_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dialogflow_agent_to_link_input`<sup>Optional</sup> <a name="dialogflow_agent_to_link_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput"></a>

```python
dialogflow_agent_to_link_input: str
```

- *Type:* str

---

##### `allow_cross_region`<sup>Required</sup> <a name="allow_cross_region" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegion"></a>

```python
allow_cross_region: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dialogflow_agent_to_link`<sup>Required</sup> <a name="dialogflow_agent_to_link" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink"></a>

```python
dialogflow_agent_to_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineChatEngineChatEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---


### DiscoveryEngineChatEngineChatEngineMetadataList <a name="DiscoveryEngineChatEngineChatEngineMetadataList" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineChatEngineChatEngineMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DiscoveryEngineChatEngineChatEngineMetadataOutputReference <a name="DiscoveryEngineChatEngineChatEngineMetadataOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent">dialogflow_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata">DiscoveryEngineChatEngineChatEngineMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dialogflow_agent`<sup>Required</sup> <a name="dialogflow_agent" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent"></a>

```python
dialogflow_agent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineChatEngineChatEngineMetadata
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata">DiscoveryEngineChatEngineChatEngineMetadata</a>

---


### DiscoveryEngineChatEngineCommonConfigOutputReference <a name="DiscoveryEngineChatEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName">reset_company_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_company_name` <a name="reset_company_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName"></a>

```python
def reset_company_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineChatEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---


### DiscoveryEngineChatEngineTimeoutsOutputReference <a name="DiscoveryEngineChatEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_chat_engine

discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DiscoveryEngineChatEngineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>]

---



