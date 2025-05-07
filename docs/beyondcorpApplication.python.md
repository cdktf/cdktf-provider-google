# `beyondcorpApplication` Submodule <a name="`beyondcorpApplication` Submodule" id="@cdktf/provider-google.beyondcorpApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpApplication <a name="BeyondcorpApplication" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application google_beyondcorp_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  endpoint_matchers: typing.Union[IResolvable, typing.List[BeyondcorpApplicationEndpointMatchers]],
  security_gateways_id: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: BeyondcorpApplicationTimeouts = None,
  upstreams: typing.Union[IResolvable, typing.List[BeyondcorpApplicationUpstreams]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.endpointMatchers">endpoint_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.securityGatewaysId">security_gateways_id</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.upstreams">upstreams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]</code> | upstreams block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#application_id BeyondcorpApplication#application_id}

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#endpoint_matchers BeyondcorpApplication#endpoint_matchers}

---

##### `security_gateways_id`<sup>Required</sup> <a name="security_gateways_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.securityGatewaysId"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#security_gateways_id BeyondcorpApplication#security_gateways_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#display_name BeyondcorpApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#timeouts BeyondcorpApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.upstreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#upstreams BeyondcorpApplication#upstreams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putEndpointMatchers">put_endpoint_matchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putUpstreams">put_upstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetUpstreams">reset_upstreams</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_matchers` <a name="put_endpoint_matchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putEndpointMatchers"></a>

```python
def put_endpoint_matchers(
  value: typing.Union[IResolvable, typing.List[BeyondcorpApplicationEndpointMatchers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#create BeyondcorpApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#delete BeyondcorpApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#update BeyondcorpApplication#update}.

---

##### `put_upstreams` <a name="put_upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putUpstreams"></a>

```python
def put_upstreams(
  value: typing.Union[IResolvable, typing.List[BeyondcorpApplicationUpstreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putUpstreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upstreams` <a name="reset_upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetUpstreams"></a>

```python
def reset_upstreams() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BeyondcorpApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BeyondcorpApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BeyondcorpApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BeyondcorpApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchers">endpoint_matchers</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList">BeyondcorpApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference">BeyondcorpApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreams">upstreams</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList">BeyondcorpApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchersInput">endpoint_matchers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysIdInput">security_gateways_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreamsInput">upstreams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysId">security_gateways_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchers"></a>

```python
endpoint_matchers: BeyondcorpApplicationEndpointMatchersList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList">BeyondcorpApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeouts"></a>

```python
timeouts: BeyondcorpApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference">BeyondcorpApplicationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreams"></a>

```python
upstreams: BeyondcorpApplicationUpstreamsList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList">BeyondcorpApplicationUpstreamsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_matchers_input`<sup>Optional</sup> <a name="endpoint_matchers_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchersInput"></a>

```python
endpoint_matchers_input: typing.Union[IResolvable, typing.List[BeyondcorpApplicationEndpointMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_gateways_id_input`<sup>Optional</sup> <a name="security_gateways_id_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysIdInput"></a>

```python
security_gateways_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BeyondcorpApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>]

---

##### `upstreams_input`<sup>Optional</sup> <a name="upstreams_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreamsInput"></a>

```python
upstreams_input: typing.Union[IResolvable, typing.List[BeyondcorpApplicationUpstreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateways_id`<sup>Required</sup> <a name="security_gateways_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysId"></a>

```python
security_gateways_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpApplicationConfig <a name="BeyondcorpApplicationConfig" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  endpoint_matchers: typing.Union[IResolvable, typing.List[BeyondcorpApplicationEndpointMatchers]],
  security_gateways_id: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: BeyondcorpApplicationTimeouts = None,
  upstreams: typing.Union[IResolvable, typing.List[BeyondcorpApplicationUpstreams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.endpointMatchers">endpoint_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.securityGatewaysId">security_gateways_id</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.upstreams">upstreams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]</code> | upstreams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#application_id BeyondcorpApplication#application_id}

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.endpointMatchers"></a>

```python
endpoint_matchers: typing.Union[IResolvable, typing.List[BeyondcorpApplicationEndpointMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#endpoint_matchers BeyondcorpApplication#endpoint_matchers}

---

##### `security_gateways_id`<sup>Required</sup> <a name="security_gateways_id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.securityGatewaysId"></a>

```python
security_gateways_id: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#security_gateways_id BeyondcorpApplication#security_gateways_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#display_name BeyondcorpApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.timeouts"></a>

```python
timeouts: BeyondcorpApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#timeouts BeyondcorpApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.upstreams"></a>

```python
upstreams: typing.Union[IResolvable, typing.List[BeyondcorpApplicationUpstreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#upstreams BeyondcorpApplication#upstreams}

---

### BeyondcorpApplicationEndpointMatchers <a name="BeyondcorpApplicationEndpointMatchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationEndpointMatchers(
  hostname: str,
  ports: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>str</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#hostname BeyondcorpApplication#hostname}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#ports BeyondcorpApplication#ports}

---

### BeyondcorpApplicationTimeouts <a name="BeyondcorpApplicationTimeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#create BeyondcorpApplication#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#delete BeyondcorpApplication#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#update BeyondcorpApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#create BeyondcorpApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#delete BeyondcorpApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#update BeyondcorpApplication#update}.

---

### BeyondcorpApplicationUpstreams <a name="BeyondcorpApplicationUpstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreams(
  egress_policy: BeyondcorpApplicationUpstreamsEgressPolicy = None,
  network: BeyondcorpApplicationUpstreamsNetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.egressPolicy">egress_policy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `egress_policy`<sup>Optional</sup> <a name="egress_policy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.egressPolicy"></a>

```python
egress_policy: BeyondcorpApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#egress_policy BeyondcorpApplication#egress_policy}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.network"></a>

```python
network: BeyondcorpApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#network BeyondcorpApplication#network}

---

### BeyondcorpApplicationUpstreamsEgressPolicy <a name="BeyondcorpApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy(
  regions: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy.property.regions">regions</a></code> | <code>typing.List[str]</code> | Required. List of regions where the application sends traffic to. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#regions BeyondcorpApplication#regions}

---

### BeyondcorpApplicationUpstreamsNetwork <a name="BeyondcorpApplicationUpstreamsNetwork" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork.property.name">name</a></code> | <code>str</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#name BeyondcorpApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpApplicationEndpointMatchersList <a name="BeyondcorpApplicationEndpointMatchersList" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BeyondcorpApplicationEndpointMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BeyondcorpApplicationEndpointMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]]

---


### BeyondcorpApplicationEndpointMatchersOutputReference <a name="BeyondcorpApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BeyondcorpApplicationEndpointMatchers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>]

---


### BeyondcorpApplicationTimeoutsOutputReference <a name="BeyondcorpApplicationTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BeyondcorpApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>]

---


### BeyondcorpApplicationUpstreamsEgressPolicyOutputReference <a name="BeyondcorpApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

---


### BeyondcorpApplicationUpstreamsList <a name="BeyondcorpApplicationUpstreamsList" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BeyondcorpApplicationUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BeyondcorpApplicationUpstreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]]

---


### BeyondcorpApplicationUpstreamsNetworkOutputReference <a name="BeyondcorpApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```python
internal_value: BeyondcorpApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

---


### BeyondcorpApplicationUpstreamsOutputReference <a name="BeyondcorpApplicationUpstreamsOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import beyondcorp_application

beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy">put_egress_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetEgressPolicy">reset_egress_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_egress_policy` <a name="put_egress_policy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```python
def put_egress_policy(
  regions: typing.List[str]
) -> None
```

###### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy.parameter.regions"></a>

- *Type:* typing.List[str]

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#regions BeyondcorpApplication#regions}

---

##### `put_network` <a name="put_network" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putNetwork"></a>

```python
def put_network(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putNetwork.parameter.name"></a>

- *Type:* str

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#name BeyondcorpApplication#name}

---

##### `reset_egress_policy` <a name="reset_egress_policy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```python
def reset_egress_policy() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicy">egress_policy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference">BeyondcorpApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicyInput">egress_policy_input</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_policy`<sup>Required</sup> <a name="egress_policy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```python
egress_policy: BeyondcorpApplicationUpstreamsEgressPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.network"></a>

```python
network: BeyondcorpApplicationUpstreamsNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference">BeyondcorpApplicationUpstreamsNetworkOutputReference</a>

---

##### `egress_policy_input`<sup>Optional</sup> <a name="egress_policy_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```python
egress_policy_input: BeyondcorpApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.networkInput"></a>

```python
network_input: BeyondcorpApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BeyondcorpApplicationUpstreams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>]

---



