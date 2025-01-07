# `dialogflowFulfillment` Submodule <a name="`dialogflowFulfillment` Submodule" id="@cdktf/provider-google.dialogflowFulfillment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowFulfillment <a name="DialogflowFulfillment" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment google_dialogflow_fulfillment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  features: typing.Union[IResolvable, typing.List[DialogflowFulfillmentFeatures]] = None,
  generic_web_service: DialogflowFulfillmentGenericWebService = None,
  id: str = None,
  project: str = None,
  timeouts: DialogflowFulfillmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]</code> | features block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#display_name DialogflowFulfillment#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#enabled DialogflowFulfillment#enabled}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.features"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#features DialogflowFulfillment#features}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.genericWebService"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#generic_web_service DialogflowFulfillment#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#timeouts DialogflowFulfillment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures">put_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService">put_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService">reset_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_features` <a name="put_features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures"></a>

```python
def put_features(
  value: typing.Union[IResolvable, typing.List[DialogflowFulfillmentFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]

---

##### `put_generic_web_service` <a name="put_generic_web_service" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService"></a>

```python
def put_generic_web_service(
  uri: str,
  password: str = None,
  request_headers: typing.Mapping[str] = None,
  username: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.uri"></a>

- *Type:* str

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#uri DialogflowFulfillment#uri}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.password"></a>

- *Type:* str

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#password DialogflowFulfillment#password}

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.requestHeaders"></a>

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#request_headers DialogflowFulfillment#request_headers}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.username"></a>

- *Type:* str

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#username DialogflowFulfillment#username}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_generic_web_service` <a name="reset_generic_web_service" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService"></a>

```python
def reset_generic_web_service() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DialogflowFulfillment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DialogflowFulfillment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DialogflowFulfillment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DialogflowFulfillment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowFulfillment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features">features</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput">features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput">generic_web_service_input</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features"></a>

```python
features: DialogflowFulfillmentFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a>

---

##### `generic_web_service`<sup>Required</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService"></a>

```python
generic_web_service: DialogflowFulfillmentGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts"></a>

```python
timeouts: DialogflowFulfillmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput"></a>

```python
features_input: typing.Union[IResolvable, typing.List[DialogflowFulfillmentFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]

---

##### `generic_web_service_input`<sup>Optional</sup> <a name="generic_web_service_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput"></a>

```python
generic_web_service_input: DialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DialogflowFulfillmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowFulfillmentConfig <a name="DialogflowFulfillmentConfig" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  features: typing.Union[IResolvable, typing.List[DialogflowFulfillmentFeatures]] = None,
  generic_web_service: DialogflowFulfillmentGenericWebService = None,
  id: str = None,
  project: str = None,
  timeouts: DialogflowFulfillmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]</code> | features block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#display_name DialogflowFulfillment#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#enabled DialogflowFulfillment#enabled}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features"></a>

```python
features: typing.Union[IResolvable, typing.List[DialogflowFulfillmentFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#features DialogflowFulfillment#features}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService"></a>

```python
generic_web_service: DialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#generic_web_service DialogflowFulfillment#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#id DialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#project DialogflowFulfillment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts"></a>

```python
timeouts: DialogflowFulfillmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#timeouts DialogflowFulfillment#timeouts}

---

### DialogflowFulfillmentFeatures <a name="DialogflowFulfillmentFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type">type</a></code> | <code>str</code> | The type of the feature that enabled for fulfillment. * SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the feature that enabled for fulfillment. * SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#type DialogflowFulfillment#type}

---

### DialogflowFulfillmentGenericWebService <a name="DialogflowFulfillmentGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentGenericWebService(
  uri: str,
  password: str = None,
  request_headers: typing.Mapping[str] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri">uri</a></code> | <code>str</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password">password</a></code> | <code>str</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username">username</a></code> | <code>str</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri"></a>

```python
uri: str
```

- *Type:* str

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#uri DialogflowFulfillment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password"></a>

```python
password: str
```

- *Type:* str

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#password DialogflowFulfillment#password}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#request_headers DialogflowFulfillment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username"></a>

```python
username: str
```

- *Type:* str

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#username DialogflowFulfillment#username}

---

### DialogflowFulfillmentTimeouts <a name="DialogflowFulfillmentTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#create DialogflowFulfillment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#delete DialogflowFulfillment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/dialogflow_fulfillment#update DialogflowFulfillment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowFulfillmentFeaturesList <a name="DialogflowFulfillmentFeaturesList" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DialogflowFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DialogflowFulfillmentFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]]

---


### DialogflowFulfillmentFeaturesOutputReference <a name="DialogflowFulfillmentFeaturesOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowFulfillmentFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures">DialogflowFulfillmentFeatures</a>]

---


### DialogflowFulfillmentGenericWebServiceOutputReference <a name="DialogflowFulfillmentGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```python
internal_value: DialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---


### DialogflowFulfillmentTimeoutsOutputReference <a name="DialogflowFulfillmentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dialogflow_fulfillment

dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DialogflowFulfillmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>]

---



