# `computeTargetHttpProxy` Submodule <a name="`computeTargetHttpProxy` Submodule" id="@cdktf/provider-google.computeTargetHttpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetHttpProxy <a name="ComputeTargetHttpProxy" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy google_compute_target_http_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

computetargethttpproxy.NewComputeTargetHttpProxy(scope Construct, id *string, config ComputeTargetHttpProxyConfig) ComputeTargetHttpProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig">ComputeTargetHttpProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig">ComputeTargetHttpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetProxyBind">ResetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeTargetHttpProxyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts">ComputeTargetHttpProxyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProxyBind` <a name="ResetProxyBind" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetProxyBind"></a>

```go
func ResetProxyBind()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

computetargethttpproxy.ComputeTargetHttpProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

computetargethttpproxy.ComputeTargetHttpProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

computetargethttpproxy.ComputeTargetHttpProxy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.proxyId">ProxyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference">ComputeTargetHttpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.proxyBindInput">ProxyBindInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.urlMapInput">UrlMapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.proxyBind">ProxyBind</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.urlMap">UrlMap</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.proxyId"></a>

```go
func ProxyId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.timeouts"></a>

```go
func Timeouts() ComputeTargetHttpProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference">ComputeTargetHttpProxyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProxyBindInput`<sup>Optional</sup> <a name="ProxyBindInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.proxyBindInput"></a>

```go
func ProxyBindInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlMapInput`<sup>Optional</sup> <a name="UrlMapInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.urlMapInput"></a>

```go
func UrlMapInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProxyBind`<sup>Required</sup> <a name="ProxyBind" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.proxyBind"></a>

```go
func ProxyBind() interface{}
```

- *Type:* interface{}

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.urlMap"></a>

```go
func UrlMap() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetHttpProxyConfig <a name="ComputeTargetHttpProxyConfig" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

&computetargethttpproxy.ComputeTargetHttpProxyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	UrlMap: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	ProxyBind: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.urlMap">UrlMap</a></code> | <code>*string</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#id ComputeTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#project ComputeTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.proxyBind">ProxyBind</a></code> | <code>interface{}</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts">ComputeTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#name ComputeTargetHttpProxy#name}

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.urlMap"></a>

```go
UrlMap *string
```

- *Type:* *string

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#url_map ComputeTargetHttpProxy#url_map}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#description ComputeTargetHttpProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#id ComputeTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#project ComputeTargetHttpProxy#project}.

---

##### `ProxyBind`<sup>Optional</sup> <a name="ProxyBind" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.proxyBind"></a>

```go
ProxyBind interface{}
```

- *Type:* interface{}

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#proxy_bind ComputeTargetHttpProxy#proxy_bind}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyConfig.property.timeouts"></a>

```go
Timeouts ComputeTargetHttpProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts">ComputeTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#timeouts ComputeTargetHttpProxy#timeouts}

---

### ComputeTargetHttpProxyTimeouts <a name="ComputeTargetHttpProxyTimeouts" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

&computetargethttpproxy.ComputeTargetHttpProxyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#create ComputeTargetHttpProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#delete ComputeTargetHttpProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#update ComputeTargetHttpProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#create ComputeTargetHttpProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#delete ComputeTargetHttpProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_http_proxy#update ComputeTargetHttpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetHttpProxyTimeoutsOutputReference <a name="ComputeTargetHttpProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargethttpproxy"

computetargethttpproxy.NewComputeTargetHttpProxyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeTargetHttpProxyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeTargetHttpProxy.ComputeTargetHttpProxyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



