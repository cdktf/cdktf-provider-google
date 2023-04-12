# `networkServicesEdgeCacheOrigin` Submodule <a name="`networkServicesEdgeCacheOrigin` Submodule" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEdgeCacheOrigin <a name="NetworkServicesEdgeCacheOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin google_network_services_edge_cache_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOrigin(scope Construct, id *string, config NetworkServicesEdgeCacheOriginConfig) NetworkServicesEdgeCacheOrigin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig">NetworkServicesEdgeCacheOriginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig">NetworkServicesEdgeCacheOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putAwsV4Authentication">PutAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginOverrideAction">PutOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginRedirect">PutOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetAwsV4Authentication">ResetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetFailoverOrigin">ResetFailoverOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginOverrideAction">ResetOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginRedirect">ResetOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAwsV4Authentication` <a name="PutAwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putAwsV4Authentication"></a>

```go
func PutAwsV4Authentication(value NetworkServicesEdgeCacheOriginAwsV4Authentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `PutOriginOverrideAction` <a name="PutOriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginOverrideAction"></a>

```go
func PutOriginOverrideAction(value NetworkServicesEdgeCacheOriginOriginOverrideAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `PutOriginRedirect` <a name="PutOriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginRedirect"></a>

```go
func PutOriginRedirect(value NetworkServicesEdgeCacheOriginOriginRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putOriginRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeout"></a>

```go
func PutTimeout(value NetworkServicesEdgeCacheOriginTimeout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesEdgeCacheOriginTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts">NetworkServicesEdgeCacheOriginTimeouts</a>

---

##### `ResetAwsV4Authentication` <a name="ResetAwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetAwsV4Authentication"></a>

```go
func ResetAwsV4Authentication()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFailoverOrigin` <a name="ResetFailoverOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetFailoverOrigin"></a>

```go
func ResetFailoverOrigin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetMaxAttempts"></a>

```go
func ResetMaxAttempts()
```

##### `ResetOriginOverrideAction` <a name="ResetOriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginOverrideAction"></a>

```go
func ResetOriginOverrideAction()
```

##### `ResetOriginRedirect` <a name="ResetOriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetOriginRedirect"></a>

```go
func ResetOriginRedirect()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetRetryConditions"></a>

```go
func ResetRetryConditions()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NetworkServicesEdgeCacheOrigin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NetworkServicesEdgeCacheOrigin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NetworkServicesEdgeCacheOrigin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideAction">OriginOverrideAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirect">OriginRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference">NetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference">NetworkServicesEdgeCacheOriginTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference">NetworkServicesEdgeCacheOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput">AwsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOriginInput">FailoverOriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddressInput">OriginAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideActionInput">OriginOverrideActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirectInput">OriginRedirectInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOrigin">FailoverOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttempts">MaxAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddress">OriginAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsV4Authentication`<sup>Required</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4Authentication"></a>

```go
func AwsV4Authentication() NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a>

---

##### `OriginOverrideAction`<sup>Required</sup> <a name="OriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideAction"></a>

```go
func OriginOverrideAction() NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a>

---

##### `OriginRedirect`<sup>Required</sup> <a name="OriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirect"></a>

```go
func OriginRedirect() NetworkServicesEdgeCacheOriginOriginRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference">NetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeout"></a>

```go
func Timeout() NetworkServicesEdgeCacheOriginTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference">NetworkServicesEdgeCacheOriginTimeoutOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeouts"></a>

```go
func Timeouts() NetworkServicesEdgeCacheOriginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference">NetworkServicesEdgeCacheOriginTimeoutsOutputReference</a>

---

##### `AwsV4AuthenticationInput`<sup>Optional</sup> <a name="AwsV4AuthenticationInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput"></a>

```go
func AwsV4AuthenticationInput() NetworkServicesEdgeCacheOriginAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FailoverOriginInput`<sup>Optional</sup> <a name="FailoverOriginInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOriginInput"></a>

```go
func FailoverOriginInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttemptsInput"></a>

```go
func MaxAttemptsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OriginAddressInput`<sup>Optional</sup> <a name="OriginAddressInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddressInput"></a>

```go
func OriginAddressInput() *string
```

- *Type:* *string

---

##### `OriginOverrideActionInput`<sup>Optional</sup> <a name="OriginOverrideActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originOverrideActionInput"></a>

```go
func OriginOverrideActionInput() NetworkServicesEdgeCacheOriginOriginOverrideAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `OriginRedirectInput`<sup>Optional</sup> <a name="OriginRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originRedirectInput"></a>

```go
func OriginRedirectInput() NetworkServicesEdgeCacheOriginOriginRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditionsInput"></a>

```go
func RetryConditionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutInput"></a>

```go
func TimeoutInput() NetworkServicesEdgeCacheOriginTimeout
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FailoverOrigin`<sup>Required</sup> <a name="FailoverOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.failoverOrigin"></a>

```go
func FailoverOrigin() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.maxAttempts"></a>

```go
func MaxAttempts() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OriginAddress`<sup>Required</sup> <a name="OriginAddress" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.originAddress"></a>

```go
func OriginAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.retryConditions"></a>

```go
func RetryConditions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOrigin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEdgeCacheOriginAwsV4Authentication <a name="NetworkServicesEdgeCacheOriginAwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginAwsV4Authentication {
	AccessKeyId: *string,
	OriginRegion: *string,
	SecretAccessKeyVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | The access key ID your origin uses to identify the key. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion">OriginRegion</a></code> | <code>*string</code> | The name of the AWS region that your origin is in. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion">SecretAccessKeyVersion</a></code> | <code>*string</code> | The Secret Manager secret version of the secret access key used by your origin. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

The access key ID your origin uses to identify the key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#access_key_id NetworkServicesEdgeCacheOrigin#access_key_id}

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion"></a>

```go
OriginRegion *string
```

- *Type:* *string

The name of the AWS region that your origin is in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#origin_region NetworkServicesEdgeCacheOrigin#origin_region}

---

##### `SecretAccessKeyVersion`<sup>Required</sup> <a name="SecretAccessKeyVersion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion"></a>

```go
SecretAccessKeyVersion *string
```

- *Type:* *string

The Secret Manager secret version of the secret access key used by your origin.

This is the resource name of the secret version in the format 'projects/*/secrets/*/versions/*' where the '*' values are replaced by the project, secret, and version you require.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#secret_access_key_version NetworkServicesEdgeCacheOrigin#secret_access_key_version}

---

### NetworkServicesEdgeCacheOriginConfig <a name="NetworkServicesEdgeCacheOriginConfig" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OriginAddress: *string,
	AwsV4Authentication: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication,
	Description: *string,
	FailoverOrigin: *string,
	Id: *string,
	Labels: *map[string]*string,
	MaxAttempts: *f64,
	OriginOverrideAction: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction,
	OriginRedirect: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect,
	Port: *f64,
	Project: *string,
	Protocol: *string,
	RetryConditions: *[]*string,
	Timeout: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originAddress">OriginAddress</a></code> | <code>*string</code> | A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.failoverOrigin">FailoverOrigin</a></code> | <code>*string</code> | The Origin resource to try when the current origin cannot be reached. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#id NetworkServicesEdgeCacheOrigin#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.maxAttempts">MaxAttempts</a></code> | <code>*f64</code> | The maximum number of attempts to cache fill from this origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originOverrideAction">OriginOverrideAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | origin_override_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originRedirect">OriginRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a></code> | origin_redirect block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.port">Port</a></code> | <code>*f64</code> | The port to connect to the origin on. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#project NetworkServicesEdgeCacheOrigin#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol to use to connect to the configured origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | Specifies one or more retry conditions for the configured origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a></code> | timeout block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts">NetworkServicesEdgeCacheOriginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#name NetworkServicesEdgeCacheOrigin#name}

---

##### `OriginAddress`<sup>Required</sup> <a name="OriginAddress" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originAddress"></a>

```go
OriginAddress *string
```

- *Type:* *string

A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.

This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname

When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#origin_address NetworkServicesEdgeCacheOrigin#origin_address}

---

##### `AwsV4Authentication`<sup>Optional</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication"></a>

```go
AwsV4Authentication NetworkServicesEdgeCacheOriginAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#aws_v4_authentication NetworkServicesEdgeCacheOrigin#aws_v4_authentication}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#description NetworkServicesEdgeCacheOrigin#description}

---

##### `FailoverOrigin`<sup>Optional</sup> <a name="FailoverOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.failoverOrigin"></a>

```go
FailoverOrigin *string
```

- *Type:* *string

The Origin resource to try when the current origin cannot be reached.

After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.

The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#failover_origin NetworkServicesEdgeCacheOrigin#failover_origin}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#id NetworkServicesEdgeCacheOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the EdgeCache resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#labels NetworkServicesEdgeCacheOrigin#labels}

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.maxAttempts"></a>

```go
MaxAttempts *f64
```

- *Type:* *f64

The maximum number of attempts to cache fill from this origin.

Another attempt is made when a cache fill fails with one of the retryConditions.

Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.

The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.

The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.

Defaults to 1. Must be a value greater than 0 and less than 4.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#max_attempts NetworkServicesEdgeCacheOrigin#max_attempts}

---

##### `OriginOverrideAction`<sup>Optional</sup> <a name="OriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originOverrideAction"></a>

```go
OriginOverrideAction NetworkServicesEdgeCacheOriginOriginOverrideAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

origin_override_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#origin_override_action NetworkServicesEdgeCacheOrigin#origin_override_action}

---

##### `OriginRedirect`<sup>Optional</sup> <a name="OriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.originRedirect"></a>

```go
OriginRedirect NetworkServicesEdgeCacheOriginOriginRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

origin_redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#origin_redirect NetworkServicesEdgeCacheOrigin#origin_redirect}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port to connect to the origin on.

Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#port NetworkServicesEdgeCacheOrigin#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#project NetworkServicesEdgeCacheOrigin#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol to use to connect to the configured origin.

Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.

When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#protocol NetworkServicesEdgeCacheOrigin#protocol}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.retryConditions"></a>

```go
RetryConditions *[]*string
```

- *Type:* *[]*string

Specifies one or more retry conditions for the configured origin.

If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.

The default retryCondition is "CONNECT_FAILURE".

retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.

Valid values are:

* CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
* HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
* GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
* NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
* FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#retry_conditions NetworkServicesEdgeCacheOrigin#retry_conditions}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeout"></a>

```go
Timeout NetworkServicesEdgeCacheOriginTimeout
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#timeout NetworkServicesEdgeCacheOrigin#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesEdgeCacheOriginTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts">NetworkServicesEdgeCacheOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#timeouts NetworkServicesEdgeCacheOrigin#timeouts}

---

### NetworkServicesEdgeCacheOriginOriginOverrideAction <a name="NetworkServicesEdgeCacheOriginOriginOverrideAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginOriginOverrideAction {
	HeaderAction: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction,
	UrlRewrite: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction"></a>

```go
HeaderAction NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#header_action NetworkServicesEdgeCacheOrigin#header_action}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite"></a>

```go
UrlRewrite NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#url_rewrite NetworkServicesEdgeCacheOrigin#url_rewrite}

---

### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction {
	RequestHeadersToAdd: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd">RequestHeadersToAdd</a></code> | <code>interface{}</code> | request_headers_to_add block. |

---

##### `RequestHeadersToAdd`<sup>Optional</sup> <a name="RequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd"></a>

```go
RequestHeadersToAdd interface{}
```

- *Type:* interface{}

request_headers_to_add block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#request_headers_to_add NetworkServicesEdgeCacheOrigin#request_headers_to_add}

---

### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
	HeaderName: *string,
	HeaderValue: *string,
	Replace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace">Replace</a></code> | <code>interface{}</code> | Whether to replace all existing headers with the same name. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to add.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#header_name NetworkServicesEdgeCacheOrigin#header_name}

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The value of the header to add.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#header_value NetworkServicesEdgeCacheOrigin#header_value}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace"></a>

```go
Replace interface{}
```

- *Type:* interface{}

Whether to replace all existing headers with the same name.

By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.

To overwrite existing values, set 'replace' to 'true'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#replace NetworkServicesEdgeCacheOrigin#replace}

---

### NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite {
	HostRewrite: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite">HostRewrite</a></code> | <code>*string</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite. |

---

##### `HostRewrite`<sup>Optional</sup> <a name="HostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite"></a>

```go
HostRewrite *string
```

- *Type:* *string

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite.

This value must be between 1 and 255 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#host_rewrite NetworkServicesEdgeCacheOrigin#host_rewrite}

---

### NetworkServicesEdgeCacheOriginOriginRedirect <a name="NetworkServicesEdgeCacheOriginOriginRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginOriginRedirect {
	RedirectConditions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions">RedirectConditions</a></code> | <code>*[]*string</code> | The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted. |

---

##### `RedirectConditions`<sup>Optional</sup> <a name="RedirectConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions"></a>

```go
RedirectConditions *[]*string
```

- *Type:* *[]*string

The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#redirect_conditions NetworkServicesEdgeCacheOrigin#redirect_conditions}

---

### NetworkServicesEdgeCacheOriginTimeout <a name="NetworkServicesEdgeCacheOriginTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginTimeout {
	ConnectTimeout: *string,
	MaxAttemptsTimeout: *string,
	ReadTimeout: *string,
	ResponseTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout">MaxAttemptsTimeout</a></code> | <code>*string</code> | The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.readTimeout">ReadTimeout</a></code> | <code>*string</code> | The maximum duration to wait between reads of a single HTTP connection/stream. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.responseTimeout">ResponseTimeout</a></code> | <code>*string</code> | The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.connectTimeout"></a>

```go
ConnectTimeout *string
```

- *Type:* *string

The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.

The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#connect_timeout NetworkServicesEdgeCacheOrigin#connect_timeout}

---

##### `MaxAttemptsTimeout`<sup>Optional</sup> <a name="MaxAttemptsTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout"></a>

```go
MaxAttemptsTimeout *string
```

- *Type:* *string

The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client.

A HTTP 504 will be returned if the timeout is reached before a response is returned.

Defaults to 15 seconds. The timeout must be a value between 1s and 30s.

If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#max_attempts_timeout NetworkServicesEdgeCacheOrigin#max_attempts_timeout}

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.readTimeout"></a>

```go
ReadTimeout *string
```

- *Type:* *string

The maximum duration to wait between reads of a single HTTP connection/stream.

Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.

The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#read_timeout NetworkServicesEdgeCacheOrigin#read_timeout}

---

##### `ResponseTimeout`<sup>Optional</sup> <a name="ResponseTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout.property.responseTimeout"></a>

```go
ResponseTimeout *string
```

- *Type:* *string

The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.

Defaults to 30 seconds. The timeout must be a value between 1s and 120s.

The responseTimeout starts after the connection has been established.

This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#response_timeout NetworkServicesEdgeCacheOrigin#response_timeout}

---

### NetworkServicesEdgeCacheOriginTimeouts <a name="NetworkServicesEdgeCacheOriginTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

&networkservicesedgecacheorigin.NetworkServicesEdgeCacheOriginTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#create NetworkServicesEdgeCacheOrigin#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#delete NetworkServicesEdgeCacheOrigin#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#update NetworkServicesEdgeCacheOrigin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#create NetworkServicesEdgeCacheOrigin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#delete NetworkServicesEdgeCacheOrigin#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_origin#update NetworkServicesEdgeCacheOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference <a name="NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput">OriginRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput">SecretAccessKeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion">OriginRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion">SecretAccessKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `OriginRegionInput`<sup>Optional</sup> <a name="OriginRegionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```go
func OriginRegionInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyVersionInput`<sup>Optional</sup> <a name="SecretAccessKeyVersionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput"></a>

```go
func SecretAccessKeyVersionInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion"></a>

```go
func OriginRegion() *string
```

- *Type:* *string

---

##### `SecretAccessKeyVersion`<sup>Required</sup> <a name="SecretAccessKeyVersion" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion"></a>

```go
func SecretAccessKeyVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheOriginAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginAwsV4Authentication">NetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd">PutRequestHeadersToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd">ResetRequestHeadersToAdd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdd` <a name="PutRequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd"></a>

```go
func PutRequestHeadersToAdd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestHeadersToAdd` <a name="ResetRequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd"></a>

```go
func ResetRequestHeadersToAdd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd">RequestHeadersToAdd</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput">RequestHeadersToAddInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeadersToAdd`<sup>Required</sup> <a name="RequestHeadersToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd"></a>

```go
func RequestHeadersToAdd() NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a>

---

##### `RequestHeadersToAddInput`<sup>Optional</sup> <a name="RequestHeadersToAddInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput"></a>

```go
func RequestHeadersToAddInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace"></a>

```go
func ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace">Replace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput"></a>

```go
func ReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace"></a>

```go
func Replace() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction"></a>

```go
func PutHeaderAction(value NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite"></a>

```go
func PutUrlRewrite(value NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction"></a>

```go
func ResetHeaderAction()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite"></a>

```go
func ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction"></a>

```go
func HeaderAction() NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite"></a>

```go
func UrlRewrite() NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a>

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput"></a>

```go
func HeaderActionInput() NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">NetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput"></a>

```go
func UrlRewriteInput() NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheOriginOriginOverrideAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideAction">NetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---


### NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference <a name="NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite">ResetHostRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRewrite` <a name="ResetHostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite"></a>

```go
func ResetHostRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput">HostRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite">HostRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostRewriteInput`<sup>Optional</sup> <a name="HostRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```go
func HostRewriteInput() *string
```

- *Type:* *string

---

##### `HostRewrite`<sup>Required</sup> <a name="HostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite"></a>

```go
func HostRewrite() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">NetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---


### NetworkServicesEdgeCacheOriginOriginRedirectOutputReference <a name="NetworkServicesEdgeCacheOriginOriginRedirectOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginOriginRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginOriginRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions">ResetRedirectConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectConditions` <a name="ResetRedirectConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions"></a>

```go
func ResetRedirectConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput">RedirectConditionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions">RedirectConditions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectConditionsInput`<sup>Optional</sup> <a name="RedirectConditionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput"></a>

```go
func RedirectConditionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectConditions`<sup>Required</sup> <a name="RedirectConditions" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions"></a>

```go
func RedirectConditions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheOriginOriginRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginOriginRedirect">NetworkServicesEdgeCacheOriginOriginRedirect</a>

---


### NetworkServicesEdgeCacheOriginTimeoutOutputReference <a name="NetworkServicesEdgeCacheOriginTimeoutOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout">ResetMaxAttemptsTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout">ResetResponseTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout"></a>

```go
func ResetConnectTimeout()
```

##### `ResetMaxAttemptsTimeout` <a name="ResetMaxAttemptsTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout"></a>

```go
func ResetMaxAttemptsTimeout()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout"></a>

```go
func ResetReadTimeout()
```

##### `ResetResponseTimeout` <a name="ResetResponseTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout"></a>

```go
func ResetResponseTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput">MaxAttemptsTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput">ResponseTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout">MaxAttemptsTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout">ReadTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout">ResponseTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput"></a>

```go
func ConnectTimeoutInput() *string
```

- *Type:* *string

---

##### `MaxAttemptsTimeoutInput`<sup>Optional</sup> <a name="MaxAttemptsTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput"></a>

```go
func MaxAttemptsTimeoutInput() *string
```

- *Type:* *string

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput"></a>

```go
func ReadTimeoutInput() *string
```

- *Type:* *string

---

##### `ResponseTimeoutInput`<sup>Optional</sup> <a name="ResponseTimeoutInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput"></a>

```go
func ResponseTimeoutInput() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *string
```

- *Type:* *string

---

##### `MaxAttemptsTimeout`<sup>Required</sup> <a name="MaxAttemptsTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout"></a>

```go
func MaxAttemptsTimeout() *string
```

- *Type:* *string

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout"></a>

```go
func ReadTimeout() *string
```

- *Type:* *string

---

##### `ResponseTimeout`<sup>Required</sup> <a name="ResponseTimeout" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout"></a>

```go
func ResponseTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheOriginTimeout
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeout">NetworkServicesEdgeCacheOriginTimeout</a>

---


### NetworkServicesEdgeCacheOriginTimeoutsOutputReference <a name="NetworkServicesEdgeCacheOriginTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheorigin"

networkservicesedgecacheorigin.NewNetworkServicesEdgeCacheOriginTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheOriginTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheOrigin.NetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



