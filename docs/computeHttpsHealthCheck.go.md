# `computeHttpsHealthCheck` Submodule <a name="`computeHttpsHealthCheck` Submodule" id="@cdktf/provider-google.computeHttpsHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeHttpsHealthCheck <a name="ComputeHttpsHealthCheck" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check google_compute_https_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

computehttpshealthcheck.NewComputeHttpsHealthCheck(scope Construct, id *string, config ComputeHttpsHealthCheckConfig) ComputeHttpsHealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig">ComputeHttpsHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig">ComputeHttpsHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.putTimeouts"></a>

```go
func PutTimeouts(value ComputeHttpsHealthCheckTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts">ComputeHttpsHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetCheckIntervalSec"></a>

```go
func ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetId"></a>

```go
func ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

computehttpshealthcheck.ComputeHttpsHealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

computehttpshealthcheck.ComputeHttpsHealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

computehttpshealthcheck.ComputeHttpsHealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference">ComputeHttpsHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPathInput">RequestPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeouts"></a>

```go
func Timeouts() ComputeHttpsHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference">ComputeHttpsHealthCheckTimeoutsOutputReference</a>

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSecInput"></a>

```go
func CheckIntervalSecInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPathInput"></a>

```go
func RequestPathInput() *string
```

- *Type:* *string

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.checkIntervalSec"></a>

```go
func CheckIntervalSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.requestPath"></a>

```go
func RequestPath() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeHttpsHealthCheckConfig <a name="ComputeHttpsHealthCheckConfig" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

&computehttpshealthcheck.ComputeHttpsHealthCheckConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CheckIntervalSec: *f64,
	Description: *string,
	HealthyThreshold: *f64,
	Host: *string,
	Id: *string,
	Port: *f64,
	Project: *string,
	RequestPath: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts,
	TimeoutSec: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>*f64</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.host">Host</a></code> | <code>*string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#id ComputeHttpsHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.port">Port</a></code> | <code>*f64</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#project ComputeHttpsHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.requestPath">RequestPath</a></code> | <code>*string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts">ComputeHttpsHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#name ComputeHttpsHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.checkIntervalSec"></a>

```go
CheckIntervalSec *f64
```

- *Type:* *f64

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#check_interval_sec ComputeHttpsHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#description ComputeHttpsHealthCheck#description}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#healthy_threshold ComputeHttpsHealthCheck#healthy_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The value of the host header in the HTTPS health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#host ComputeHttpsHealthCheck#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#id ComputeHttpsHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#port ComputeHttpsHealthCheck#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#project ComputeHttpsHealthCheck#project}.

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.requestPath"></a>

```go
RequestPath *string
```

- *Type:* *string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#request_path ComputeHttpsHealthCheck#request_path}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeouts"></a>

```go
Timeouts ComputeHttpsHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts">ComputeHttpsHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#timeouts ComputeHttpsHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#timeout_sec ComputeHttpsHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckConfig.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#unhealthy_threshold ComputeHttpsHealthCheck#unhealthy_threshold}

---

### ComputeHttpsHealthCheckTimeouts <a name="ComputeHttpsHealthCheckTimeouts" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

&computehttpshealthcheck.ComputeHttpsHealthCheckTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#create ComputeHttpsHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#delete ComputeHttpsHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#update ComputeHttpsHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#create ComputeHttpsHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#delete ComputeHttpsHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_https_health_check#update ComputeHttpsHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeHttpsHealthCheckTimeoutsOutputReference <a name="ComputeHttpsHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computehttpshealthcheck"

computehttpshealthcheck.NewComputeHttpsHealthCheckTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeHttpsHealthCheckTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeHttpsHealthCheck.ComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



