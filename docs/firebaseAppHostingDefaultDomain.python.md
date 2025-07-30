# `firebaseAppHostingDefaultDomain` Submodule <a name="`firebaseAppHostingDefaultDomain` Submodule" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingDefaultDomain <a name="FirebaseAppHostingDefaultDomain" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain google_firebase_app_hosting_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  domain_id: str,
  location: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppHostingDefaultDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.backend"></a>

- *Type:* str

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#backend FirebaseAppHostingDefaultDomain#backend}

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.domainId"></a>

- *Type:* str

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#domain_id FirebaseAppHostingDefaultDomain#domain_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.location"></a>

- *Type:* str

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#location FirebaseAppHostingDefaultDomain#location}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#disabled FirebaseAppHostingDefaultDomain#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#timeouts FirebaseAppHostingDefaultDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}.

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaseAppHostingDefaultDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaseAppHostingDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference">FirebaseAppHostingDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeouts"></a>

```python
timeouts: FirebaseAppHostingDefaultDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference">FirebaseAppHostingDefaultDomainTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirebaseAppHostingDefaultDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingDefaultDomainConfig <a name="FirebaseAppHostingDefaultDomainConfig" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  domain_id: str,
  location: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: FirebaseAppHostingDefaultDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.backend">backend</a></code> | <code>str</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.domainId">domain_id</a></code> | <code>str</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.location">location</a></code> | <code>str</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#backend FirebaseAppHostingDefaultDomain#backend}

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#domain_id FirebaseAppHostingDefaultDomain#domain_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#location FirebaseAppHostingDefaultDomain#location}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#disabled FirebaseAppHostingDefaultDomain#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.timeouts"></a>

```python
timeouts: FirebaseAppHostingDefaultDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#timeouts FirebaseAppHostingDefaultDomain#timeouts}

---

### FirebaseAppHostingDefaultDomainTimeouts <a name="FirebaseAppHostingDefaultDomainTimeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingDefaultDomainTimeoutsOutputReference <a name="FirebaseAppHostingDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebase_app_hosting_default_domain

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaseAppHostingDefaultDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>]

---



