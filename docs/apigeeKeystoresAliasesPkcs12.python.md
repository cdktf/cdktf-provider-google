# `apigeeKeystoresAliasesPkcs12` Submodule <a name="`apigeeKeystoresAliasesPkcs12` Submodule" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesPkcs12 <a name="ApigeeKeystoresAliasesPkcs12" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12 google_apigee_keystores_aliases_pkcs12}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  environment: str,
  file: str,
  filehash: str,
  keystore: str,
  org_id: str,
  id: str = None,
  password: str = None,
  timeouts: ApigeeKeystoresAliasesPkcs12Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.file">file</a></code> | <code>str</code> | Cert content. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.filehash">filehash</a></code> | <code>str</code> | Hash of the pkcs file. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.keystore">keystore</a></code> | <code>str</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.alias"></a>

- *Type:* str

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#alias ApigeeKeystoresAliasesPkcs12#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.environment"></a>

- *Type:* str

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#environment ApigeeKeystoresAliasesPkcs12#environment}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.file"></a>

- *Type:* str

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#file ApigeeKeystoresAliasesPkcs12#file}

---

##### `filehash`<sup>Required</sup> <a name="filehash" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.filehash"></a>

- *Type:* str

Hash of the pkcs file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#filehash ApigeeKeystoresAliasesPkcs12#filehash}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.keystore"></a>

- *Type:* str

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#keystore ApigeeKeystoresAliasesPkcs12#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.orgId"></a>

- *Type:* str

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#org_id ApigeeKeystoresAliasesPkcs12#org_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.password"></a>

- *Type:* str

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#password ApigeeKeystoresAliasesPkcs12#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#timeouts ApigeeKeystoresAliasesPkcs12#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#create ApigeeKeystoresAliasesPkcs12#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#delete ApigeeKeystoresAliasesPkcs12#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeKeystoresAliasesPkcs12 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeKeystoresAliasesPkcs12 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeKeystoresAliasesPkcs12 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeKeystoresAliasesPkcs12 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesPkcs12 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.certsInfo">certs_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference">ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehashInput">filehash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystoreInput">keystore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehash">filehash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystore">keystore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.password">password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certs_info`<sup>Required</sup> <a name="certs_info" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.certsInfo"></a>

```python
certs_info: ApigeeKeystoresAliasesPkcs12CertsInfoList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeouts"></a>

```python
timeouts: ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference">ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `filehash_input`<sup>Optional</sup> <a name="filehash_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehashInput"></a>

```python
filehash_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keystore_input`<sup>Optional</sup> <a name="keystore_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystoreInput"></a>

```python
keystore_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeKeystoresAliasesPkcs12Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `filehash`<sup>Required</sup> <a name="filehash" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehash"></a>

```python
filehash: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.password"></a>

```python
password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesPkcs12CertsInfo <a name="ApigeeKeystoresAliasesPkcs12CertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo()
```


### ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo <a name="ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo()
```


### ApigeeKeystoresAliasesPkcs12Config <a name="ApigeeKeystoresAliasesPkcs12Config" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  environment: str,
  file: str,
  filehash: str,
  keystore: str,
  org_id: str,
  id: str = None,
  password: str = None,
  timeouts: ApigeeKeystoresAliasesPkcs12Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.alias">alias</a></code> | <code>str</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.environment">environment</a></code> | <code>str</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.file">file</a></code> | <code>str</code> | Cert content. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.filehash">filehash</a></code> | <code>str</code> | Hash of the pkcs file. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.keystore">keystore</a></code> | <code>str</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.orgId">org_id</a></code> | <code>str</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.password">password</a></code> | <code>str</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#alias ApigeeKeystoresAliasesPkcs12#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.environment"></a>

```python
environment: str
```

- *Type:* str

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#environment ApigeeKeystoresAliasesPkcs12#environment}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.file"></a>

```python
file: str
```

- *Type:* str

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#file ApigeeKeystoresAliasesPkcs12#file}

---

##### `filehash`<sup>Required</sup> <a name="filehash" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.filehash"></a>

```python
filehash: str
```

- *Type:* str

Hash of the pkcs file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#filehash ApigeeKeystoresAliasesPkcs12#filehash}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#keystore ApigeeKeystoresAliasesPkcs12#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#org_id ApigeeKeystoresAliasesPkcs12#org_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#password ApigeeKeystoresAliasesPkcs12#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.timeouts"></a>

```python
timeouts: ApigeeKeystoresAliasesPkcs12Timeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#timeouts ApigeeKeystoresAliasesPkcs12#timeouts}

---

### ApigeeKeystoresAliasesPkcs12Timeouts <a name="ApigeeKeystoresAliasesPkcs12Timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#create ApigeeKeystoresAliasesPkcs12#create}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#delete ApigeeKeystoresAliasesPkcs12#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#create ApigeeKeystoresAliasesPkcs12#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/apigee_keystores_aliases_pkcs12#delete ApigeeKeystoresAliasesPkcs12#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList <a name="ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference <a name="ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.basicConstraints">basic_constraints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.expiryDate">expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.isValid">is_valid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.sigAlgName">sig_alg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.validFrom">valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_constraints`<sup>Required</sup> <a name="basic_constraints" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```python
basic_constraints: str
```

- *Type:* str

---

##### `expiry_date`<sup>Required</sup> <a name="expiry_date" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.expiryDate"></a>

```python
expiry_date: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.isValid"></a>

```python
is_valid: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `sig_alg_name`<sup>Required</sup> <a name="sig_alg_name" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```python
sig_alg_name: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_from`<sup>Required</sup> <a name="valid_from" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo</a>

---


### ApigeeKeystoresAliasesPkcs12CertsInfoList <a name="ApigeeKeystoresAliasesPkcs12CertsInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference <a name="ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.certInfo">cert_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo">ApigeeKeystoresAliasesPkcs12CertsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_info`<sup>Required</sup> <a name="cert_info" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.certInfo"></a>

```python
cert_info: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesPkcs12CertsInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo">ApigeeKeystoresAliasesPkcs12CertsInfo</a>

---


### ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference <a name="ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_pkcs12

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeKeystoresAliasesPkcs12Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>]

---



