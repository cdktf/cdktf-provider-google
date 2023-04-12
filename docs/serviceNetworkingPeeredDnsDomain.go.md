# `serviceNetworkingPeeredDnsDomain` Submodule <a name="`serviceNetworkingPeeredDnsDomain` Submodule" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingPeeredDnsDomain <a name="ServiceNetworkingPeeredDnsDomain" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

servicenetworkingpeereddnsdomain.NewServiceNetworkingPeeredDnsDomain(scope Construct, id *string, config ServiceNetworkingPeeredDnsDomainConfig) ServiceNetworkingPeeredDnsDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig">ServiceNetworkingPeeredDnsDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig">ServiceNetworkingPeeredDnsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts"></a>

```go
func PutTimeouts(value ServiceNetworkingPeeredDnsDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetProject"></a>

```go
func ResetProject()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetService"></a>

```go
func ResetService()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

servicenetworkingpeereddnsdomain.ServiceNetworkingPeeredDnsDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

servicenetworkingpeereddnsdomain.ServiceNetworkingPeeredDnsDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

servicenetworkingpeereddnsdomain.ServiceNetworkingPeeredDnsDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput">DnsSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeouts"></a>

```go
func Timeouts() ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a>

---

##### `DnsSuffixInput`<sup>Optional</sup> <a name="DnsSuffixInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput"></a>

```go
func DnsSuffixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```go
func DnsSuffix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingPeeredDnsDomainConfig <a name="ServiceNetworkingPeeredDnsDomainConfig" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

&servicenetworkingpeereddnsdomain.ServiceNetworkingPeeredDnsDomainConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsSuffix: *string,
	Name: *string,
	Network: *string,
	Id: *string,
	Project: *string,
	Service: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.name">Name</a></code> | <code>*string</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.network">Network</a></code> | <code>*string</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.service">Service</a></code> | <code>*string</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix"></a>

```go
DnsSuffix *string
```

- *Type:* *string

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#dns_suffix ServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#name ServiceNetworkingPeeredDnsDomain#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#network ServiceNetworkingPeeredDnsDomain#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#project ServiceNetworkingPeeredDnsDomain#project}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#service ServiceNetworkingPeeredDnsDomain#service}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.timeouts"></a>

```go
Timeouts ServiceNetworkingPeeredDnsDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#timeouts ServiceNetworkingPeeredDnsDomain#timeouts}

---

### ServiceNetworkingPeeredDnsDomainTimeouts <a name="ServiceNetworkingPeeredDnsDomainTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

&servicenetworkingpeereddnsdomain.ServiceNetworkingPeeredDnsDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference <a name="ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/servicenetworkingpeereddnsdomain"

servicenetworkingpeereddnsdomain.NewServiceNetworkingPeeredDnsDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



