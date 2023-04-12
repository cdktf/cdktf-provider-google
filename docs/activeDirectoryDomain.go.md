# `activeDirectoryDomain` Submodule <a name="`activeDirectoryDomain` Submodule" id="@cdktf/provider-google.activeDirectoryDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomain <a name="ActiveDirectoryDomain" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain google_active_directory_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

activedirectorydomain.NewActiveDirectoryDomain(scope Construct, id *string, config ActiveDirectoryDomainConfig) ActiveDirectoryDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig">ActiveDirectoryDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig">ActiveDirectoryDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin">ResetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks">ResetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts"></a>

```go
func PutTimeouts(value ActiveDirectoryDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

---

##### `ResetAdmin` <a name="ResetAdmin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAdmin"></a>

```go
func ResetAdmin()
```

##### `ResetAuthorizedNetworks` <a name="ResetAuthorizedNetworks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetAuthorizedNetworks"></a>

```go
func ResetAuthorizedNetworks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

activedirectorydomain.ActiveDirectoryDomain_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

activedirectorydomain.ActiveDirectoryDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

activedirectorydomain.ActiveDirectoryDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput">AdminInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput">AuthorizedNetworksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput">LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin">Admin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeouts"></a>

```go
func Timeouts() ActiveDirectoryDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference">ActiveDirectoryDomainTimeoutsOutputReference</a>

---

##### `AdminInput`<sup>Optional</sup> <a name="AdminInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.adminInput"></a>

```go
func AdminInput() *string
```

- *Type:* *string

---

##### `AuthorizedNetworksInput`<sup>Optional</sup> <a name="AuthorizedNetworksInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworksInput"></a>

```go
func AuthorizedNetworksInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locationsInput"></a>

```go
func LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRangeInput"></a>

```go
func ReservedIpRangeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.admin"></a>

```go
func Admin() *string
```

- *Type:* *string

---

##### `AuthorizedNetworks`<sup>Required</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.authorizedNetworks"></a>

```go
func AuthorizedNetworks() *[]*string
```

- *Type:* *[]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.reservedIpRange"></a>

```go
func ReservedIpRange() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainConfig <a name="ActiveDirectoryDomainConfig" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

&activedirectorydomain.ActiveDirectoryDomainConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Locations: *[]*string,
	ReservedIpRange: *string,
	Admin: *string,
	AuthorizedNetworks: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,  https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations">Locations</a></code> | <code>*[]*string</code> | Locations where domain needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>*string</code> | The CIDR range of internal addresses that are reserved for this domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin">Admin</a></code> | <code>*string</code> | The name of delegated administrator account used to perform Active Directory operations.  If not specified, setupadmin will be used. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks">AuthorizedNetworks</a></code> | <code>*[]*string</code> | The full names of the Google Compute Engine networks the domain instance is connected to. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#id ActiveDirectoryDomain#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#project ActiveDirectoryDomain#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,  https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#domain_name ActiveDirectoryDomain#domain_name}

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.locations"></a>

```go
Locations *[]*string
```

- *Type:* *[]*string

Locations where domain needs to be provisioned.

[regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#locations ActiveDirectoryDomain#locations}

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.reservedIpRange"></a>

```go
ReservedIpRange *string
```

- *Type:* *string

The CIDR range of internal addresses that are reserved for this domain.

Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#reserved_ip_range ActiveDirectoryDomain#reserved_ip_range}

---

##### `Admin`<sup>Optional</sup> <a name="Admin" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.admin"></a>

```go
Admin *string
```

- *Type:* *string

The name of delegated administrator account used to perform Active Directory operations.  If not specified, setupadmin will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#admin ActiveDirectoryDomain#admin}

---

##### `AuthorizedNetworks`<sup>Optional</sup> <a name="AuthorizedNetworks" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.authorizedNetworks"></a>

```go
AuthorizedNetworks *[]*string
```

- *Type:* *[]*string

The full names of the Google Compute Engine networks the domain instance is connected to.

The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#authorized_networks ActiveDirectoryDomain#authorized_networks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#id ActiveDirectoryDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels that can contain user-provided metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#labels ActiveDirectoryDomain#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#project ActiveDirectoryDomain#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainConfig.property.timeouts"></a>

```go
Timeouts ActiveDirectoryDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts">ActiveDirectoryDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#timeouts ActiveDirectoryDomain#timeouts}

---

### ActiveDirectoryDomainTimeouts <a name="ActiveDirectoryDomainTimeouts" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

&activedirectorydomain.ActiveDirectoryDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#create ActiveDirectoryDomain#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#delete ActiveDirectoryDomain#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#update ActiveDirectoryDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#create ActiveDirectoryDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#delete ActiveDirectoryDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain#update ActiveDirectoryDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTimeoutsOutputReference <a name="ActiveDirectoryDomainTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/activedirectorydomain"

activedirectorydomain.NewActiveDirectoryDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActiveDirectoryDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.activeDirectoryDomain.ActiveDirectoryDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



