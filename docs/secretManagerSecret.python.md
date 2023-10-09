# `google_secret_manager_secret`

Refer to the Terraform Registory for docs: [`google_secret_manager_secret`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret).

# `secretManagerSecret` Submodule <a name="`secretManagerSecret` Submodule" id="@cdktf/provider-google.secretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerSecret <a name="SecretManagerSecret" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  replication: SecretManagerSecretReplication,
  secret_id: str,
  annotations: typing.Mapping[str] = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rotation: SecretManagerSecretRotation = None,
  timeouts: SecretManagerSecretTimeouts = None,
  topics: typing.Union[IResolvable, typing.List[SecretManagerSecretTopics]] = None,
  ttl: str = None,
  version_aliases: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Custom metadata about the secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | Timestamp in UTC when the Secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.topics">topics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL for the Secret. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | Mapping from version alias to version name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.replication"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#replication SecretManagerSecret#replication}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.secretId"></a>

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#secret_id SecretManagerSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Custom metadata about the secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#annotations SecretManagerSecret#annotations}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.expireTime"></a>

- *Type:* str

Timestamp in UTC when the Secret is scheduled to expire.

This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#expire_time SecretManagerSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#labels SecretManagerSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.rotation"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#rotation SecretManagerSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#timeouts SecretManagerSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.topics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#topics SecretManagerSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL for the Secret. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#ttl SecretManagerSecret#ttl}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.versionAliases"></a>

- *Type:* typing.Mapping[str]

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#version_aliases SecretManagerSecret#version_aliases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication">put_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation">put_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics">put_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation">reset_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases">reset_version_aliases</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_replication` <a name="put_replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication"></a>

```python
def put_replication(
  auto: SecretManagerSecretReplicationAuto = None,
  user_managed: SecretManagerSecretReplicationUserManaged = None
) -> None
```

###### `auto`<sup>Optional</sup> <a name="auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication.parameter.auto"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

auto block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#auto SecretManagerSecret#auto}

---

###### `user_managed`<sup>Optional</sup> <a name="user_managed" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication.parameter.userManaged"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

user_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#user_managed SecretManagerSecret#user_managed}

---

##### `put_rotation` <a name="put_rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation"></a>

```python
def put_rotation(
  next_rotation_time: str = None,
  rotation_period: str = None
) -> None
```

###### `next_rotation_time`<sup>Optional</sup> <a name="next_rotation_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation.parameter.nextRotationTime"></a>

- *Type:* str

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#next_rotation_time SecretManagerSecret#next_rotation_time}

---

###### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation.parameter.rotationPeriod"></a>

- *Type:* str

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#rotation_period SecretManagerSecret#rotation_period}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}.

---

##### `put_topics` <a name="put_topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics"></a>

```python
def put_topics(
  value: typing.Union[IResolvable, typing.List[SecretManagerSecretTopics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rotation` <a name="reset_rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation"></a>

```python
def reset_rotation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_version_aliases` <a name="reset_version_aliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases"></a>

```python
def reset_version_aliases() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput">replication_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput">rotation_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput">topics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput">version_aliases_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication"></a>

```python
replication: SecretManagerSecretReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation"></a>

```python
rotation: SecretManagerSecretRotationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts"></a>

```python
timeouts: SecretManagerSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics"></a>

```python
topics: SecretManagerSecretTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `replication_input`<sup>Optional</sup> <a name="replication_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput"></a>

```python
replication_input: SecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `rotation_input`<sup>Optional</sup> <a name="rotation_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput"></a>

```python
rotation_input: SecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecretManagerSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>]

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput"></a>

```python
topics_input: typing.Union[IResolvable, typing.List[SecretManagerSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `version_aliases_input`<sup>Optional</sup> <a name="version_aliases_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput"></a>

```python
version_aliases_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases"></a>

```python
version_aliases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerSecretConfig <a name="SecretManagerSecretConfig" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  replication: SecretManagerSecretReplication,
  secret_id: str,
  annotations: typing.Mapping[str] = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  rotation: SecretManagerSecretRotation = None,
  timeouts: SecretManagerSecretTimeouts = None,
  topics: typing.Union[IResolvable, typing.List[SecretManagerSecretTopics]] = None,
  ttl: str = None,
  version_aliases: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Custom metadata about the secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime">expire_time</a></code> | <code>str</code> | Timestamp in UTC when the Secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels assigned to this Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics">topics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL for the Secret. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases">version_aliases</a></code> | <code>typing.Mapping[str]</code> | Mapping from version alias to version name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication"></a>

```python
replication: SecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#replication SecretManagerSecret#replication}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#secret_id SecretManagerSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata about the secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#annotations SecretManagerSecret#annotations}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Timestamp in UTC when the Secret is scheduled to expire.

This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#expire_time SecretManagerSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#id SecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#labels SecretManagerSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#project SecretManagerSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation"></a>

```python
rotation: SecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#rotation SecretManagerSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts"></a>

```python
timeouts: SecretManagerSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#timeouts SecretManagerSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics"></a>

```python
topics: typing.Union[IResolvable, typing.List[SecretManagerSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#topics SecretManagerSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL for the Secret. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#ttl SecretManagerSecret#ttl}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases"></a>

```python
version_aliases: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#version_aliases SecretManagerSecret#version_aliases}

---

### SecretManagerSecretReplication <a name="SecretManagerSecretReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplication(
  auto: SecretManagerSecretReplicationAuto = None,
  user_managed: SecretManagerSecretReplicationUserManaged = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | auto block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged">user_managed</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | user_managed block. |

---

##### `auto`<sup>Optional</sup> <a name="auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto"></a>

```python
auto: SecretManagerSecretReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

auto block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#auto SecretManagerSecret#auto}

---

##### `user_managed`<sup>Optional</sup> <a name="user_managed" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged"></a>

```python
user_managed: SecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

user_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#user_managed SecretManagerSecret#user_managed}

---

### SecretManagerSecretReplicationAuto <a name="SecretManagerSecretReplicationAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationAuto(
  customer_managed_encryption: SecretManagerSecretReplicationAutoCustomerManagedEncryption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: SecretManagerSecretReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationAutoCustomerManagedEncryption <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretReplicationUserManaged <a name="SecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManaged(
  replicas: typing.Union[IResolvable, typing.List[SecretManagerSecretReplicationUserManagedReplicas]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas">replicas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]</code> | replicas block. |

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas"></a>

```python
replicas: typing.Union[IResolvable, typing.List[SecretManagerSecretReplicationUserManagedReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#replicas SecretManagerSecret#replicas}

---

### SecretManagerSecretReplicationUserManagedReplicas <a name="SecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas(
  location: str,
  customer_managed_encryption: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location">location</a></code> | <code>str</code> | The canonical IDs of the location to replicate data. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location"></a>

```python
location: str
```

- *Type:* str

The canonical IDs of the location to replicate data. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#location SecretManagerSecret#location}

---

##### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination secret. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretRotation <a name="SecretManagerSecretRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretRotation(
  next_rotation_time: str = None,
  rotation_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | The Duration between rotation notifications. |

---

##### `next_rotation_time`<sup>Optional</sup> <a name="next_rotation_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#next_rotation_time SecretManagerSecret#next_rotation_time}

---

##### `rotation_period`<sup>Optional</sup> <a name="rotation_period" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#rotation_period SecretManagerSecret#rotation_period}

---

### SecretManagerSecretTimeouts <a name="SecretManagerSecretTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#create SecretManagerSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#update SecretManagerSecret#update}.

---

### SecretManagerSecretTopics <a name="SecretManagerSecretTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretTopics(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name">name</a></code> | <code>str</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#name SecretManagerSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerSecretReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationAutoOutputReference <a name="SecretManagerSecretReplicationAutoOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption">put_customer_managed_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption">reset_customer_managed_encryption</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed_encryption` <a name="put_customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption"></a>

```python
def put_customer_managed_encryption(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption.parameter.kmsKeyName"></a>

- *Type:* str

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

##### `reset_customer_managed_encryption` <a name="reset_customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption"></a>

```python
def reset_customer_managed_encryption() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput">customer_managed_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a>

---

##### `customer_managed_encryption_input`<sup>Optional</sup> <a name="customer_managed_encryption_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput"></a>

```python
customer_managed_encryption_input: SecretManagerSecretReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerSecretReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---


### SecretManagerSecretReplicationOutputReference <a name="SecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto">put_auto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged">put_user_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto">reset_auto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged">reset_user_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto` <a name="put_auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto"></a>

```python
def put_auto(
  customer_managed_encryption: SecretManagerSecretReplicationAutoCustomerManagedEncryption = None
) -> None
```

###### `customer_managed_encryption`<sup>Optional</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto.parameter.customerManagedEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

##### `put_user_managed` <a name="put_user_managed" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged"></a>

```python
def put_user_managed(
  replicas: typing.Union[IResolvable, typing.List[SecretManagerSecretReplicationUserManagedReplicas]]
) -> None
```

###### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged.parameter.replicas"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#replicas SecretManagerSecret#replicas}

---

##### `reset_auto` <a name="reset_auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto"></a>

```python
def reset_auto() -> None
```

##### `reset_user_managed` <a name="reset_user_managed" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged"></a>

```python
def reset_user_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto">auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged">user_managed</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput">auto_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput">user_managed_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto`<sup>Required</sup> <a name="auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto"></a>

```python
auto: SecretManagerSecretReplicationAutoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a>

---

##### `user_managed`<sup>Required</sup> <a name="user_managed" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```python
user_managed: SecretManagerSecretReplicationUserManagedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a>

---

##### `auto_input`<sup>Optional</sup> <a name="auto_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput"></a>

```python
auto_input: SecretManagerSecretReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `user_managed_input`<sup>Optional</sup> <a name="user_managed_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput"></a>

```python
user_managed_input: SecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerSecretReplication
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---


### SecretManagerSecretReplicationUserManagedOutputReference <a name="SecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas">put_replicas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_replicas` <a name="put_replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas"></a>

```python
def put_replicas(
  value: typing.Union[IResolvable, typing.List[SecretManagerSecretReplicationUserManagedReplicas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput">replicas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```python
replicas: SecretManagerSecretReplicationUserManagedReplicasList
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput"></a>

```python
replicas_input: typing.Union[IResolvable, typing.List[SecretManagerSecretReplicationUserManagedReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerSecretReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---


### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationUserManagedReplicasList <a name="SecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretManagerSecretReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecretManagerSecretReplicationUserManagedReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]]

---


### SecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption">put_customer_managed_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption">reset_customer_managed_encryption</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_managed_encryption` <a name="put_customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption"></a>

```python
def put_customer_managed_encryption(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

##### `reset_customer_managed_encryption` <a name="reset_customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption"></a>

```python
def reset_customer_managed_encryption() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput">customer_managed_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a>

---

##### `customer_managed_encryption_input`<sup>Optional</sup> <a name="customer_managed_encryption_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput"></a>

```python
customer_managed_encryption_input: SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecretManagerSecretReplicationUserManagedReplicas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas">SecretManagerSecretReplicationUserManagedReplicas</a>]

---


### SecretManagerSecretRotationOutputReference <a name="SecretManagerSecretRotationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime">reset_next_rotation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod">reset_rotation_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_next_rotation_time` <a name="reset_next_rotation_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime"></a>

```python
def reset_next_rotation_time() -> None
```

##### `reset_rotation_period` <a name="reset_rotation_period" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod"></a>

```python
def reset_rotation_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput">next_rotation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput">rotation_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time_input`<sup>Optional</sup> <a name="next_rotation_time_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```python
next_rotation_time_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput"></a>

```python
rotation_period_input: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue"></a>

```python
internal_value: SecretManagerSecretRotation
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---


### SecretManagerSecretTimeoutsOutputReference <a name="SecretManagerSecretTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecretManagerSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>]

---


### SecretManagerSecretTopicsList <a name="SecretManagerSecretTopicsList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretTopicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretManagerSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecretManagerSecretTopics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]]

---


### SecretManagerSecretTopicsOutputReference <a name="SecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secret_manager_secret

secretManagerSecret.SecretManagerSecretTopicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecretManagerSecretTopics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics">SecretManagerSecretTopics</a>]

---



