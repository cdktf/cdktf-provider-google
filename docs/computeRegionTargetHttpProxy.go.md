# `computeRegionTargetHttpProxy` Submodule <a name="`computeRegionTargetHttpProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpProxy <a name="ComputeRegionTargetHttpProxy" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy google_compute_region_target_http_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

computeregiontargethttpproxy.NewComputeRegionTargetHttpProxy(scope Construct, id *string, config ComputeRegionTargetHttpProxyConfig) ComputeRegionTargetHttpProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig">ComputeRegionTargetHttpProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig">ComputeRegionTargetHttpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionTargetHttpProxyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

computeregiontargethttpproxy.ComputeRegionTargetHttpProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

computeregiontargethttpproxy.ComputeRegionTargetHttpProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

computeregiontargethttpproxy.ComputeRegionTargetHttpProxy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.proxyId">ProxyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference">ComputeRegionTargetHttpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMapInput">UrlMapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMap">UrlMap</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.proxyId"></a>

```go
func ProxyId() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeouts"></a>

```go
func Timeouts() ComputeRegionTargetHttpProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference">ComputeRegionTargetHttpProxyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlMapInput`<sup>Optional</sup> <a name="UrlMapInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMapInput"></a>

```go
func UrlMapInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMap"></a>

```go
func UrlMap() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpProxyConfig <a name="ComputeRegionTargetHttpProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

&computeregiontargethttpproxy.ComputeRegionTargetHttpProxyConfig {
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
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.urlMap">UrlMap</a></code> | <code>*string</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#name ComputeRegionTargetHttpProxy#name}

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.urlMap"></a>

```go
UrlMap *string
```

- *Type:* *string

A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#url_map ComputeRegionTargetHttpProxy#url_map}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#description ComputeRegionTargetHttpProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#region ComputeRegionTargetHttpProxy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionTargetHttpProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#timeouts ComputeRegionTargetHttpProxy#timeouts}

---

### ComputeRegionTargetHttpProxyTimeouts <a name="ComputeRegionTargetHttpProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

&computeregiontargethttpproxy.ComputeRegionTargetHttpProxyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregiontargethttpproxy"

computeregiontargethttpproxy.NewComputeRegionTargetHttpProxyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionTargetHttpProxyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



