# `computeBackendServiceSignedUrlKey` Submodule <a name="`computeBackendServiceSignedUrlKey` Submodule" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendServiceSignedUrlKey <a name="ComputeBackendServiceSignedUrlKey" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key google_compute_backend_service_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

computebackendservicesignedurlkey.NewComputeBackendServiceSignedUrlKey(scope Construct, id *string, config ComputeBackendServiceSignedUrlKeyConfig) ComputeBackendServiceSignedUrlKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig">ComputeBackendServiceSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig">ComputeBackendServiceSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts"></a>

```go
func PutTimeouts(value ComputeBackendServiceSignedUrlKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

computebackendservicesignedurlkey.ComputeBackendServiceSignedUrlKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

computebackendservicesignedurlkey.ComputeBackendServiceSignedUrlKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

computebackendservicesignedurlkey.ComputeBackendServiceSignedUrlKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendServiceInput">BackendServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValueInput">KeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendService">BackendService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValue">KeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeouts"></a>

```go
func Timeouts() ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a>

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendServiceInput"></a>

```go
func BackendServiceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyValueInput`<sup>Optional</sup> <a name="KeyValueInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValueInput"></a>

```go
func KeyValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendService"></a>

```go
func BackendService() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValue"></a>

```go
func KeyValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendServiceSignedUrlKeyConfig <a name="ComputeBackendServiceSignedUrlKeyConfig" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

&computebackendservicesignedurlkey.ComputeBackendServiceSignedUrlKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendService: *string,
	KeyValue: *string,
	Name: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.backendService">BackendService</a></code> | <code>*string</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.keyValue">KeyValue</a></code> | <code>*string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.backendService"></a>

```go
BackendService *string
```

- *Type:* *string

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#backend_service ComputeBackendServiceSignedUrlKey#backend_service}

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.keyValue"></a>

```go
KeyValue *string
```

- *Type:* *string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#key_value ComputeBackendServiceSignedUrlKey#key_value}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#name ComputeBackendServiceSignedUrlKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.timeouts"></a>

```go
Timeouts ComputeBackendServiceSignedUrlKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#timeouts ComputeBackendServiceSignedUrlKey#timeouts}

---

### ComputeBackendServiceSignedUrlKeyTimeouts <a name="ComputeBackendServiceSignedUrlKeyTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

&computebackendservicesignedurlkey.ComputeBackendServiceSignedUrlKeyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computebackendservicesignedurlkey"

computebackendservicesignedurlkey.NewComputeBackendServiceSignedUrlKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



