# `google_access_context_manager_service_perimeter`

Refer to the Terraform Registory for docs: [`google_access_context_manager_service_perimeter`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter).

# `accessContextManagerServicePerimeter` Submodule <a name="`accessContextManagerServicePerimeter` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeter <a name="AccessContextManagerServicePerimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter google_access_context_manager_service_perimeter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter(
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
  parent: str,
  title: str,
  description: str = None,
  id: str = None,
  perimeter_type: str = None,
  spec: AccessContextManagerServicePerimeterSpec = None,
  status: AccessContextManagerServicePerimeterStatus = None,
  timeouts: AccessContextManagerServicePerimeterTimeouts = None,
  use_explicit_dry_run_spec: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.name">name</a></code> | <code>str</code> | Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.title">title</a></code> | <code>str</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the ServicePerimeter and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#id AccessContextManagerServicePerimeter#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.perimeterType">perimeter_type</a></code> | <code>str</code> | Specifies the type of the Perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.status">status</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.useExplicitDryRunSpec">use_explicit_dry_run_spec</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use explicit dry run spec flag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.name"></a>

- *Type:* str

Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#name AccessContextManagerServicePerimeter#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.parent"></a>

- *Type:* str

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#parent AccessContextManagerServicePerimeter#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.title"></a>

- *Type:* str

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#title AccessContextManagerServicePerimeter#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.description"></a>

- *Type:* str

Description of the ServicePerimeter and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#description AccessContextManagerServicePerimeter#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#id AccessContextManagerServicePerimeter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perimeter_type`<sup>Optional</sup> <a name="perimeter_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.perimeterType"></a>

- *Type:* str

Specifies the type of the Perimeter.

There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#perimeter_type AccessContextManagerServicePerimeter#perimeter_type}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#spec AccessContextManagerServicePerimeter#spec}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.status"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#status AccessContextManagerServicePerimeter#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#timeouts AccessContextManagerServicePerimeter#timeouts}

---

##### `use_explicit_dry_run_spec`<sup>Optional</sup> <a name="use_explicit_dry_run_spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.Initializer.parameter.useExplicitDryRunSpec"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use explicit dry run spec flag.

Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#use_explicit_dry_run_spec AccessContextManagerServicePerimeter#use_explicit_dry_run_spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus">put_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetPerimeterType">reset_perimeter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetUseExplicitDryRunSpec">reset_use_explicit_dry_run_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec"></a>

```python
def put_spec(
  access_levels: typing.List[str] = None,
  egress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPolicies]] = None,
  ingress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPolicies]] = None,
  resources: typing.List[str] = None,
  restricted_services: typing.List[str] = None,
  vpc_accessible_services: AccessContextManagerServicePerimeterSpecVpcAccessibleServices = None
) -> None
```

###### `access_levels`<sup>Optional</sup> <a name="access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec.parameter.accessLevels"></a>

- *Type:* typing.List[str]

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#access_levels AccessContextManagerServicePerimeter#access_levels}

---

###### `egress_policies`<sup>Optional</sup> <a name="egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec.parameter.egressPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_policies AccessContextManagerServicePerimeter#egress_policies}

---

###### `ingress_policies`<sup>Optional</sup> <a name="ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec.parameter.ingressPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_policies AccessContextManagerServicePerimeter#ingress_policies}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec.parameter.resources"></a>

- *Type:* typing.List[str]

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

###### `restricted_services`<sup>Optional</sup> <a name="restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec.parameter.restrictedServices"></a>

- *Type:* typing.List[str]

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#restricted_services AccessContextManagerServicePerimeter#restricted_services}

---

###### `vpc_accessible_services`<sup>Optional</sup> <a name="vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putSpec.parameter.vpcAccessibleServices"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#vpc_accessible_services AccessContextManagerServicePerimeter#vpc_accessible_services}

---

##### `put_status` <a name="put_status" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus"></a>

```python
def put_status(
  access_levels: typing.List[str] = None,
  egress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPolicies]] = None,
  ingress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPolicies]] = None,
  resources: typing.List[str] = None,
  restricted_services: typing.List[str] = None,
  vpc_accessible_services: AccessContextManagerServicePerimeterStatusVpcAccessibleServices = None
) -> None
```

###### `access_levels`<sup>Optional</sup> <a name="access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus.parameter.accessLevels"></a>

- *Type:* typing.List[str]

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#access_levels AccessContextManagerServicePerimeter#access_levels}

---

###### `egress_policies`<sup>Optional</sup> <a name="egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus.parameter.egressPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_policies AccessContextManagerServicePerimeter#egress_policies}

---

###### `ingress_policies`<sup>Optional</sup> <a name="ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus.parameter.ingressPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_policies AccessContextManagerServicePerimeter#ingress_policies}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus.parameter.resources"></a>

- *Type:* typing.List[str]

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

###### `restricted_services`<sup>Optional</sup> <a name="restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus.parameter.restrictedServices"></a>

- *Type:* typing.List[str]

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#restricted_services AccessContextManagerServicePerimeter#restricted_services}

---

###### `vpc_accessible_services`<sup>Optional</sup> <a name="vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putStatus.parameter.vpcAccessibleServices"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#vpc_accessible_services AccessContextManagerServicePerimeter#vpc_accessible_services}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#create AccessContextManagerServicePerimeter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#delete AccessContextManagerServicePerimeter#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#update AccessContextManagerServicePerimeter#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_perimeter_type` <a name="reset_perimeter_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetPerimeterType"></a>

```python
def reset_perimeter_type() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_explicit_dry_run_spec` <a name="reset_use_explicit_dry_run_spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.resetUseExplicitDryRunSpec"></a>

```python
def reset_use_explicit_dry_run_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference">AccessContextManagerServicePerimeterSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference">AccessContextManagerServicePerimeterStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference">AccessContextManagerServicePerimeterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.perimeterTypeInput">perimeter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.statusInput">status_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.useExplicitDryRunSpecInput">use_explicit_dry_run_spec_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.perimeterType">perimeter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.useExplicitDryRunSpec">use_explicit_dry_run_spec</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.spec"></a>

```python
spec: AccessContextManagerServicePerimeterSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference">AccessContextManagerServicePerimeterSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.status"></a>

```python
status: AccessContextManagerServicePerimeterStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference">AccessContextManagerServicePerimeterStatusOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.timeouts"></a>

```python
timeouts: AccessContextManagerServicePerimeterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference">AccessContextManagerServicePerimeterTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `perimeter_type_input`<sup>Optional</sup> <a name="perimeter_type_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.perimeterTypeInput"></a>

```python
perimeter_type_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.specInput"></a>

```python
spec_input: AccessContextManagerServicePerimeterSpec
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.statusInput"></a>

```python
status_input: AccessContextManagerServicePerimeterStatus
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AccessContextManagerServicePerimeterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a>, cdktf.IResolvable]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `use_explicit_dry_run_spec_input`<sup>Optional</sup> <a name="use_explicit_dry_run_spec_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.useExplicitDryRunSpecInput"></a>

```python
use_explicit_dry_run_spec_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `perimeter_type`<sup>Required</sup> <a name="perimeter_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.perimeterType"></a>

```python
perimeter_type: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `use_explicit_dry_run_spec`<sup>Required</sup> <a name="use_explicit_dry_run_spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.useExplicitDryRunSpec"></a>

```python
use_explicit_dry_run_spec: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterConfig <a name="AccessContextManagerServicePerimeterConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  title: str,
  description: str = None,
  id: str = None,
  perimeter_type: str = None,
  spec: AccessContextManagerServicePerimeterSpec = None,
  status: AccessContextManagerServicePerimeterStatus = None,
  timeouts: AccessContextManagerServicePerimeterTimeouts = None,
  use_explicit_dry_run_spec: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.name">name</a></code> | <code>str</code> | Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.parent">parent</a></code> | <code>str</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.title">title</a></code> | <code>str</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.description">description</a></code> | <code>str</code> | Description of the ServicePerimeter and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#id AccessContextManagerServicePerimeter#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.perimeterType">perimeter_type</a></code> | <code>str</code> | Specifies the type of the Perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.useExplicitDryRunSpec">use_explicit_dry_run_spec</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use explicit dry run spec flag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#name AccessContextManagerServicePerimeter#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#parent AccessContextManagerServicePerimeter#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#title AccessContextManagerServicePerimeter#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the ServicePerimeter and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#description AccessContextManagerServicePerimeter#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#id AccessContextManagerServicePerimeter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perimeter_type`<sup>Optional</sup> <a name="perimeter_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.perimeterType"></a>

```python
perimeter_type: str
```

- *Type:* str

Specifies the type of the Perimeter.

There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#perimeter_type AccessContextManagerServicePerimeter#perimeter_type}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.spec"></a>

```python
spec: AccessContextManagerServicePerimeterSpec
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#spec AccessContextManagerServicePerimeter#spec}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.status"></a>

```python
status: AccessContextManagerServicePerimeterStatus
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#status AccessContextManagerServicePerimeter#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.timeouts"></a>

```python
timeouts: AccessContextManagerServicePerimeterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#timeouts AccessContextManagerServicePerimeter#timeouts}

---

##### `use_explicit_dry_run_spec`<sup>Optional</sup> <a name="use_explicit_dry_run_spec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterConfig.property.useExplicitDryRunSpec"></a>

```python
use_explicit_dry_run_spec: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use explicit dry run spec flag.

Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#use_explicit_dry_run_spec AccessContextManagerServicePerimeter#use_explicit_dry_run_spec}

---

### AccessContextManagerServicePerimeterSpec <a name="AccessContextManagerServicePerimeterSpec" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec(
  access_levels: typing.List[str] = None,
  egress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPolicies]] = None,
  ingress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPolicies]] = None,
  resources: typing.List[str] = None,
  restricted_services: typing.List[str] = None,
  vpc_accessible_services: AccessContextManagerServicePerimeterSpecVpcAccessibleServices = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.accessLevels">access_levels</a></code> | <code>typing.List[str]</code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.egressPolicies">egress_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]</code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.ingressPolicies">ingress_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]</code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.restrictedServices">restricted_services</a></code> | <code>typing.List[str]</code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.vpcAccessibleServices">vpc_accessible_services</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `access_levels`<sup>Optional</sup> <a name="access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.accessLevels"></a>

```python
access_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#access_levels AccessContextManagerServicePerimeter#access_levels}

---

##### `egress_policies`<sup>Optional</sup> <a name="egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.egressPolicies"></a>

```python
egress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_policies AccessContextManagerServicePerimeter#egress_policies}

---

##### `ingress_policies`<sup>Optional</sup> <a name="ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.ingressPolicies"></a>

```python
ingress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_policies AccessContextManagerServicePerimeter#ingress_policies}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

##### `restricted_services`<sup>Optional</sup> <a name="restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.restrictedServices"></a>

```python
restricted_services: typing.List[str]
```

- *Type:* typing.List[str]

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#restricted_services AccessContextManagerServicePerimeter#restricted_services}

---

##### `vpc_accessible_services`<sup>Optional</sup> <a name="vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec.property.vpcAccessibleServices"></a>

```python
vpc_accessible_services: AccessContextManagerServicePerimeterSpecVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#vpc_accessible_services AccessContextManagerServicePerimeter#vpc_accessible_services}

---

### AccessContextManagerServicePerimeterSpecEgressPolicies <a name="AccessContextManagerServicePerimeterSpecEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies(
  egress_from: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom = None,
  egress_to: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies.property.egressFrom">egress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies.property.egressTo">egress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `egress_from`<sup>Optional</sup> <a name="egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies.property.egressFrom"></a>

```python
egress_from: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_from AccessContextManagerServicePerimeter#egress_from}

---

##### `egress_to`<sup>Optional</sup> <a name="egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies.property.egressTo"></a>

```python
egress_to: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_to AccessContextManagerServicePerimeter#egress_to}

---

### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom(
  identities: typing.List[str] = None,
  identity_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identities">identities</a></code> | <code>typing.List[str]</code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identityType">identity_type</a></code> | <code>str</code> | Specifies the type of identities that are allowed access to outside the  perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Specifies the type of identities that are allowed access to outside the  perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo(
  external_resources: typing.List[str] = None,
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations]] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.externalResources">external_resources</a></code> | <code>typing.List[str]</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza. |

---

##### `external_resources`<sup>Optional</sup> <a name="external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.externalResources"></a>

```python
external_resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#external_resources AccessContextManagerServicePerimeter#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations(
  method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors]] = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.methodSelectors">method_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.serviceName">service_name</a></code> | <code>str</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `method_selectors`<sup>Optional</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```python
method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method_selectors AccessContextManagerServicePerimeter#method_selectors}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#service_name AccessContextManagerServicePerimeter#service_name}

---

### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors(
  method: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>str</code> | Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>str</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```python
method: str
```

- *Type:* str

Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method AccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```python
permission: str
```

- *Type:* str

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#permission AccessContextManagerServicePerimeter#permission}

---

### AccessContextManagerServicePerimeterSpecIngressPolicies <a name="AccessContextManagerServicePerimeterSpecIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies(
  ingress_from: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom = None,
  ingress_to: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `ingress_from`<sup>Optional</sup> <a name="ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressFrom"></a>

```python
ingress_from: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_from AccessContextManagerServicePerimeter#ingress_from}

---

##### `ingress_to`<sup>Optional</sup> <a name="ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressTo"></a>

```python
ingress_to: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_to AccessContextManagerServicePerimeter#ingress_to}

---

### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom(
  identities: typing.List[str] = None,
  identity_type: str = None,
  sources: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identities">identities</a></code> | <code>typing.List[str]</code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identityType">identity_type</a></code> | <code>str</code> | Specifies the type of identities that are allowed access from outside the  perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.sources">sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]</code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Specifies the type of identities that are allowed access from outside the  perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.sources"></a>

```python
sources: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#sources AccessContextManagerServicePerimeter#sources}

---

### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources(
  access_level: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.accessLevel">access_level</a></code> | <code>str</code> | An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.resource">resource</a></code> | <code>str</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#access_level AccessContextManagerServicePerimeter#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.resource"></a>

```python
resource: str
```

- *Type:* str

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resource AccessContextManagerServicePerimeter#resource}

---

### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo(
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations]] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations(
  method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors]] = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.methodSelectors">method_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.serviceName">service_name</a></code> | <code>str</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `method_selectors`<sup>Optional</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```python
method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method_selectors AccessContextManagerServicePerimeter#method_selectors}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#service_name AccessContextManagerServicePerimeter#service_name}

---

### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors(
  method: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>str</code> | Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>str</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```python
method: str
```

- *Type:* str

Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method AccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```python
permission: str
```

- *Type:* str

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#permission AccessContextManagerServicePerimeter#permission}

---

### AccessContextManagerServicePerimeterSpecVpcAccessibleServices <a name="AccessContextManagerServicePerimeterSpecVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices(
  allowed_services: typing.List[str] = None,
  enable_restriction: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.allowedServices">allowed_services</a></code> | <code>typing.List[str]</code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.enableRestriction">enable_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `allowed_services`<sup>Optional</sup> <a name="allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.allowedServices"></a>

```python
allowed_services: typing.List[str]
```

- *Type:* typing.List[str]

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#allowed_services AccessContextManagerServicePerimeter#allowed_services}

---

##### `enable_restriction`<sup>Optional</sup> <a name="enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.enableRestriction"></a>

```python
enable_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#enable_restriction AccessContextManagerServicePerimeter#enable_restriction}

---

### AccessContextManagerServicePerimeterStatus <a name="AccessContextManagerServicePerimeterStatus" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus(
  access_levels: typing.List[str] = None,
  egress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPolicies]] = None,
  ingress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPolicies]] = None,
  resources: typing.List[str] = None,
  restricted_services: typing.List[str] = None,
  vpc_accessible_services: AccessContextManagerServicePerimeterStatusVpcAccessibleServices = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.accessLevels">access_levels</a></code> | <code>typing.List[str]</code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.egressPolicies">egress_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]</code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.ingressPolicies">ingress_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]</code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.restrictedServices">restricted_services</a></code> | <code>typing.List[str]</code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.vpcAccessibleServices">vpc_accessible_services</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `access_levels`<sup>Optional</sup> <a name="access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.accessLevels"></a>

```python
access_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#access_levels AccessContextManagerServicePerimeter#access_levels}

---

##### `egress_policies`<sup>Optional</sup> <a name="egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.egressPolicies"></a>

```python
egress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_policies AccessContextManagerServicePerimeter#egress_policies}

---

##### `ingress_policies`<sup>Optional</sup> <a name="ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.ingressPolicies"></a>

```python
ingress_policies: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_policies AccessContextManagerServicePerimeter#ingress_policies}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

##### `restricted_services`<sup>Optional</sup> <a name="restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.restrictedServices"></a>

```python
restricted_services: typing.List[str]
```

- *Type:* typing.List[str]

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#restricted_services AccessContextManagerServicePerimeter#restricted_services}

---

##### `vpc_accessible_services`<sup>Optional</sup> <a name="vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus.property.vpcAccessibleServices"></a>

```python
vpc_accessible_services: AccessContextManagerServicePerimeterStatusVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#vpc_accessible_services AccessContextManagerServicePerimeter#vpc_accessible_services}

---

### AccessContextManagerServicePerimeterStatusEgressPolicies <a name="AccessContextManagerServicePerimeterStatusEgressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies(
  egress_from: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom = None,
  egress_to: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies.property.egressFrom">egress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies.property.egressTo">egress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `egress_from`<sup>Optional</sup> <a name="egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies.property.egressFrom"></a>

```python
egress_from: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_from AccessContextManagerServicePerimeter#egress_from}

---

##### `egress_to`<sup>Optional</sup> <a name="egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies.property.egressTo"></a>

```python
egress_to: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#egress_to AccessContextManagerServicePerimeter#egress_to}

---

### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom(
  identities: typing.List[str] = None,
  identity_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identities">identities</a></code> | <code>typing.List[str]</code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identityType">identity_type</a></code> | <code>str</code> | Specifies the type of identities that are allowed access to outside the  perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Specifies the type of identities that are allowed access to outside the  perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo(
  external_resources: typing.List[str] = None,
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations]] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.externalResources">external_resources</a></code> | <code>typing.List[str]</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza. |

---

##### `external_resources`<sup>Optional</sup> <a name="external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.externalResources"></a>

```python
external_resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#external_resources AccessContextManagerServicePerimeter#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations(
  method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors]] = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.methodSelectors">method_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.serviceName">service_name</a></code> | <code>str</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `method_selectors`<sup>Optional</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```python
method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method_selectors AccessContextManagerServicePerimeter#method_selectors}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#service_name AccessContextManagerServicePerimeter#service_name}

---

### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors(
  method: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>str</code> | Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>str</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```python
method: str
```

- *Type:* str

Value for 'method' should be a valid method name for the corresponding  'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method AccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```python
permission: str
```

- *Type:* str

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#permission AccessContextManagerServicePerimeter#permission}

---

### AccessContextManagerServicePerimeterStatusIngressPolicies <a name="AccessContextManagerServicePerimeterStatusIngressPolicies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies(
  ingress_from: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom = None,
  ingress_to: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `ingress_from`<sup>Optional</sup> <a name="ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressFrom"></a>

```python
ingress_from: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_from AccessContextManagerServicePerimeter#ingress_from}

---

##### `ingress_to`<sup>Optional</sup> <a name="ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressTo"></a>

```python
ingress_to: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#ingress_to AccessContextManagerServicePerimeter#ingress_to}

---

### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom(
  identities: typing.List[str] = None,
  identity_type: str = None,
  sources: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identities">identities</a></code> | <code>typing.List[str]</code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identityType">identity_type</a></code> | <code>str</code> | Specifies the type of identities that are allowed access from outside the  perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.sources">sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]</code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Specifies the type of identities that are allowed access from outside the  perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.sources"></a>

```python
sources: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#sources AccessContextManagerServicePerimeter#sources}

---

### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources(
  access_level: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.accessLevel">access_level</a></code> | <code>str</code> | An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.resource">resource</a></code> | <code>str</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

An 'AccessLevel' resource name that allow resources within the  'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#access_level AccessContextManagerServicePerimeter#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.resource"></a>

```python
resource: str
```

- *Type:* str

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resource AccessContextManagerServicePerimeter#resource}

---

### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo(
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations]] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations(
  method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors]] = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.methodSelectors">method_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.serviceName">service_name</a></code> | <code>str</code> | The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow. |

---

##### `method_selectors`<sup>Optional</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```python
method_selectors: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method_selectors AccessContextManagerServicePerimeter#method_selectors}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the API whose methods or permissions the 'IngressPolicy' or  'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#service_name AccessContextManagerServicePerimeter#service_name}

---

### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors(
  method: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>str</code> | Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>str</code> | Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```python
method: str
```

- *Type:* str

Value for method should be a valid method name for the corresponding  serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#method AccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```python
permission: str
```

- *Type:* str

Value for permission should be a valid Cloud IAM permission for the  corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#permission AccessContextManagerServicePerimeter#permission}

---

### AccessContextManagerServicePerimeterStatusVpcAccessibleServices <a name="AccessContextManagerServicePerimeterStatusVpcAccessibleServices" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices(
  allowed_services: typing.List[str] = None,
  enable_restriction: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.allowedServices">allowed_services</a></code> | <code>typing.List[str]</code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.enableRestriction">enable_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `allowed_services`<sup>Optional</sup> <a name="allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.allowedServices"></a>

```python
allowed_services: typing.List[str]
```

- *Type:* typing.List[str]

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#allowed_services AccessContextManagerServicePerimeter#allowed_services}

---

##### `enable_restriction`<sup>Optional</sup> <a name="enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.enableRestriction"></a>

```python
enable_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#enable_restriction AccessContextManagerServicePerimeter#enable_restriction}

---

### AccessContextManagerServicePerimeterTimeouts <a name="AccessContextManagerServicePerimeterTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#create AccessContextManagerServicePerimeter#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#delete AccessContextManagerServicePerimeter#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#update AccessContextManagerServicePerimeter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#create AccessContextManagerServicePerimeter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#delete AccessContextManagerServicePerimeter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#update AccessContextManagerServicePerimeter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identities` <a name="reset_identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput">identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identities">identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```python
identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">put_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">reset_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_method_selectors` <a name="put_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```python
def put_method_selectors(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]

---

##### `reset_method_selectors` <a name="reset_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```python
def reset_method_selectors() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">method_selectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">method_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_selectors`<sup>Required</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```python
method_selectors: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `method_selectors_input`<sup>Optional</sup> <a name="method_selectors_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```python
method_selectors_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>]]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetExternalResources">reset_external_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]

---

##### `reset_external_resources` <a name="reset_external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```python
def reset_external_resources() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput">external_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResources">external_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operations"></a>

```python
operations: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList</a>

---

##### `external_resources_input`<sup>Optional</sup> <a name="external_resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```python
external_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_resources`<sup>Required</sup> <a name="external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```python
external_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesList <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]

---


### AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference <a name="AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom">put_egress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo">put_egress_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressFrom">reset_egress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressTo">reset_egress_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_from` <a name="put_egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom"></a>

```python
def put_egress_from(
  identities: typing.List[str] = None,
  identity_type: str = None
) -> None
```

###### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom.parameter.identities"></a>

- *Type:* typing.List[str]

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

###### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom.parameter.identityType"></a>

- *Type:* str

Specifies the type of identities that are allowed access to outside the  perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

##### `put_egress_to` <a name="put_egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo"></a>

```python
def put_egress_to(
  external_resources: typing.List[str] = None,
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations]] = None,
  resources: typing.List[str] = None
) -> None
```

###### `external_resources`<sup>Optional</sup> <a name="external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo.parameter.externalResources"></a>

- *Type:* typing.List[str]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#external_resources AccessContextManagerServicePerimeter#external_resources}

---

###### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo.parameter.operations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo.parameter.resources"></a>

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

##### `reset_egress_from` <a name="reset_egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressFrom"></a>

```python
def reset_egress_from() -> None
```

##### `reset_egress_to` <a name="reset_egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressTo"></a>

```python
def reset_egress_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFrom">egress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressTo">egress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFromInput">egress_from_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressToInput">egress_to_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_from`<sup>Required</sup> <a name="egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFrom"></a>

```python
egress_from: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference</a>

---

##### `egress_to`<sup>Required</sup> <a name="egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressTo"></a>

```python
egress_to: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference</a>

---

##### `egress_from_input`<sup>Optional</sup> <a name="egress_from_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFromInput"></a>

```python
egress_from_input: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---

##### `egress_to_input`<sup>Optional</sup> <a name="egress_to_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressToInput"></a>

```python
egress_to_input: AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">AccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecEgressPolicies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sources` <a name="put_sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources"></a>

```python
def put_sources(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]

---

##### `reset_identities` <a name="reset_identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput">identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identities">identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sources"></a>

```python
sources: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList</a>

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```python
identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">put_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">reset_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_method_selectors` <a name="put_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```python
def put_method_selectors(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]

---

##### `reset_method_selectors` <a name="reset_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```python
def reset_method_selectors() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">method_selectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">method_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_selectors`<sup>Required</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```python
method_selectors: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `method_selectors_input`<sup>Optional</sup> <a name="method_selectors_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```python
method_selectors_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>]]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]

---

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operations"></a>

```python
operations: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList</a>

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesList <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]

---


### AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference <a name="AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom">put_ingress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo">put_ingress_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressFrom">reset_ingress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressTo">reset_ingress_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingress_from` <a name="put_ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom"></a>

```python
def put_ingress_from(
  identities: typing.List[str] = None,
  identity_type: str = None,
  sources: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources]] = None
) -> None
```

###### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom.parameter.identities"></a>

- *Type:* typing.List[str]

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

###### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom.parameter.identityType"></a>

- *Type:* str

Specifies the type of identities that are allowed access from outside the  perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

###### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom.parameter.sources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#sources AccessContextManagerServicePerimeter#sources}

---

##### `put_ingress_to` <a name="put_ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo"></a>

```python
def put_ingress_to(
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations]] = None,
  resources: typing.List[str] = None
) -> None
```

###### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo.parameter.operations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo.parameter.resources"></a>

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

##### `reset_ingress_from` <a name="reset_ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressFrom"></a>

```python
def reset_ingress_from() -> None
```

##### `reset_ingress_to` <a name="reset_ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressTo"></a>

```python
def reset_ingress_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFromInput">ingress_from_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressToInput">ingress_to_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_from`<sup>Required</sup> <a name="ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFrom"></a>

```python
ingress_from: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference</a>

---

##### `ingress_to`<sup>Required</sup> <a name="ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressTo"></a>

```python
ingress_to: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference</a>

---

##### `ingress_from_input`<sup>Optional</sup> <a name="ingress_from_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFromInput"></a>

```python
ingress_from_input: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---

##### `ingress_to_input`<sup>Optional</sup> <a name="ingress_to_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressToInput"></a>

```python
ingress_to_input: AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">AccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterSpecIngressPolicies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterSpecOutputReference <a name="AccessContextManagerServicePerimeterSpecOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies">put_egress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies">put_ingress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices">put_vpc_accessible_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetAccessLevels">reset_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetEgressPolicies">reset_egress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetIngressPolicies">reset_ingress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetRestrictedServices">reset_restricted_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetVpcAccessibleServices">reset_vpc_accessible_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_policies` <a name="put_egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies"></a>

```python
def put_egress_policies(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]

---

##### `put_ingress_policies` <a name="put_ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies"></a>

```python
def put_ingress_policies(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]

---

##### `put_vpc_accessible_services` <a name="put_vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices"></a>

```python
def put_vpc_accessible_services(
  allowed_services: typing.List[str] = None,
  enable_restriction: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_services`<sup>Optional</sup> <a name="allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices.parameter.allowedServices"></a>

- *Type:* typing.List[str]

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#allowed_services AccessContextManagerServicePerimeter#allowed_services}

---

###### `enable_restriction`<sup>Optional</sup> <a name="enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices.parameter.enableRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#enable_restriction AccessContextManagerServicePerimeter#enable_restriction}

---

##### `reset_access_levels` <a name="reset_access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetAccessLevels"></a>

```python
def reset_access_levels() -> None
```

##### `reset_egress_policies` <a name="reset_egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetEgressPolicies"></a>

```python
def reset_egress_policies() -> None
```

##### `reset_ingress_policies` <a name="reset_ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetIngressPolicies"></a>

```python
def reset_ingress_policies() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_restricted_services` <a name="reset_restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetRestrictedServices"></a>

```python
def reset_restricted_services() -> None
```

##### `reset_vpc_accessible_services` <a name="reset_vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.resetVpcAccessibleServices"></a>

```python
def reset_vpc_accessible_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.egressPolicies">egress_policies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList">AccessContextManagerServicePerimeterSpecEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.ingressPolicies">ingress_policies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList">AccessContextManagerServicePerimeterSpecIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServices">vpc_accessible_services</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.accessLevelsInput">access_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.egressPoliciesInput">egress_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.ingressPoliciesInput">ingress_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServicesInput">restricted_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServicesInput">vpc_accessible_services_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.accessLevels">access_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServices">restricted_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_policies`<sup>Required</sup> <a name="egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.egressPolicies"></a>

```python
egress_policies: AccessContextManagerServicePerimeterSpecEgressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPoliciesList">AccessContextManagerServicePerimeterSpecEgressPoliciesList</a>

---

##### `ingress_policies`<sup>Required</sup> <a name="ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.ingressPolicies"></a>

```python
ingress_policies: AccessContextManagerServicePerimeterSpecIngressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPoliciesList">AccessContextManagerServicePerimeterSpecIngressPoliciesList</a>

---

##### `vpc_accessible_services`<sup>Required</sup> <a name="vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServices"></a>

```python
vpc_accessible_services: AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference</a>

---

##### `access_levels_input`<sup>Optional</sup> <a name="access_levels_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.accessLevelsInput"></a>

```python
access_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `egress_policies_input`<sup>Optional</sup> <a name="egress_policies_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.egressPoliciesInput"></a>

```python
egress_policies_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecEgressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecEgressPolicies">AccessContextManagerServicePerimeterSpecEgressPolicies</a>]]

---

##### `ingress_policies_input`<sup>Optional</sup> <a name="ingress_policies_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.ingressPoliciesInput"></a>

```python
ingress_policies_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterSpecIngressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecIngressPolicies">AccessContextManagerServicePerimeterSpecIngressPolicies</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_services_input`<sup>Optional</sup> <a name="restricted_services_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServicesInput"></a>

```python
restricted_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_accessible_services_input`<sup>Optional</sup> <a name="vpc_accessible_services_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServicesInput"></a>

```python
vpc_accessible_services_input: AccessContextManagerServicePerimeterSpecVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---

##### `access_levels`<sup>Required</sup> <a name="access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.accessLevels"></a>

```python
access_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_services`<sup>Required</sup> <a name="restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServices"></a>

```python
restricted_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterSpec
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpec">AccessContextManagerServicePerimeterSpec</a>

---


### AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference <a name="AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetAllowedServices">reset_allowed_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetEnableRestriction">reset_enable_restriction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_services` <a name="reset_allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```python
def reset_allowed_services() -> None
```

##### `reset_enable_restriction` <a name="reset_enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```python
def reset_enable_restriction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput">allowed_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput">enable_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServices">allowed_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestriction">enable_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_services_input`<sup>Optional</sup> <a name="allowed_services_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```python
allowed_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_restriction_input`<sup>Optional</sup> <a name="enable_restriction_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```python
enable_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_services`<sup>Required</sup> <a name="allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```python
allowed_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_restriction`<sup>Required</sup> <a name="enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```python
enable_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterSpecVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterSpecVpcAccessibleServices">AccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identities` <a name="reset_identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput">identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identities">identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```python
identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">put_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">reset_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_method_selectors` <a name="put_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```python
def put_method_selectors(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]

---

##### `reset_method_selectors` <a name="reset_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```python
def reset_method_selectors() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">method_selectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">method_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_selectors`<sup>Required</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```python
method_selectors: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `method_selectors_input`<sup>Optional</sup> <a name="method_selectors_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```python
method_selectors_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>]]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetExternalResources">reset_external_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]

---

##### `reset_external_resources` <a name="reset_external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```python
def reset_external_resources() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput">external_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResources">external_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operations"></a>

```python
operations: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList</a>

---

##### `external_resources_input`<sup>Optional</sup> <a name="external_resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```python
external_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_resources`<sup>Required</sup> <a name="external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```python
external_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesList <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]

---


### AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference <a name="AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom">put_egress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo">put_egress_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressFrom">reset_egress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressTo">reset_egress_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_from` <a name="put_egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom"></a>

```python
def put_egress_from(
  identities: typing.List[str] = None,
  identity_type: str = None
) -> None
```

###### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom.parameter.identities"></a>

- *Type:* typing.List[str]

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

###### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom.parameter.identityType"></a>

- *Type:* str

Specifies the type of identities that are allowed access to outside the  perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

##### `put_egress_to` <a name="put_egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo"></a>

```python
def put_egress_to(
  external_resources: typing.List[str] = None,
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations]] = None,
  resources: typing.List[str] = None
) -> None
```

###### `external_resources`<sup>Optional</sup> <a name="external_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo.parameter.externalResources"></a>

- *Type:* typing.List[str]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#external_resources AccessContextManagerServicePerimeter#external_resources}

---

###### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo.parameter.operations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo.parameter.resources"></a>

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

##### `reset_egress_from` <a name="reset_egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressFrom"></a>

```python
def reset_egress_from() -> None
```

##### `reset_egress_to` <a name="reset_egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressTo"></a>

```python
def reset_egress_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFrom">egress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressTo">egress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFromInput">egress_from_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressToInput">egress_to_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_from`<sup>Required</sup> <a name="egress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFrom"></a>

```python
egress_from: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference</a>

---

##### `egress_to`<sup>Required</sup> <a name="egress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressTo"></a>

```python
egress_to: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference</a>

---

##### `egress_from_input`<sup>Optional</sup> <a name="egress_from_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFromInput"></a>

```python
egress_from_input: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---

##### `egress_to_input`<sup>Optional</sup> <a name="egress_to_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressToInput"></a>

```python
egress_to_input: AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">AccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusEgressPolicies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sources` <a name="put_sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources"></a>

```python
def put_sources(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]

---

##### `reset_identities` <a name="reset_identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput">identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identities">identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sources"></a>

```python
sources: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList</a>

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```python
identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">put_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">reset_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_method_selectors` <a name="put_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```python
def put_method_selectors(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]

---

##### `reset_method_selectors` <a name="reset_method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```python
def reset_method_selectors() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">method_selectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">method_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_selectors`<sup>Required</sup> <a name="method_selectors" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```python
method_selectors: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `method_selectors_input`<sup>Optional</sup> <a name="method_selectors_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```python
method_selectors_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>]]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]

---

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operations"></a>

```python
operations: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList</a>

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesList <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesList" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]

---


### AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference <a name="AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom">put_ingress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo">put_ingress_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressFrom">reset_ingress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressTo">reset_ingress_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingress_from` <a name="put_ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom"></a>

```python
def put_ingress_from(
  identities: typing.List[str] = None,
  identity_type: str = None,
  sources: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources]] = None
) -> None
```

###### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom.parameter.identities"></a>

- *Type:* typing.List[str]

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identities AccessContextManagerServicePerimeter#identities}

---

###### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom.parameter.identityType"></a>

- *Type:* str

Specifies the type of identities that are allowed access from outside the  perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#identity_type AccessContextManagerServicePerimeter#identity_type}

---

###### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom.parameter.sources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#sources AccessContextManagerServicePerimeter#sources}

---

##### `put_ingress_to` <a name="put_ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo"></a>

```python
def put_ingress_to(
  operations: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations]] = None,
  resources: typing.List[str] = None
) -> None
```

###### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo.parameter.operations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#operations AccessContextManagerServicePerimeter#operations}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo.parameter.resources"></a>

- *Type:* typing.List[str]

A list of resources, currently only projects in the form  'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#resources AccessContextManagerServicePerimeter#resources}

---

##### `reset_ingress_from` <a name="reset_ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressFrom"></a>

```python
def reset_ingress_from() -> None
```

##### `reset_ingress_to` <a name="reset_ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressTo"></a>

```python
def reset_ingress_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFromInput">ingress_from_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressToInput">ingress_to_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_from`<sup>Required</sup> <a name="ingress_from" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFrom"></a>

```python
ingress_from: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference</a>

---

##### `ingress_to`<sup>Required</sup> <a name="ingress_to" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressTo"></a>

```python
ingress_to: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference</a>

---

##### `ingress_from_input`<sup>Optional</sup> <a name="ingress_from_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFromInput"></a>

```python
ingress_from_input: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---

##### `ingress_to_input`<sup>Optional</sup> <a name="ingress_to_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressToInput"></a>

```python
ingress_to_input: AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">AccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterStatusIngressPolicies, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>, cdktf.IResolvable]

---


### AccessContextManagerServicePerimeterStatusOutputReference <a name="AccessContextManagerServicePerimeterStatusOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies">put_egress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies">put_ingress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices">put_vpc_accessible_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetAccessLevels">reset_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetEgressPolicies">reset_egress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetIngressPolicies">reset_ingress_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetRestrictedServices">reset_restricted_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetVpcAccessibleServices">reset_vpc_accessible_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_policies` <a name="put_egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies"></a>

```python
def put_egress_policies(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]

---

##### `put_ingress_policies` <a name="put_ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies"></a>

```python
def put_ingress_policies(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]

---

##### `put_vpc_accessible_services` <a name="put_vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices"></a>

```python
def put_vpc_accessible_services(
  allowed_services: typing.List[str] = None,
  enable_restriction: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_services`<sup>Optional</sup> <a name="allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices.parameter.allowedServices"></a>

- *Type:* typing.List[str]

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#allowed_services AccessContextManagerServicePerimeter#allowed_services}

---

###### `enable_restriction`<sup>Optional</sup> <a name="enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices.parameter.enableRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/access_context_manager_service_perimeter#enable_restriction AccessContextManagerServicePerimeter#enable_restriction}

---

##### `reset_access_levels` <a name="reset_access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetAccessLevels"></a>

```python
def reset_access_levels() -> None
```

##### `reset_egress_policies` <a name="reset_egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetEgressPolicies"></a>

```python
def reset_egress_policies() -> None
```

##### `reset_ingress_policies` <a name="reset_ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetIngressPolicies"></a>

```python
def reset_ingress_policies() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_restricted_services` <a name="reset_restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetRestrictedServices"></a>

```python
def reset_restricted_services() -> None
```

##### `reset_vpc_accessible_services` <a name="reset_vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.resetVpcAccessibleServices"></a>

```python
def reset_vpc_accessible_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.egressPolicies">egress_policies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList">AccessContextManagerServicePerimeterStatusEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.ingressPolicies">ingress_policies</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList">AccessContextManagerServicePerimeterStatusIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServices">vpc_accessible_services</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.accessLevelsInput">access_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.egressPoliciesInput">egress_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.ingressPoliciesInput">ingress_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServicesInput">restricted_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServicesInput">vpc_accessible_services_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.accessLevels">access_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServices">restricted_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_policies`<sup>Required</sup> <a name="egress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.egressPolicies"></a>

```python
egress_policies: AccessContextManagerServicePerimeterStatusEgressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPoliciesList">AccessContextManagerServicePerimeterStatusEgressPoliciesList</a>

---

##### `ingress_policies`<sup>Required</sup> <a name="ingress_policies" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.ingressPolicies"></a>

```python
ingress_policies: AccessContextManagerServicePerimeterStatusIngressPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPoliciesList">AccessContextManagerServicePerimeterStatusIngressPoliciesList</a>

---

##### `vpc_accessible_services`<sup>Required</sup> <a name="vpc_accessible_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServices"></a>

```python
vpc_accessible_services: AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference">AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference</a>

---

##### `access_levels_input`<sup>Optional</sup> <a name="access_levels_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.accessLevelsInput"></a>

```python
access_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `egress_policies_input`<sup>Optional</sup> <a name="egress_policies_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.egressPoliciesInput"></a>

```python
egress_policies_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusEgressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusEgressPolicies">AccessContextManagerServicePerimeterStatusEgressPolicies</a>]]

---

##### `ingress_policies_input`<sup>Optional</sup> <a name="ingress_policies_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.ingressPoliciesInput"></a>

```python
ingress_policies_input: typing.Union[IResolvable, typing.List[AccessContextManagerServicePerimeterStatusIngressPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusIngressPolicies">AccessContextManagerServicePerimeterStatusIngressPolicies</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_services_input`<sup>Optional</sup> <a name="restricted_services_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServicesInput"></a>

```python
restricted_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_accessible_services_input`<sup>Optional</sup> <a name="vpc_accessible_services_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServicesInput"></a>

```python
vpc_accessible_services_input: AccessContextManagerServicePerimeterStatusVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---

##### `access_levels`<sup>Required</sup> <a name="access_levels" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.accessLevels"></a>

```python
access_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_services`<sup>Required</sup> <a name="restricted_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServices"></a>

```python
restricted_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterStatus
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatus">AccessContextManagerServicePerimeterStatus</a>

---


### AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference <a name="AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetAllowedServices">reset_allowed_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetEnableRestriction">reset_enable_restriction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_services` <a name="reset_allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```python
def reset_allowed_services() -> None
```

##### `reset_enable_restriction` <a name="reset_enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```python
def reset_enable_restriction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput">allowed_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput">enable_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServices">allowed_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestriction">enable_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_services_input`<sup>Optional</sup> <a name="allowed_services_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```python
allowed_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_restriction_input`<sup>Optional</sup> <a name="enable_restriction_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```python
enable_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_services`<sup>Required</sup> <a name="allowed_services" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```python
allowed_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_restriction`<sup>Required</sup> <a name="enable_restriction" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```python
enable_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerServicePerimeterStatusVpcAccessibleServices
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterStatusVpcAccessibleServices">AccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---


### AccessContextManagerServicePerimeterTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_service_perimeter

accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerServicePerimeterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerServicePerimeter.AccessContextManagerServicePerimeterTimeouts">AccessContextManagerServicePerimeterTimeouts</a>, cdktf.IResolvable]

---



