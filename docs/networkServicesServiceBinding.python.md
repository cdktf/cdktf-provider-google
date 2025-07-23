# `networkServicesServiceBinding` Submodule <a name="`networkServicesServiceBinding` Submodule" id="@cdktf/provider-google.networkServicesServiceBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesServiceBinding <a name="NetworkServicesServiceBinding" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding google_network_services_service_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBinding(
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
  service: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesServiceBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ServiceBinding resource. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.service">service</a></code> | <code>str</code> | The full Service Directory Service name of the format projects/* /locations/* /namespaces/* /services/*. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#id NetworkServicesServiceBinding#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServiceBinding resource. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#project NetworkServicesServiceBinding#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.name"></a>

- *Type:* str

Name of the ServiceBinding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#name NetworkServicesServiceBinding#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.service"></a>

- *Type:* str

The full Service Directory Service name of the format projects/* /locations/* /namespaces/* /services/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#service NetworkServicesServiceBinding#service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#description NetworkServicesServiceBinding#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#id NetworkServicesServiceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServiceBinding resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#labels NetworkServicesServiceBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#project NetworkServicesServiceBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#timeouts NetworkServicesServiceBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#create NetworkServicesServiceBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#delete NetworkServicesServiceBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#update NetworkServicesServiceBinding#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesServiceBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesServiceBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesServiceBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesServiceBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesServiceBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference">NetworkServicesServiceBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.timeouts"></a>

```python
timeouts: NetworkServicesServiceBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference">NetworkServicesServiceBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesServiceBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesServiceBindingConfig <a name="NetworkServicesServiceBindingConfig" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  service: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesServiceBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.name">name</a></code> | <code>str</code> | Name of the ServiceBinding resource. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.service">service</a></code> | <code>str</code> | The full Service Directory Service name of the format projects/* /locations/* /namespaces/* /services/*. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#id NetworkServicesServiceBinding#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServiceBinding resource. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#project NetworkServicesServiceBinding#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ServiceBinding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#name NetworkServicesServiceBinding#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The full Service Directory Service name of the format projects/* /locations/* /namespaces/* /services/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#service NetworkServicesServiceBinding#service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#description NetworkServicesServiceBinding#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#id NetworkServicesServiceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServiceBinding resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#labels NetworkServicesServiceBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#project NetworkServicesServiceBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesServiceBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#timeouts NetworkServicesServiceBinding#timeouts}

---

### NetworkServicesServiceBindingTimeouts <a name="NetworkServicesServiceBindingTimeouts" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#create NetworkServicesServiceBinding#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#delete NetworkServicesServiceBinding#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#update NetworkServicesServiceBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#create NetworkServicesServiceBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#delete NetworkServicesServiceBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_service_binding#update NetworkServicesServiceBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesServiceBindingTimeoutsOutputReference <a name="NetworkServicesServiceBindingTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_service_binding

networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesServiceBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesServiceBinding.NetworkServicesServiceBindingTimeouts">NetworkServicesServiceBindingTimeouts</a>]

---



