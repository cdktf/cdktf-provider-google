# `accessContextManagerServicePerimeterDryRunResource` Submodule <a name="`accessContextManagerServicePerimeterDryRunResource` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterDryRunResource <a name="AccessContextManagerServicePerimeterDryRunResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource google_access_context_manager_service_perimeter_dry_run_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  perimeter_name: str,
  resource: str,
  id: str = None,
  timeouts: AccessContextManagerServicePerimeterDryRunResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.perimeterName">perimeter_name</a></code> | <code>str</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.resource">resource</a></code> | <code>str</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#id AccessContextManagerServicePerimeterDryRunResource#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `perimeter_name`<sup>Required</sup> <a name="perimeter_name" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.perimeterName"></a>

- *Type:* str

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#perimeter_name AccessContextManagerServicePerimeterDryRunResource#perimeter_name}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.resource"></a>

- *Type:* str

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#resource AccessContextManagerServicePerimeterDryRunResource#resource}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#id AccessContextManagerServicePerimeterDryRunResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#timeouts AccessContextManagerServicePerimeterDryRunResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#create AccessContextManagerServicePerimeterDryRunResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#delete AccessContextManagerServicePerimeterDryRunResource#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessContextManagerServicePerimeterDryRunResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessContextManagerServicePerimeterDryRunResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessContextManagerServicePerimeterDryRunResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessContextManagerServicePerimeterDryRunResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterDryRunResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterNameInput">perimeter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterName">perimeter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resource">resource</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeouts"></a>

```python
timeouts: AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference">AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `perimeter_name_input`<sup>Optional</sup> <a name="perimeter_name_input" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterNameInput"></a>

```python
perimeter_name_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AccessContextManagerServicePerimeterDryRunResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `perimeter_name`<sup>Required</sup> <a name="perimeter_name" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.perimeterName"></a>

```python
perimeter_name: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterDryRunResourceConfig <a name="AccessContextManagerServicePerimeterDryRunResourceConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  perimeter_name: str,
  resource: str,
  id: str = None,
  timeouts: AccessContextManagerServicePerimeterDryRunResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.perimeterName">perimeter_name</a></code> | <code>str</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.resource">resource</a></code> | <code>str</code> | A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#id AccessContextManagerServicePerimeterDryRunResource#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `perimeter_name`<sup>Required</sup> <a name="perimeter_name" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.perimeterName"></a>

```python
perimeter_name: str
```

- *Type:* str

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#perimeter_name AccessContextManagerServicePerimeterDryRunResource#perimeter_name}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.resource"></a>

```python
resource: str
```

- *Type:* str

A GCP resource that is inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#resource AccessContextManagerServicePerimeterDryRunResource#resource}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#id AccessContextManagerServicePerimeterDryRunResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceConfig.property.timeouts"></a>

```python
timeouts: AccessContextManagerServicePerimeterDryRunResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#timeouts AccessContextManagerServicePerimeterDryRunResource#timeouts}

---

### AccessContextManagerServicePerimeterDryRunResourceTimeouts <a name="AccessContextManagerServicePerimeterDryRunResourceTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#create AccessContextManagerServicePerimeterDryRunResource#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#delete AccessContextManagerServicePerimeterDryRunResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#create AccessContextManagerServicePerimeterDryRunResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/access_context_manager_service_perimeter_dry_run_resource#delete AccessContextManagerServicePerimeterDryRunResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter_dry_run_resource

accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessContextManagerServicePerimeterDryRunResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterDryRunResource.AccessContextManagerServicePerimeterDryRunResourceTimeouts">AccessContextManagerServicePerimeterDryRunResourceTimeouts</a>]

---



