# `google_active_directory_domain`

Refer to the Terraform Registory for docs: [`google_active_directory_domain`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain).

# `activeDirectoryDomain` Submodule <a name="`activeDirectoryDomain` Submodule" id="@cdktf/provider-google.activeDirectoryDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomain <a name="ActiveDirectoryDomain" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain google_active_directory_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  locations: typing.List[str],
  reserved_ip_range: str,
  admin: str = None,
  authorized_networks: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: ActiveDirectoryDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.locations">locations</a></code> | <code>typing.List[str]</code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.admin">admin</a></code> | <code>str</code> | The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.authorizedNetworks">authorized_networks</a></code> | <code>typing.List[str]</code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.domainName"></a>

- *Type:* str

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#domain_name ActiveDirectoryDomain#domain_name}

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.locations"></a>

- *Type:* typing.List[str]

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#locations ActiveDirectoryDomain#locations}

---

##### `reserved_ip_range`<sup>Required</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.reservedIpRange"></a>

- *Type:* str

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.admin"></a>

- *Type:* str

The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#admin ActiveDirectoryDomain#admin}

---

##### `authorized_networks`<sup>Optional</sup> <a name="authorized_networks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.authorizedNetworks"></a>

- *Type:* typing.List[str]

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#authorized_networks ActiveDirectoryDomain#authorized_networks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels that can contain user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#labels ActiveDirectoryDomain#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#timeouts ActiveDirectoryDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin">reset_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks">reset_authorized_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}.

---

##### `reset_admin` <a name="reset_admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin"></a>

```python
def reset_admin() -> None
```

##### `reset_authorized_networks` <a name="reset_authorized_networks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks"></a>

```python
def reset_authorized_networks() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput">admin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput">authorized_networks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput">reserved_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin">admin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks">authorized_networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts"></a>

```python
timeouts: ActiveDirectoryDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a>

---

##### `admin_input`<sup>Optional</sup> <a name="admin_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput"></a>

```python
admin_input: str
```

- *Type:* str

---

##### `authorized_networks_input`<sup>Optional</sup> <a name="authorized_networks_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput"></a>

```python
authorized_networks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reserved_ip_range_input`<sup>Optional</sup> <a name="reserved_ip_range_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput"></a>

```python
reserved_ip_range_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ActiveDirectoryDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>]

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin"></a>

```python
admin: str
```

- *Type:* str

---

##### `authorized_networks`<sup>Required</sup> <a name="authorized_networks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks"></a>

```python
authorized_networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reserved_ip_range`<sup>Required</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainConfig <a name="ActiveDirectoryDomainConfig" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  locations: typing.List[str],
  reserved_ip_range: str,
  admin: str = None,
  authorized_networks: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: ActiveDirectoryDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations">locations</a></code> | <code>typing.List[str]</code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin">admin</a></code> | <code>str</code> | The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks">authorized_networks</a></code> | <code>typing.List[str]</code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#domain_name ActiveDirectoryDomain#domain_name}

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#locations ActiveDirectoryDomain#locations}

---

##### `reserved_ip_range`<sup>Required</sup> <a name="reserved_ip_range" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin"></a>

```python
admin: str
```

- *Type:* str

The name of delegated administrator account used to perform Active Directory operations. If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#admin ActiveDirectoryDomain#admin}

---

##### `authorized_networks`<sup>Optional</sup> <a name="authorized_networks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks"></a>

```python
authorized_networks: typing.List[str]
```

- *Type:* typing.List[str]

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#authorized_networks ActiveDirectoryDomain#authorized_networks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#id ActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels that can contain user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#labels ActiveDirectoryDomain#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#project ActiveDirectoryDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts"></a>

```python
timeouts: ActiveDirectoryDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#timeouts ActiveDirectoryDomain#timeouts}

---

### ActiveDirectoryDomainTimeouts <a name="ActiveDirectoryDomainTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#create ActiveDirectoryDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#delete ActiveDirectoryDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/active_directory_domain#update ActiveDirectoryDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTimeoutsOutputReference <a name="ActiveDirectoryDomainTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import active_directory_domain

activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ActiveDirectoryDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>]

---



