# `dataGoogleServiceNetworkingPeeredDnsDomain` Submodule <a name="`dataGoogleServiceNetworkingPeeredDnsDomain` Submodule" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomain <a name="DataGoogleServiceNetworkingPeeredDnsDomain" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.NewDataGoogleServiceNetworkingPeeredDnsDomain(scope Construct, id *string, config DataGoogleServiceNetworkingPeeredDnsDomainConfig) DataGoogleServiceNetworkingPeeredDnsDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig">DataGoogleServiceNetworkingPeeredDnsDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig">DataGoogleServiceNetworkingPeeredDnsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleservicenetworkingpeereddnsdomain"

datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```go
func DnsSuffix() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceNetworkingPeeredDnsDomainConfig <a name="DataGoogleServiceNetworkingPeeredDnsDomainConfig" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleservicenetworkingpeereddnsdomain"

&datagoogleservicenetworkingpeereddnsdomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Project: *string,
	Service: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network">Network</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#name DataGoogleServiceNetworkingPeeredDnsDomain#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#network DataGoogleServiceNetworkingPeeredDnsDomain#network}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#project DataGoogleServiceNetworkingPeeredDnsDomain#project}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#service DataGoogleServiceNetworkingPeeredDnsDomain#service}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceNetworkingPeeredDnsDomain.DataGoogleServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_networking_peered_dns_domain#id DataGoogleServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



