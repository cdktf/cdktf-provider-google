# `networkServicesEdgeCacheService` Submodule <a name="`networkServicesEdgeCacheService` Submodule" id="@cdktf/provider-google.networkServicesEdgeCacheService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEdgeCacheService <a name="NetworkServicesEdgeCacheService" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service google_network_services_edge_cache_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheService(scope Construct, id *string, config NetworkServicesEdgeCacheServiceConfig) NetworkServicesEdgeCacheService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig">NetworkServicesEdgeCacheServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig">NetworkServicesEdgeCacheServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putRouting">PutRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableHttp2">ResetDisableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableQuic">ResetDisableQuic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSecurityPolicy">ResetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSslCertificates">ResetEdgeSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetRequireTls">ResetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putLogConfig"></a>

```go
func PutLogConfig(value NetworkServicesEdgeCacheServiceLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

---

##### `PutRouting` <a name="PutRouting" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putRouting"></a>

```go
func PutRouting(value NetworkServicesEdgeCacheServiceRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesEdgeCacheServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableHttp2` <a name="ResetDisableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableHttp2"></a>

```go
func ResetDisableHttp2()
```

##### `ResetDisableQuic` <a name="ResetDisableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableQuic"></a>

```go
func ResetDisableQuic()
```

##### `ResetEdgeSecurityPolicy` <a name="ResetEdgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSecurityPolicy"></a>

```go
func ResetEdgeSecurityPolicy()
```

##### `ResetEdgeSslCertificates` <a name="ResetEdgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSslCertificates"></a>

```go
func ResetEdgeSslCertificates()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequireTls` <a name="ResetRequireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetRequireTls"></a>

```go
func ResetRequireTls()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetSslPolicy"></a>

```go
func ResetSslPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NetworkServicesEdgeCacheService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NetworkServicesEdgeCacheService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NetworkServicesEdgeCacheService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference">NetworkServicesEdgeCacheServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference">NetworkServicesEdgeCacheServiceRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference">NetworkServicesEdgeCacheServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2Input">DisableHttp2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuicInput">DisableQuicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicyInput">EdgeSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificatesInput">EdgeSslCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTlsInput">RequireTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routingInput">RoutingInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicyInput">SslPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2">DisableHttp2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuic">DisableQuic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificates">EdgeSslCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTls">RequireTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv4Addresses"></a>

```go
func Ipv4Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfig"></a>

```go
func LogConfig() NetworkServicesEdgeCacheServiceLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference">NetworkServicesEdgeCacheServiceLogConfigOutputReference</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routing"></a>

```go
func Routing() NetworkServicesEdgeCacheServiceRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference">NetworkServicesEdgeCacheServiceRoutingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeouts"></a>

```go
func Timeouts() NetworkServicesEdgeCacheServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference">NetworkServicesEdgeCacheServiceTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableHttp2Input`<sup>Optional</sup> <a name="DisableHttp2Input" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2Input"></a>

```go
func DisableHttp2Input() interface{}
```

- *Type:* interface{}

---

##### `DisableQuicInput`<sup>Optional</sup> <a name="DisableQuicInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuicInput"></a>

```go
func DisableQuicInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeSecurityPolicyInput`<sup>Optional</sup> <a name="EdgeSecurityPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicyInput"></a>

```go
func EdgeSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `EdgeSslCertificatesInput`<sup>Optional</sup> <a name="EdgeSslCertificatesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificatesInput"></a>

```go
func EdgeSslCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfigInput"></a>

```go
func LogConfigInput() NetworkServicesEdgeCacheServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RequireTlsInput`<sup>Optional</sup> <a name="RequireTlsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTlsInput"></a>

```go
func RequireTlsInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routingInput"></a>

```go
func RoutingInput() NetworkServicesEdgeCacheServiceRouting
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicyInput"></a>

```go
func SslPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableHttp2`<sup>Required</sup> <a name="DisableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2"></a>

```go
func DisableHttp2() interface{}
```

- *Type:* interface{}

---

##### `DisableQuic`<sup>Required</sup> <a name="DisableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuic"></a>

```go
func DisableQuic() interface{}
```

- *Type:* interface{}

---

##### `EdgeSecurityPolicy`<sup>Required</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicy"></a>

```go
func EdgeSecurityPolicy() *string
```

- *Type:* *string

---

##### `EdgeSslCertificates`<sup>Required</sup> <a name="EdgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificates"></a>

```go
func EdgeSslCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RequireTls`<sup>Required</sup> <a name="RequireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTls"></a>

```go
func RequireTls() interface{}
```

- *Type:* interface{}

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEdgeCacheServiceConfig <a name="NetworkServicesEdgeCacheServiceConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Routing: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting,
	Description: *string,
	DisableHttp2: interface{},
	DisableQuic: interface{},
	EdgeSecurityPolicy: *string,
	EdgeSslCertificates: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	LogConfig: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig,
	Project: *string,
	RequireTls: interface{},
	SslPolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableHttp2">DisableHttp2</a></code> | <code>interface{}</code> | Disables HTTP/2. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableQuic">DisableQuic</a></code> | <code>interface{}</code> | HTTP/3 (IETF QUIC) and Google QUIC are enabled by default. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>*string</code> | Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSslCertificates">EdgeSslCertificates</a></code> | <code>*[]*string</code> | URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#id NetworkServicesEdgeCacheService#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#project NetworkServicesEdgeCacheService#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.requireTls">RequireTls</a></code> | <code>interface{}</code> | Require TLS (HTTPS) for all clients connecting to this service. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | URL of the SslPolicy resource that will be associated with the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.routing"></a>

```go
Routing NetworkServicesEdgeCacheServiceRouting
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

routing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#routing NetworkServicesEdgeCacheService#routing}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

##### `DisableHttp2`<sup>Optional</sup> <a name="DisableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableHttp2"></a>

```go
DisableHttp2 interface{}
```

- *Type:* interface{}

Disables HTTP/2.

HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.

Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#disable_http2 NetworkServicesEdgeCacheService#disable_http2}

---

##### `DisableQuic`<sup>Optional</sup> <a name="DisableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableQuic"></a>

```go
DisableQuic interface{}
```

- *Type:* interface{}

HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#disable_quic NetworkServicesEdgeCacheService#disable_quic}

---

##### `EdgeSecurityPolicy`<sup>Optional</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSecurityPolicy"></a>

```go
EdgeSecurityPolicy *string
```

- *Type:* *string

Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#edge_security_policy NetworkServicesEdgeCacheService#edge_security_policy}

---

##### `EdgeSslCertificates`<sup>Optional</sup> <a name="EdgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSslCertificates"></a>

```go
EdgeSslCertificates *[]*string
```

- *Type:* *[]*string

URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.

Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#edge_ssl_certificates NetworkServicesEdgeCacheService#edge_ssl_certificates}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#id NetworkServicesEdgeCacheService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the EdgeCache resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#labels NetworkServicesEdgeCacheService#labels}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.logConfig"></a>

```go
LogConfig NetworkServicesEdgeCacheServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#log_config NetworkServicesEdgeCacheService#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#project NetworkServicesEdgeCacheService#project}.

---

##### `RequireTls`<sup>Optional</sup> <a name="RequireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.requireTls"></a>

```go
RequireTls interface{}
```

- *Type:* interface{}

Require TLS (HTTPS) for all clients connecting to this service.

Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#require_tls NetworkServicesEdgeCacheService#require_tls}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.sslPolicy"></a>

```go
SslPolicy *string
```

- *Type:* *string

URL of the SslPolicy resource that will be associated with the EdgeCacheService.

If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#ssl_policy NetworkServicesEdgeCacheService#ssl_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesEdgeCacheServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#timeouts NetworkServicesEdgeCacheService#timeouts}

---

### NetworkServicesEdgeCacheServiceLogConfig <a name="NetworkServicesEdgeCacheServiceLogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceLogConfig {
	Enable: interface{},
	SampleRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Specifies whether to enable logging for traffic served by this service. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1]. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Specifies whether to enable logging for traffic served by this service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#enable NetworkServicesEdgeCacheService#enable}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].

This field can only be specified if logging is enabled for this service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#sample_rate NetworkServicesEdgeCacheService#sample_rate}

---

### NetworkServicesEdgeCacheServiceRouting <a name="NetworkServicesEdgeCacheServiceRouting" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRouting {
	HostRule: interface{},
	PathMatcher: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.hostRule">HostRule</a></code> | <code>interface{}</code> | host_rule block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.pathMatcher">PathMatcher</a></code> | <code>interface{}</code> | path_matcher block. |

---

##### `HostRule`<sup>Required</sup> <a name="HostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.hostRule"></a>

```go
HostRule interface{}
```

- *Type:* interface{}

host_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#host_rule NetworkServicesEdgeCacheService#host_rule}

---

##### `PathMatcher`<sup>Required</sup> <a name="PathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.pathMatcher"></a>

```go
PathMatcher interface{}
```

- *Type:* interface{}

path_matcher block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#path_matcher NetworkServicesEdgeCacheService#path_matcher}

---

### NetworkServicesEdgeCacheServiceRoutingHostRule <a name="NetworkServicesEdgeCacheServiceRoutingHostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingHostRule {
	Hosts: *[]*string,
	PathMatcher: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.hosts">Hosts</a></code> | <code>*[]*string</code> | The list of host patterns to match. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.pathMatcher">PathMatcher</a></code> | <code>*string</code> | The name of the pathMatcher associated with this hostRule. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the hostRule. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

The list of host patterns to match.

Host patterns must be valid hostnames. Ports are not allowed. Wildcard hosts are supported in the suffix or prefix form. * matches any string of ([a-z0-9-.]*). It does not match the empty string.

When multiple hosts are specified, hosts are matched in the following priority:

1. Exact domain names: ''www.foo.com''.
2. Suffix domain wildcards: ''*.foo.com'' or ''*-bar.foo.com''.
3. Prefix domain wildcards: ''foo.*'' or ''foo-*''.
4. Special wildcard ''*'' matching any domain.

Notes:

The wildcard will not match the empty string. e.g. ''*-bar.foo.com'' will match ''baz-bar.foo.com'' but not ''-bar.foo.com''. The longest wildcards match first. Only a single host in the entire service can match on ''*''. A domain must be unique across all configured hosts within a service.

Hosts are matched against the HTTP Host header, or for HTTP/2 and HTTP/3, the ":authority" header, from the incoming request.

You may specify up to 10 hosts.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#hosts NetworkServicesEdgeCacheService#hosts}

---

##### `PathMatcher`<sup>Required</sup> <a name="PathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.pathMatcher"></a>

```go
PathMatcher *string
```

- *Type:* *string

The name of the pathMatcher associated with this hostRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#path_matcher NetworkServicesEdgeCacheService#path_matcher}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the hostRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcher <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcher {
	Name: *string,
	RouteRule: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.name">Name</a></code> | <code>*string</code> | The name to which this PathMatcher is referred by the HostRule. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.routeRule">RouteRule</a></code> | <code>interface{}</code> | route_rule block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name to which this PathMatcher is referred by the HostRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `RouteRule`<sup>Required</sup> <a name="RouteRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.routeRule"></a>

```go
RouteRule interface{}
```

- *Type:* interface{}

route_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#route_rule NetworkServicesEdgeCacheService#route_rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule {
	MatchRule: interface{},
	Priority: *string,
	Description: *string,
	HeaderAction: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction,
	Origin: *string,
	RouteAction: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction,
	UrlRedirect: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.matchRule">MatchRule</a></code> | <code>interface{}</code> | match_rule block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.priority">Priority</a></code> | <code>*string</code> | The priority of this route rule, where 1 is the highest priority. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the routeRule. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.origin">Origin</a></code> | <code>*string</code> | The Origin resource that requests to this route should fetch from when a matching response is not in cache. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeAction">RouteAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | route_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.urlRedirect">UrlRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | url_redirect block. |

---

##### `MatchRule`<sup>Required</sup> <a name="MatchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.matchRule"></a>

```go
MatchRule interface{}
```

- *Type:* interface{}

match_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#match_rule NetworkServicesEdgeCacheService#match_rule}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

The priority of this route rule, where 1 is the highest priority.

You cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 1 and 999 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers
to which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#priority NetworkServicesEdgeCacheService#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the routeRule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.headerAction"></a>

```go
HeaderAction NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_action NetworkServicesEdgeCacheService#header_action}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

The Origin resource that requests to this route should fetch from when a matching response is not in cache.

Origins can be defined as short names ("my-origin") or fully-qualified resource URLs - e.g. "networkservices.googleapis.com/projects/my-project/global/edgecacheorigins/my-origin"

Only one of origin or urlRedirect can be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#origin NetworkServicesEdgeCacheService#origin}

---

##### `RouteAction`<sup>Optional</sup> <a name="RouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeAction"></a>

```go
RouteAction NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

route_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#route_action NetworkServicesEdgeCacheService#route_action}

---

##### `UrlRedirect`<sup>Optional</sup> <a name="UrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.urlRedirect"></a>

```go
UrlRedirect NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

url_redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#url_redirect NetworkServicesEdgeCacheService#url_redirect}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction {
	RequestHeaderToAdd: interface{},
	RequestHeaderToRemove: interface{},
	ResponseHeaderToAdd: interface{},
	ResponseHeaderToRemove: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToAdd">RequestHeaderToAdd</a></code> | <code>interface{}</code> | request_header_to_add block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToRemove">RequestHeaderToRemove</a></code> | <code>interface{}</code> | request_header_to_remove block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToAdd">ResponseHeaderToAdd</a></code> | <code>interface{}</code> | response_header_to_add block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToRemove">ResponseHeaderToRemove</a></code> | <code>interface{}</code> | response_header_to_remove block. |

---

##### `RequestHeaderToAdd`<sup>Optional</sup> <a name="RequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToAdd"></a>

```go
RequestHeaderToAdd interface{}
```

- *Type:* interface{}

request_header_to_add block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#request_header_to_add NetworkServicesEdgeCacheService#request_header_to_add}

---

##### `RequestHeaderToRemove`<sup>Optional</sup> <a name="RequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToRemove"></a>

```go
RequestHeaderToRemove interface{}
```

- *Type:* interface{}

request_header_to_remove block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#request_header_to_remove NetworkServicesEdgeCacheService#request_header_to_remove}

---

##### `ResponseHeaderToAdd`<sup>Optional</sup> <a name="ResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToAdd"></a>

```go
ResponseHeaderToAdd interface{}
```

- *Type:* interface{}

response_header_to_add block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#response_header_to_add NetworkServicesEdgeCacheService#response_header_to_add}

---

##### `ResponseHeaderToRemove`<sup>Optional</sup> <a name="ResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToRemove"></a>

```go
ResponseHeaderToRemove interface{}
```

- *Type:* interface{}

response_header_to_remove block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#response_header_to_remove NetworkServicesEdgeCacheService#response_header_to_remove}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd {
	HeaderName: *string,
	HeaderValue: *string,
	Replace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.replace">Replace</a></code> | <code>interface{}</code> | Whether to replace all existing headers with the same name. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to add.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The value of the header to add.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_value NetworkServicesEdgeCacheService#header_value}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.replace"></a>

```go
Replace interface{}
```

- *Type:* interface{}

Whether to replace all existing headers with the same name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#replace NetworkServicesEdgeCacheService#replace}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove {
	HeaderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to remove. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to remove.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd {
	HeaderName: *string,
	HeaderValue: *string,
	Replace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.replace">Replace</a></code> | <code>interface{}</code> | Whether to replace all existing headers with the same name. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to add.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The value of the header to add.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_value NetworkServicesEdgeCacheService#header_value}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.replace"></a>

```go
Replace interface{}
```

- *Type:* interface{}

Whether to replace all existing headers with the same name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#replace NetworkServicesEdgeCacheService#replace}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove {
	HeaderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.property.headerName">HeaderName</a></code> | <code>*string</code> | Headers to remove from the response prior to sending it back to the client. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Headers to remove from the response prior to sending it back to the client.

Response headers are only sent to the client, and do not have an effect on the cache serving the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule {
	FullPathMatch: *string,
	HeaderMatch: interface{},
	IgnoreCase: interface{},
	PathTemplateMatch: *string,
	PrefixMatch: *string,
	QueryParameterMatch: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.fullPathMatch">FullPathMatch</a></code> | <code>*string</code> | For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.headerMatch">HeaderMatch</a></code> | <code>interface{}</code> | header_match block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | Specifies that prefixMatch and fullPathMatch matches are case sensitive. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.pathTemplateMatch">PathTemplateMatch</a></code> | <code>*string</code> | For satisfying the matchRule condition, the path of the request must match the wildcard pattern specified in pathTemplateMatch after removing any query parameters and anchor that may be part of the original URL. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.queryParameterMatch">QueryParameterMatch</a></code> | <code>interface{}</code> | query_parameter_match block. |

---

##### `FullPathMatch`<sup>Optional</sup> <a name="FullPathMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.fullPathMatch"></a>

```go
FullPathMatch *string
```

- *Type:* *string

For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#full_path_match NetworkServicesEdgeCacheService#full_path_match}

---

##### `HeaderMatch`<sup>Optional</sup> <a name="HeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.headerMatch"></a>

```go
HeaderMatch interface{}
```

- *Type:* interface{}

header_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_match NetworkServicesEdgeCacheService#header_match}

---

##### `IgnoreCase`<sup>Optional</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.ignoreCase"></a>

```go
IgnoreCase interface{}
```

- *Type:* interface{}

Specifies that prefixMatch and fullPathMatch matches are case sensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#ignore_case NetworkServicesEdgeCacheService#ignore_case}

---

##### `PathTemplateMatch`<sup>Optional</sup> <a name="PathTemplateMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.pathTemplateMatch"></a>

```go
PathTemplateMatch *string
```

- *Type:* *string

For satisfying the matchRule condition, the path of the request must match the wildcard pattern specified in pathTemplateMatch after removing any query parameters and anchor that may be part of the original URL.

pathTemplateMatch must be between 1 and 255 characters
(inclusive).  The pattern specified by pathTemplateMatch may
have at most 5 wildcard operators and at most 5 variable
captures in total.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#path_template_match NetworkServicesEdgeCacheService#path_template_match}

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.prefixMatch"></a>

```go
PrefixMatch *string
```

- *Type:* *string

For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch.

prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#prefix_match NetworkServicesEdgeCacheService#prefix_match}

---

##### `QueryParameterMatch`<sup>Optional</sup> <a name="QueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.queryParameterMatch"></a>

```go
QueryParameterMatch interface{}
```

- *Type:* interface{}

query_parameter_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#query_parameter_match NetworkServicesEdgeCacheService#query_parameter_match}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch {
	HeaderName: *string,
	ExactMatch: *string,
	InvertMatch: interface{},
	PrefixMatch: *string,
	PresentMatch: interface{},
	SuffixMatch: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.headerName">HeaderName</a></code> | <code>*string</code> | The header name to match on. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | The value of the header should exactly match contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.invertMatch">InvertMatch</a></code> | <code>interface{}</code> | If set to false (default), the headerMatch is considered a match if the match criteria above are met. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | A header with the contents of headerName must exist. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.suffixMatch">SuffixMatch</a></code> | <code>*string</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The header name to match on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.exactMatch"></a>

```go
ExactMatch *string
```

- *Type:* *string

The value of the header should exactly match contents of exactMatch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#exact_match NetworkServicesEdgeCacheService#exact_match}

---

##### `InvertMatch`<sup>Optional</sup> <a name="InvertMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.invertMatch"></a>

```go
InvertMatch interface{}
```

- *Type:* interface{}

If set to false (default), the headerMatch is considered a match if the match criteria above are met.

If set to true, the headerMatch is considered a match if the match criteria above are NOT met.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#invert_match NetworkServicesEdgeCacheService#invert_match}

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.prefixMatch"></a>

```go
PrefixMatch *string
```

- *Type:* *string

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#prefix_match NetworkServicesEdgeCacheService#prefix_match}

---

##### `PresentMatch`<sup>Optional</sup> <a name="PresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.presentMatch"></a>

```go
PresentMatch interface{}
```

- *Type:* interface{}

A header with the contents of headerName must exist.

The match takes place whether or not the request's header has a value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#present_match NetworkServicesEdgeCacheService#present_match}

---

##### `SuffixMatch`<sup>Optional</sup> <a name="SuffixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.suffixMatch"></a>

```go
SuffixMatch *string
```

- *Type:* *string

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#suffix_match NetworkServicesEdgeCacheService#suffix_match}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch {
	Name: *string,
	ExactMatch: *string,
	PresentMatch: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.name">Name</a></code> | <code>*string</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the query parameter to match.

The query parameter must exist in the request, in the absence of which the request match fails.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.exactMatch"></a>

```go
ExactMatch *string
```

- *Type:* *string

The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#exact_match NetworkServicesEdgeCacheService#exact_match}

---

##### `PresentMatch`<sup>Optional</sup> <a name="PresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.presentMatch"></a>

```go
PresentMatch interface{}
```

- *Type:* interface{}

Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#present_match NetworkServicesEdgeCacheService#present_match}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction {
	CdnPolicy: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy,
	CorsPolicy: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy,
	UrlRewrite: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.corsPolicy">CorsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `CdnPolicy`<sup>Optional</sup> <a name="CdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.cdnPolicy"></a>

```go
CdnPolicy NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#cdn_policy NetworkServicesEdgeCacheService#cdn_policy}

---

##### `CorsPolicy`<sup>Optional</sup> <a name="CorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.corsPolicy"></a>

```go
CorsPolicy NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#cors_policy NetworkServicesEdgeCacheService#cors_policy}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.urlRewrite"></a>

```go
UrlRewrite NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#url_rewrite NetworkServicesEdgeCacheService#url_rewrite}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy {
	AddSignatures: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures,
	CacheKeyPolicy: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy,
	CacheMode: *string,
	ClientTtl: *string,
	DefaultTtl: *string,
	MaxTtl: *string,
	NegativeCaching: interface{},
	NegativeCachingPolicy: *map[string]*string,
	SignedRequestKeyset: *string,
	SignedRequestMaximumExpirationTtl: *string,
	SignedRequestMode: *string,
	SignedTokenOptions: github.com/cdktf/cdktf-provider-google-go/google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.addSignatures">AddSignatures</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | add_signatures block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheMode">CacheMode</a></code> | <code>*string</code> | Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.clientTtl">ClientTtl</a></code> | <code>*string</code> | Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.defaultTtl">DefaultTtl</a></code> | <code>*string</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>*map[string]*string</code> | Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestKeyset">SignedRequestKeyset</a></code> | <code>*string</code> | The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMaximumExpirationTtl">SignedRequestMaximumExpirationTtl</a></code> | <code>*string</code> | Limit how far into the future the expiration time of a signed request may be. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMode">SignedRequestMode</a></code> | <code>*string</code> | Whether to enforce signed requests. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedTokenOptions">SignedTokenOptions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | signed_token_options block. |

---

##### `AddSignatures`<sup>Optional</sup> <a name="AddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.addSignatures"></a>

```go
AddSignatures NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

add_signatures block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#add_signatures NetworkServicesEdgeCacheService#add_signatures}

---

##### `CacheKeyPolicy`<sup>Optional</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheKeyPolicy"></a>

```go
CacheKeyPolicy NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#cache_key_policy NetworkServicesEdgeCacheService#cache_key_policy}

---

##### `CacheMode`<sup>Optional</sup> <a name="CacheMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheMode"></a>

```go
CacheMode *string
```

- *Type:* *string

Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses.

For all cache modes, Cache-Control headers will be passed to the client. Use clientTtl to override what is sent to the client. Possible values: ["CACHE_ALL_STATIC", "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "BYPASS_CACHE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#cache_mode NetworkServicesEdgeCacheService#cache_mode}

---

##### `ClientTtl`<sup>Optional</sup> <a name="ClientTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.clientTtl"></a>

```go
ClientTtl *string
```

- *Type:* *string

Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response.

* The TTL must be > 0 and <= 86400s (1 day)
* The clientTtl cannot be larger than the defaultTtl (if set)
* Fractions of a second are not allowed.

Omit this field to use the defaultTtl, or the max-age set by the origin, as the client-facing TTL.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.
A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#client_ttl NetworkServicesEdgeCacheService#client_ttl}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.defaultTtl"></a>

```go
DefaultTtl *string
```

- *Type:* *string

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Defaults to 3600s (1 hour).

* The TTL must be >= 0 and <= 31,536,000 seconds (1 year)
* Setting a TTL of "0" means "always revalidate" (equivalent to must-revalidate)
* The value of defaultTTL cannot be set to a value greater than that of maxTTL.
* Fractions of a second are not allowed.
* When the cacheMode is set to FORCE_CACHE_ALL, the defaultTTL will overwrite the TTL set in all responses.

Note that infrequently accessed objects may be evicted from the cache before the defined TTL. Objects that expire will be revalidated with the origin.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.

A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#default_ttl NetworkServicesEdgeCacheService#default_ttl}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.maxTtl"></a>

```go
MaxTtl *string
```

- *Type:* *string

Specifies the maximum allowed TTL for cached content served by this origin.

Defaults to 86400s (1 day).

Cache directives that attempt to set a max-age or s-maxage higher than this, or an Expires header more than maxTtl seconds in the future will be capped at the value of maxTTL, as if it were the value of an s-maxage Cache-Control directive.

* The TTL must be >= 0 and <= 31,536,000 seconds (1 year)
* Setting a TTL of "0" means "always revalidate"
* The value of maxTtl must be equal to or greater than defaultTtl.
* Fractions of a second are not allowed.

When the cache mode is set to "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", or "BYPASS_CACHE", you must omit this field.

A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#max_ttl NetworkServicesEdgeCacheService#max_ttl}

---

##### `NegativeCaching`<sup>Optional</sup> <a name="NegativeCaching" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCaching"></a>

```go
NegativeCaching interface{}
```

- *Type:* interface{}

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

This can reduce the load on your origin and improve end-user experience by reducing response latency.

By default, the CDNPolicy will apply the following default TTLs to these status codes:

* HTTP 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
* HTTP 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
* HTTP 405 (Method Not Found), 414 (URI Too Long), 501 (Not Implemented): 60s

These defaults can be overridden in negativeCachingPolicy

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#negative_caching NetworkServicesEdgeCacheService#negative_caching}

---

##### `NegativeCachingPolicy`<sup>Optional</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCachingPolicy"></a>

```go
NegativeCachingPolicy *map[string]*string
```

- *Type:* *map[string]*string

Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.

* Omitting the policy and leaving negativeCaching enabled will use the default TTLs for each status code, defined in negativeCaching.
* TTLs must be >= 0 (where 0 is "always revalidate") and <= 86400s (1 day)

Note that when specifying an explicit negativeCachingPolicy, you should take care to specify a cache TTL for all response codes that you wish to cache. The CDNPolicy will not apply any default negative caching when a policy exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#negative_caching_policy NetworkServicesEdgeCacheService#negative_caching_policy}

---

##### `SignedRequestKeyset`<sup>Optional</sup> <a name="SignedRequestKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestKeyset"></a>

```go
SignedRequestKeyset *string
```

- *Type:* *string

The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#signed_request_keyset NetworkServicesEdgeCacheService#signed_request_keyset}

---

##### `SignedRequestMaximumExpirationTtl`<sup>Optional</sup> <a name="SignedRequestMaximumExpirationTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMaximumExpirationTtl"></a>

```go
SignedRequestMaximumExpirationTtl *string
```

- *Type:* *string

Limit how far into the future the expiration time of a signed request may be.

When set, a signed request is rejected if its expiration time is later than now + signedRequestMaximumExpirationTtl, where now is the time at which the signed request is first handled by the CDN.

* The TTL must be > 0.
* Fractions of a second are not allowed.

By default, signedRequestMaximumExpirationTtl is not set and the expiration time of a signed request may be arbitrarily far into future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#signed_request_maximum_expiration_ttl NetworkServicesEdgeCacheService#signed_request_maximum_expiration_ttl}

---

##### `SignedRequestMode`<sup>Optional</sup> <a name="SignedRequestMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMode"></a>

```go
SignedRequestMode *string
```

- *Type:* *string

Whether to enforce signed requests.

The default value is DISABLED, which means all content is public, and does not authorize access.

You must also set a signedRequestKeyset to enable signed requests.

When set to REQUIRE_SIGNATURES, all matching requests will have their signature validated. Requests that were not signed with the corresponding private key, or that are otherwise invalid (expired, do not match the signature, IP address, or header) will be rejected with a HTTP 403 and (if enabled) logged. Possible values: ["DISABLED", "REQUIRE_SIGNATURES", "REQUIRE_TOKENS"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#signed_request_mode NetworkServicesEdgeCacheService#signed_request_mode}

---

##### `SignedTokenOptions`<sup>Optional</sup> <a name="SignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedTokenOptions"></a>

```go
SignedTokenOptions NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

signed_token_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#signed_token_options NetworkServicesEdgeCacheService#signed_token_options}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures {
	Actions: *[]*string,
	CopiedParameters: *[]*string,
	Keyset: *string,
	TokenQueryParameter: *string,
	TokenTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.actions">Actions</a></code> | <code>*[]*string</code> | The actions to take to add signatures to responses. Possible values: ["GENERATE_COOKIE", "GENERATE_TOKEN_HLS_COOKIELESS", "PROPAGATE_TOKEN_HLS_COOKIELESS"]. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.copiedParameters">CopiedParameters</a></code> | <code>*[]*string</code> | The parameters to copy from the verified token to the generated token. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.keyset">Keyset</a></code> | <code>*string</code> | The keyset to use for signature generation. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenQueryParameter">TokenQueryParameter</a></code> | <code>*string</code> | The query parameter in which to put the generated token. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | The duration the token is valid starting from the moment the token is first generated. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

The actions to take to add signatures to responses. Possible values: ["GENERATE_COOKIE", "GENERATE_TOKEN_HLS_COOKIELESS", "PROPAGATE_TOKEN_HLS_COOKIELESS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#actions NetworkServicesEdgeCacheService#actions}

---

##### `CopiedParameters`<sup>Optional</sup> <a name="CopiedParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.copiedParameters"></a>

```go
CopiedParameters *[]*string
```

- *Type:* *[]*string

The parameters to copy from the verified token to the generated token.

Only the following parameters may be copied:

'PathGlobs'
'paths'
'acl'
'URLPrefix'
'IPRanges'
'SessionID'
'id'
'Data'
'data'
'payload'
'Headers'

You may specify up to 6 parameters to copy.  A given parameter is be copied only if the parameter exists in the verified token.  Parameter names are matched exactly as specified.  The order of the parameters does not matter.  Duplicates are not allowed.

This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#copied_parameters NetworkServicesEdgeCacheService#copied_parameters}

---

##### `Keyset`<sup>Optional</sup> <a name="Keyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.keyset"></a>

```go
Keyset *string
```

- *Type:* *string

The keyset to use for signature generation.

The following are both valid paths to an EdgeCacheKeyset resource:

'projects/project/locations/global/edgeCacheKeysets/yourKeyset'
'yourKeyset'

This must be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.  This field may not be specified otherwise.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#keyset NetworkServicesEdgeCacheService#keyset}

---

##### `TokenQueryParameter`<sup>Optional</sup> <a name="TokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenQueryParameter"></a>

```go
TokenQueryParameter *string
```

- *Type:* *string

The query parameter in which to put the generated token.

If not specified, defaults to 'edge-cache-token'.

If specified, the name must be 1-64 characters long and match the regular expression '[a-zA-Z](%5Ba-zA-Z0-9_-%5D)*' which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

This field may only be set when the GENERATE_TOKEN_HLS_COOKIELESS or PROPAGATE_TOKEN_HLS_COOKIELESS actions are specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#token_query_parameter NetworkServicesEdgeCacheService#token_query_parameter}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenTtl"></a>

```go
TokenTtl *string
```

- *Type:* *string

The duration the token is valid starting from the moment the token is first generated.

Defaults to '86400s' (1 day).

The TTL must be >= 0 and <= 604,800 seconds (1 week).

This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#token_ttl NetworkServicesEdgeCacheService#token_ttl}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy {
	ExcludedQueryParameters: *[]*string,
	ExcludeHost: interface{},
	ExcludeQueryString: interface{},
	IncludedCookieNames: *[]*string,
	IncludedHeaderNames: *[]*string,
	IncludedQueryParameters: *[]*string,
	IncludeProtocol: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludedQueryParameters">ExcludedQueryParameters</a></code> | <code>*[]*string</code> | Names of query string parameters to exclude from cache keys. All other parameters will be included. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeHost">ExcludeHost</a></code> | <code>interface{}</code> | If true, requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeQueryString">ExcludeQueryString</a></code> | <code>interface{}</code> | If true, exclude query string parameters from the cache key. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedCookieNames">IncludedCookieNames</a></code> | <code>*[]*string</code> | Names of Cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedHeaderNames">IncludedHeaderNames</a></code> | <code>*[]*string</code> | Names of HTTP request headers to include in cache keys. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedQueryParameters">IncludedQueryParameters</a></code> | <code>*[]*string</code> | Names of query string parameters to include in cache keys. All other parameters will be excluded. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | If true, http and https requests will be cached separately. |

---

##### `ExcludedQueryParameters`<sup>Optional</sup> <a name="ExcludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludedQueryParameters"></a>

```go
ExcludedQueryParameters *[]*string
```

- *Type:* *[]*string

Names of query string parameters to exclude from cache keys. All other parameters will be included.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#excluded_query_parameters NetworkServicesEdgeCacheService#excluded_query_parameters}

---

##### `ExcludeHost`<sup>Optional</sup> <a name="ExcludeHost" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeHost"></a>

```go
ExcludeHost interface{}
```

- *Type:* interface{}

If true, requests to different hosts will be cached separately.

Note: this should only be enabled if hosts share the same origin and content. Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#exclude_host NetworkServicesEdgeCacheService#exclude_host}

---

##### `ExcludeQueryString`<sup>Optional</sup> <a name="ExcludeQueryString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeQueryString"></a>

```go
ExcludeQueryString interface{}
```

- *Type:* interface{}

If true, exclude query string parameters from the cache key.

If false (the default), include the query string parameters in
the cache key according to includeQueryParameters and
excludeQueryParameters. If neither includeQueryParameters nor
excludeQueryParameters is set, the entire query string will be
included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#exclude_query_string NetworkServicesEdgeCacheService#exclude_query_string}

---

##### `IncludedCookieNames`<sup>Optional</sup> <a name="IncludedCookieNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedCookieNames"></a>

```go
IncludedCookieNames *[]*string
```

- *Type:* *[]*string

Names of Cookies to include in cache keys.

The cookie name and cookie value of each cookie named will be used as part of the cache key.

Cookie names:

* must be valid RFC 6265 "cookie-name" tokens
* are case sensitive
* cannot start with "Edge-Cache-" (case insensitive)

Note that specifying several cookies, and/or cookies that have a large range of values (e.g., per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.

You may specify up to three cookie names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#included_cookie_names NetworkServicesEdgeCacheService#included_cookie_names}

---

##### `IncludedHeaderNames`<sup>Optional</sup> <a name="IncludedHeaderNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedHeaderNames"></a>

```go
IncludedHeaderNames *[]*string
```

- *Type:* *[]*string

Names of HTTP request headers to include in cache keys.

The value of the header field will be used as part of the cache key.

* Header names must be valid HTTP RFC 7230 header field values.
* Header field names are case insensitive
* To include the HTTP method, use ":method"

Note that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#included_header_names NetworkServicesEdgeCacheService#included_header_names}

---

##### `IncludedQueryParameters`<sup>Optional</sup> <a name="IncludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedQueryParameters"></a>

```go
IncludedQueryParameters *[]*string
```

- *Type:* *[]*string

Names of query string parameters to include in cache keys. All other parameters will be excluded.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#included_query_parameters NetworkServicesEdgeCacheService#included_query_parameters}

---

##### `IncludeProtocol`<sup>Optional</sup> <a name="IncludeProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```go
IncludeProtocol interface{}
```

- *Type:* interface{}

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#include_protocol NetworkServicesEdgeCacheService#include_protocol}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions {
	AllowedSignatureAlgorithms: *[]*string,
	TokenQueryParameter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.allowedSignatureAlgorithms">AllowedSignatureAlgorithms</a></code> | <code>*[]*string</code> | The allowed signature algorithms to use. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.tokenQueryParameter">TokenQueryParameter</a></code> | <code>*string</code> | The query parameter in which to find the token. |

---

##### `AllowedSignatureAlgorithms`<sup>Optional</sup> <a name="AllowedSignatureAlgorithms" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.allowedSignatureAlgorithms"></a>

```go
AllowedSignatureAlgorithms *[]*string
```

- *Type:* *[]*string

The allowed signature algorithms to use.

Defaults to using only ED25519.

You may specify up to 3 signature algorithms to use. Possible values: ["ED25519", "HMAC_SHA_256", "HMAC_SHA1"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#allowed_signature_algorithms NetworkServicesEdgeCacheService#allowed_signature_algorithms}

---

##### `TokenQueryParameter`<sup>Optional</sup> <a name="TokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.tokenQueryParameter"></a>

```go
TokenQueryParameter *string
```

- *Type:* *string

The query parameter in which to find the token.

The name must be 1-64 characters long and match the regular expression '[a-zA-Z](%5Ba-zA-Z0-9_-%5D)*' which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Defaults to 'edge-cache-token'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#token_query_parameter NetworkServicesEdgeCacheService#token_query_parameter}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy {
	MaxAge: *string,
	AllowCredentials: interface{},
	AllowHeaders: *[]*string,
	AllowMethods: *[]*string,
	AllowOrigins: *[]*string,
	Disabled: interface{},
	ExposeHeaders: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.maxAge">MaxAge</a></code> | <code>*string</code> | Specifies how long results of a preflight request can be cached by a client in seconds. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | Specifies the content for the Access-Control-Allow-Headers response header. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | Specifies the content for the Access-Control-Allow-Methods response header. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.disabled">Disabled</a></code> | <code>interface{}</code> | If true, specifies the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | Specifies the content for the Access-Control-Allow-Headers response header. |

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.maxAge"></a>

```go
MaxAge *string
```

- *Type:* *string

Specifies how long results of a preflight request can be cached by a client in seconds.

Note that many browser clients enforce a maximum TTL of 600s (10 minutes).

* Setting the value to -1 forces a pre-flight check for all requests (not recommended)
* A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.
* This translates to the Access-Control-Max-Age header.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#max_age NetworkServicesEdgeCacheService#max_age}

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

This translates to the Access-Control-Allow-Credentials response header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#allow_credentials NetworkServicesEdgeCacheService#allow_credentials}

---

##### `AllowHeaders`<sup>Optional</sup> <a name="AllowHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowHeaders"></a>

```go
AllowHeaders *[]*string
```

- *Type:* *[]*string

Specifies the content for the Access-Control-Allow-Headers response header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#allow_headers NetworkServicesEdgeCacheService#allow_headers}

---

##### `AllowMethods`<sup>Optional</sup> <a name="AllowMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowMethods"></a>

```go
AllowMethods *[]*string
```

- *Type:* *[]*string

Specifies the content for the Access-Control-Allow-Methods response header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#allow_methods NetworkServicesEdgeCacheService#allow_methods}

---

##### `AllowOrigins`<sup>Optional</sup> <a name="AllowOrigins" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowOrigins"></a>

```go
AllowOrigins *[]*string
```

- *Type:* *[]*string

Specifies the list of origins that will be allowed to do CORS requests.

This translates to the Access-Control-Allow-Origin response header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#allow_origins NetworkServicesEdgeCacheService#allow_origins}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

If true, specifies the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#disabled NetworkServicesEdgeCacheService#disabled}

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.exposeHeaders"></a>

```go
ExposeHeaders *[]*string
```

- *Type:* *[]*string

Specifies the content for the Access-Control-Allow-Headers response header.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#expose_headers NetworkServicesEdgeCacheService#expose_headers}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite {
	HostRewrite: *string,
	PathPrefixRewrite: *string,
	PathTemplateRewrite: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.hostRewrite">HostRewrite</a></code> | <code>*string</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathPrefixRewrite">PathPrefixRewrite</a></code> | <code>*string</code> | Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathTemplateRewrite">PathTemplateRewrite</a></code> | <code>*string</code> | Prior to forwarding the request to the selected origin, if the request matched a pathTemplateMatch, the matching portion of the request's path is replaced re-written using the pattern specified by pathTemplateRewrite. |

---

##### `HostRewrite`<sup>Optional</sup> <a name="HostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.hostRewrite"></a>

```go
HostRewrite *string
```

- *Type:* *string

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#host_rewrite NetworkServicesEdgeCacheService#host_rewrite}

---

##### `PathPrefixRewrite`<sup>Optional</sup> <a name="PathPrefixRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathPrefixRewrite"></a>

```go
PathPrefixRewrite *string
```

- *Type:* *string

Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#path_prefix_rewrite NetworkServicesEdgeCacheService#path_prefix_rewrite}

---

##### `PathTemplateRewrite`<sup>Optional</sup> <a name="PathTemplateRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathTemplateRewrite"></a>

```go
PathTemplateRewrite *string
```

- *Type:* *string

Prior to forwarding the request to the selected origin, if the request matched a pathTemplateMatch, the matching portion of the request's path is replaced re-written using the pattern specified by pathTemplateRewrite.

pathTemplateRewrite must be between 1 and 255 characters
(inclusive), must start with a '/', and must only use variables
captured by the route's pathTemplate matchers.

pathTemplateRewrite may only be used when all of a route's
MatchRules specify pathTemplate.

Only one of pathPrefixRewrite and pathTemplateRewrite may be
specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#path_template_rewrite NetworkServicesEdgeCacheService#path_template_rewrite}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect {
	HostRedirect: *string,
	HttpsRedirect: interface{},
	PathRedirect: *string,
	PrefixRedirect: *string,
	RedirectResponseCode: *string,
	StripQuery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.hostRedirect">HostRedirect</a></code> | <code>*string</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.httpsRedirect">HttpsRedirect</a></code> | <code>interface{}</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.pathRedirect">PathRedirect</a></code> | <code>*string</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.prefixRedirect">PrefixRedirect</a></code> | <code>*string</code> | The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>*string</code> | The HTTP Status code to use for this RedirectAction. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.stripQuery">StripQuery</a></code> | <code>interface{}</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `HostRedirect`<sup>Optional</sup> <a name="HostRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.hostRedirect"></a>

```go
HostRedirect *string
```

- *Type:* *string

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#host_redirect NetworkServicesEdgeCacheService#host_redirect}

---

##### `HttpsRedirect`<sup>Optional</sup> <a name="HttpsRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.httpsRedirect"></a>

```go
HttpsRedirect interface{}
```

- *Type:* interface{}

If set to true, the URL scheme in the redirected request is set to https.

If set to false, the URL scheme of the redirected request will remain the same as that of the request.

This can only be set if there is at least one (1) edgeSslCertificate set on the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#https_redirect NetworkServicesEdgeCacheService#https_redirect}

---

##### `PathRedirect`<sup>Optional</sup> <a name="PathRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.pathRedirect"></a>

```go
PathRedirect *string
```

- *Type:* *string

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

The path value must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#path_redirect NetworkServicesEdgeCacheService#path_redirect}

---

##### `PrefixRedirect`<sup>Optional</sup> <a name="PrefixRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.prefixRedirect"></a>

```go
PrefixRedirect *string
```

- *Type:* *string

The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request.

prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#prefix_redirect NetworkServicesEdgeCacheService#prefix_redirect}

---

##### `RedirectResponseCode`<sup>Optional</sup> <a name="RedirectResponseCode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.redirectResponseCode"></a>

```go
RedirectResponseCode *string
```

- *Type:* *string

The HTTP Status code to use for this RedirectAction.

The supported values are:

* 'MOVED_PERMANENTLY_DEFAULT', which is the default value and corresponds to 301.
* 'FOUND', which corresponds to 302.
* 'SEE_OTHER' which corresponds to 303.
* 'TEMPORARY_REDIRECT', which corresponds to 307. in this case, the request method will be retained.
* 'PERMANENT_REDIRECT', which corresponds to 308. in this case, the request method will be retained. Possible values: ["MOVED_PERMANENTLY_DEFAULT", "FOUND", "SEE_OTHER", "TEMPORARY_REDIRECT", "PERMANENT_REDIRECT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#redirect_response_code NetworkServicesEdgeCacheService#redirect_response_code}

---

##### `StripQuery`<sup>Optional</sup> <a name="StripQuery" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.stripQuery"></a>

```go
StripQuery interface{}
```

- *Type:* interface{}

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

If set to false, the query portion of the original URL is retained.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#strip_query NetworkServicesEdgeCacheService#strip_query}

---

### NetworkServicesEdgeCacheServiceTimeouts <a name="NetworkServicesEdgeCacheServiceTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

&networkservicesedgecacheservice.NetworkServicesEdgeCacheServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#create NetworkServicesEdgeCacheService#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#delete NetworkServicesEdgeCacheService#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#update NetworkServicesEdgeCacheService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#create NetworkServicesEdgeCacheService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#delete NetworkServicesEdgeCacheService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_service#update NetworkServicesEdgeCacheService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEdgeCacheServiceLogConfigOutputReference <a name="NetworkServicesEdgeCacheServiceLogConfigOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

---


### NetworkServicesEdgeCacheServiceRoutingHostRuleList <a name="NetworkServicesEdgeCacheServiceRoutingHostRuleList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingHostRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingHostRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcherInput">PathMatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcher">PathMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathMatcherInput`<sup>Optional</sup> <a name="PathMatcherInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcherInput"></a>

```go
func PathMatcherInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `PathMatcher`<sup>Required</sup> <a name="PathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcher"></a>

```go
func PathMatcher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule">PutHostRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher">PutPathMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostRule` <a name="PutHostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule"></a>

```go
func PutHostRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPathMatcher` <a name="PutPathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher"></a>

```go
func PutPathMatcher(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRule">HostRule</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList">NetworkServicesEdgeCacheServiceRoutingHostRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcher">PathMatcher</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList">NetworkServicesEdgeCacheServiceRoutingPathMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRuleInput">HostRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcherInput">PathMatcherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostRule`<sup>Required</sup> <a name="HostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRule"></a>

```go
func HostRule() NetworkServicesEdgeCacheServiceRoutingHostRuleList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList">NetworkServicesEdgeCacheServiceRoutingHostRuleList</a>

---

##### `PathMatcher`<sup>Required</sup> <a name="PathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcher"></a>

```go
func PathMatcher() NetworkServicesEdgeCacheServiceRoutingPathMatcherList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList">NetworkServicesEdgeCacheServiceRoutingPathMatcherList</a>

---

##### `HostRuleInput`<sup>Optional</sup> <a name="HostRuleInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRuleInput"></a>

```go
func HostRuleInput() interface{}
```

- *Type:* interface{}

---

##### `PathMatcherInput`<sup>Optional</sup> <a name="PathMatcherInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcherInput"></a>

```go
func PathMatcherInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRouting
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule">PutRouteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRouteRule` <a name="PutRouteRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule"></a>

```go
func PutRouteRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRule">RouteRule</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRuleInput">RouteRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouteRule`<sup>Required</sup> <a name="RouteRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRule"></a>

```go
func RouteRule() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RouteRuleInput`<sup>Optional</sup> <a name="RouteRuleInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRuleInput"></a>

```go
func RouteRuleInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd">PutRequestHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove">PutRequestHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd">PutResponseHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove">PutResponseHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToAdd">ResetRequestHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToRemove">ResetRequestHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToAdd">ResetResponseHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToRemove">ResetResponseHeaderToRemove</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeaderToAdd` <a name="PutRequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd"></a>

```go
func PutRequestHeaderToAdd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeaderToRemove` <a name="PutRequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove"></a>

```go
func PutRequestHeaderToRemove(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResponseHeaderToAdd` <a name="PutResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd"></a>

```go
func PutResponseHeaderToAdd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResponseHeaderToRemove` <a name="PutResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove"></a>

```go
func PutResponseHeaderToRemove(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestHeaderToAdd` <a name="ResetRequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToAdd"></a>

```go
func ResetRequestHeaderToAdd()
```

##### `ResetRequestHeaderToRemove` <a name="ResetRequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToRemove"></a>

```go
func ResetRequestHeaderToRemove()
```

##### `ResetResponseHeaderToAdd` <a name="ResetResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToAdd"></a>

```go
func ResetResponseHeaderToAdd()
```

##### `ResetResponseHeaderToRemove` <a name="ResetResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToRemove"></a>

```go
func ResetResponseHeaderToRemove()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAdd">RequestHeaderToAdd</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemove">RequestHeaderToRemove</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAdd">ResponseHeaderToAdd</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemove">ResponseHeaderToRemove</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAddInput">RequestHeaderToAddInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemoveInput">RequestHeaderToRemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAddInput">ResponseHeaderToAddInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemoveInput">ResponseHeaderToRemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeaderToAdd`<sup>Required</sup> <a name="RequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAdd"></a>

```go
func RequestHeaderToAdd() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList</a>

---

##### `RequestHeaderToRemove`<sup>Required</sup> <a name="RequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemove"></a>

```go
func RequestHeaderToRemove() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList</a>

---

##### `ResponseHeaderToAdd`<sup>Required</sup> <a name="ResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAdd"></a>

```go
func ResponseHeaderToAdd() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList</a>

---

##### `ResponseHeaderToRemove`<sup>Required</sup> <a name="ResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemove"></a>

```go
func ResponseHeaderToRemove() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList</a>

---

##### `RequestHeaderToAddInput`<sup>Optional</sup> <a name="RequestHeaderToAddInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAddInput"></a>

```go
func RequestHeaderToAddInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderToRemoveInput`<sup>Optional</sup> <a name="RequestHeaderToRemoveInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemoveInput"></a>

```go
func RequestHeaderToRemoveInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseHeaderToAddInput`<sup>Optional</sup> <a name="ResponseHeaderToAddInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAddInput"></a>

```go
func ResponseHeaderToAddInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseHeaderToRemoveInput`<sup>Optional</sup> <a name="ResponseHeaderToRemoveInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemoveInput"></a>

```go
func ResponseHeaderToRemoveInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resetReplace"></a>

```go
func ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replace">Replace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replaceInput"></a>

```go
func ReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replace"></a>

```go
func Replace() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resetReplace"></a>

```go
func ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replace">Replace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replaceInput"></a>

```go
func ReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replace"></a>

```go
func Replace() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetInvertMatch">ResetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPresentMatch">ResetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetSuffixMatch">ResetSuffixMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetInvertMatch` <a name="ResetInvertMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetInvertMatch"></a>

```go
func ResetInvertMatch()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPrefixMatch"></a>

```go
func ResetPrefixMatch()
```

##### `ResetPresentMatch` <a name="ResetPresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPresentMatch"></a>

```go
func ResetPresentMatch()
```

##### `ResetSuffixMatch` <a name="ResetSuffixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetSuffixMatch"></a>

```go
func ResetSuffixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatchInput">ExactMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatchInput">InvertMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatchInput">PresentMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatchInput">SuffixMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatch">InvertMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatch">SuffixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatchInput"></a>

```go
func ExactMatchInput() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `InvertMatchInput`<sup>Optional</sup> <a name="InvertMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatchInput"></a>

```go
func InvertMatchInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatchInput"></a>

```go
func PrefixMatchInput() *string
```

- *Type:* *string

---

##### `PresentMatchInput`<sup>Optional</sup> <a name="PresentMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatchInput"></a>

```go
func PresentMatchInput() interface{}
```

- *Type:* interface{}

---

##### `SuffixMatchInput`<sup>Optional</sup> <a name="SuffixMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatchInput"></a>

```go
func SuffixMatchInput() *string
```

- *Type:* *string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatch"></a>

```go
func ExactMatch() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `InvertMatch`<sup>Required</sup> <a name="InvertMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatch"></a>

```go
func InvertMatch() interface{}
```

- *Type:* interface{}

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatch"></a>

```go
func PrefixMatch() *string
```

- *Type:* *string

---

##### `PresentMatch`<sup>Required</sup> <a name="PresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatch"></a>

```go
func PresentMatch() interface{}
```

- *Type:* interface{}

---

##### `SuffixMatch`<sup>Required</sup> <a name="SuffixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatch"></a>

```go
func SuffixMatch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch">PutHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch">PutQueryParameterMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetFullPathMatch">ResetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetHeaderMatch">ResetHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetIgnoreCase">ResetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPathTemplateMatch">ResetPathTemplateMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetQueryParameterMatch">ResetQueryParameterMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderMatch` <a name="PutHeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch"></a>

```go
func PutHeaderMatch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParameterMatch` <a name="PutQueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch"></a>

```go
func PutQueryParameterMatch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFullPathMatch` <a name="ResetFullPathMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetFullPathMatch"></a>

```go
func ResetFullPathMatch()
```

##### `ResetHeaderMatch` <a name="ResetHeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetHeaderMatch"></a>

```go
func ResetHeaderMatch()
```

##### `ResetIgnoreCase` <a name="ResetIgnoreCase" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetIgnoreCase"></a>

```go
func ResetIgnoreCase()
```

##### `ResetPathTemplateMatch` <a name="ResetPathTemplateMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPathTemplateMatch"></a>

```go
func ResetPathTemplateMatch()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPrefixMatch"></a>

```go
func ResetPrefixMatch()
```

##### `ResetQueryParameterMatch` <a name="ResetQueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetQueryParameterMatch"></a>

```go
func ResetQueryParameterMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatch">HeaderMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatch">QueryParameterMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatchInput">FullPathMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatchInput">HeaderMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCaseInput">IgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatchInput">PathTemplateMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatchInput">QueryParameterMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatch">FullPathMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCase">IgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatch">PathTemplateMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderMatch`<sup>Required</sup> <a name="HeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatch"></a>

```go
func HeaderMatch() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList</a>

---

##### `QueryParameterMatch`<sup>Required</sup> <a name="QueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatch"></a>

```go
func QueryParameterMatch() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList</a>

---

##### `FullPathMatchInput`<sup>Optional</sup> <a name="FullPathMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatchInput"></a>

```go
func FullPathMatchInput() *string
```

- *Type:* *string

---

##### `HeaderMatchInput`<sup>Optional</sup> <a name="HeaderMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatchInput"></a>

```go
func HeaderMatchInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreCaseInput`<sup>Optional</sup> <a name="IgnoreCaseInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCaseInput"></a>

```go
func IgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `PathTemplateMatchInput`<sup>Optional</sup> <a name="PathTemplateMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatchInput"></a>

```go
func PathTemplateMatchInput() *string
```

- *Type:* *string

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatchInput"></a>

```go
func PrefixMatchInput() *string
```

- *Type:* *string

---

##### `QueryParameterMatchInput`<sup>Optional</sup> <a name="QueryParameterMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatchInput"></a>

```go
func QueryParameterMatchInput() interface{}
```

- *Type:* interface{}

---

##### `FullPathMatch`<sup>Required</sup> <a name="FullPathMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatch"></a>

```go
func FullPathMatch() *string
```

- *Type:* *string

---

##### `IgnoreCase`<sup>Required</sup> <a name="IgnoreCase" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCase"></a>

```go
func IgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `PathTemplateMatch`<sup>Required</sup> <a name="PathTemplateMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatch"></a>

```go
func PathTemplateMatch() *string
```

- *Type:* *string

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatch"></a>

```go
func PrefixMatch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get"></a>

```go
func Get(index *f64) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetPresentMatch">ResetPresentMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetPresentMatch` <a name="ResetPresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetPresentMatch"></a>

```go
func ResetPresentMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatchInput">ExactMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatchInput">PresentMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatch">ExactMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatch">PresentMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatchInput"></a>

```go
func ExactMatchInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PresentMatchInput`<sup>Optional</sup> <a name="PresentMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatchInput"></a>

```go
func PresentMatchInput() interface{}
```

- *Type:* interface{}

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatch"></a>

```go
func ExactMatch() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PresentMatch`<sup>Required</sup> <a name="PresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatch"></a>

```go
func PresentMatch() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule">PutMatchRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction">PutRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect">PutUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteAction">ResetRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetUrlRedirect">ResetUrlRedirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction"></a>

```go
func PutHeaderAction(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---

##### `PutMatchRule` <a name="PutMatchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule"></a>

```go
func PutMatchRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRouteAction` <a name="PutRouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction"></a>

```go
func PutRouteAction(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---

##### `PutUrlRedirect` <a name="PutUrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect"></a>

```go
func PutUrlRedirect(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetHeaderAction"></a>

```go
func ResetHeaderAction()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetRouteAction` <a name="ResetRouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteAction"></a>

```go
func ResetRouteAction()
```

##### `ResetUrlRedirect` <a name="ResetUrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetUrlRedirect"></a>

```go
func ResetUrlRedirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRule">MatchRule</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeAction">RouteAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirect">UrlRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRuleInput">MatchRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeActionInput">RouteActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirectInput">UrlRedirectInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerAction"></a>

```go
func HeaderAction() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference</a>

---

##### `MatchRule`<sup>Required</sup> <a name="MatchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRule"></a>

```go
func MatchRule() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList</a>

---

##### `RouteAction`<sup>Required</sup> <a name="RouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeAction"></a>

```go
func RouteAction() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference</a>

---

##### `UrlRedirect`<sup>Required</sup> <a name="UrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirect"></a>

```go
func UrlRedirect() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerActionInput"></a>

```go
func HeaderActionInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---

##### `MatchRuleInput`<sup>Optional</sup> <a name="MatchRuleInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRuleInput"></a>

```go
func MatchRuleInput() interface{}
```

- *Type:* interface{}

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `RouteActionInput`<sup>Optional</sup> <a name="RouteActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeActionInput"></a>

```go
func RouteActionInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---

##### `UrlRedirectInput`<sup>Optional</sup> <a name="UrlRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirectInput"></a>

```go
func UrlRedirectInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetCopiedParameters">ResetCopiedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetKeyset">ResetKeyset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenQueryParameter">ResetTokenQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopiedParameters` <a name="ResetCopiedParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetCopiedParameters"></a>

```go
func ResetCopiedParameters()
```

##### `ResetKeyset` <a name="ResetKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetKeyset"></a>

```go
func ResetKeyset()
```

##### `ResetTokenQueryParameter` <a name="ResetTokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenQueryParameter"></a>

```go
func ResetTokenQueryParameter()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParametersInput">CopiedParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keysetInput">KeysetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameterInput">TokenQueryParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParameters">CopiedParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keyset">Keyset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameter">TokenQueryParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CopiedParametersInput`<sup>Optional</sup> <a name="CopiedParametersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParametersInput"></a>

```go
func CopiedParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeysetInput`<sup>Optional</sup> <a name="KeysetInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keysetInput"></a>

```go
func KeysetInput() *string
```

- *Type:* *string

---

##### `TokenQueryParameterInput`<sup>Optional</sup> <a name="TokenQueryParameterInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameterInput"></a>

```go
func TokenQueryParameterInput() *string
```

- *Type:* *string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `CopiedParameters`<sup>Required</sup> <a name="CopiedParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParameters"></a>

```go
func CopiedParameters() *[]*string
```

- *Type:* *[]*string

---

##### `Keyset`<sup>Required</sup> <a name="Keyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keyset"></a>

```go
func Keyset() *string
```

- *Type:* *string

---

##### `TokenQueryParameter`<sup>Required</sup> <a name="TokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameter"></a>

```go
func TokenQueryParameter() *string
```

- *Type:* *string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtl"></a>

```go
func TokenTtl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludedQueryParameters">ResetExcludedQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeHost">ResetExcludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeQueryString">ResetExcludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedCookieNames">ResetIncludedCookieNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedHeaderNames">ResetIncludedHeaderNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedQueryParameters">ResetIncludedQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">ResetIncludeProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedQueryParameters` <a name="ResetExcludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludedQueryParameters"></a>

```go
func ResetExcludedQueryParameters()
```

##### `ResetExcludeHost` <a name="ResetExcludeHost" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeHost"></a>

```go
func ResetExcludeHost()
```

##### `ResetExcludeQueryString` <a name="ResetExcludeQueryString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeQueryString"></a>

```go
func ResetExcludeQueryString()
```

##### `ResetIncludedCookieNames` <a name="ResetIncludedCookieNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedCookieNames"></a>

```go
func ResetIncludedCookieNames()
```

##### `ResetIncludedHeaderNames` <a name="ResetIncludedHeaderNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedHeaderNames"></a>

```go
func ResetIncludedHeaderNames()
```

##### `ResetIncludedQueryParameters` <a name="ResetIncludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedQueryParameters"></a>

```go
func ResetIncludedQueryParameters()
```

##### `ResetIncludeProtocol` <a name="ResetIncludeProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```go
func ResetIncludeProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParametersInput">ExcludedQueryParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHostInput">ExcludeHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryStringInput">ExcludeQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNamesInput">IncludedCookieNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNamesInput">IncludedHeaderNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParametersInput">IncludedQueryParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">IncludeProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParameters">ExcludedQueryParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHost">ExcludeHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryString">ExcludeQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNames">IncludedCookieNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNames">IncludedHeaderNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParameters">IncludedQueryParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedQueryParametersInput`<sup>Optional</sup> <a name="ExcludedQueryParametersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParametersInput"></a>

```go
func ExcludedQueryParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeHostInput`<sup>Optional</sup> <a name="ExcludeHostInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHostInput"></a>

```go
func ExcludeHostInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeQueryStringInput`<sup>Optional</sup> <a name="ExcludeQueryStringInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryStringInput"></a>

```go
func ExcludeQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `IncludedCookieNamesInput`<sup>Optional</sup> <a name="IncludedCookieNamesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNamesInput"></a>

```go
func IncludedCookieNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedHeaderNamesInput`<sup>Optional</sup> <a name="IncludedHeaderNamesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNamesInput"></a>

```go
func IncludedHeaderNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedQueryParametersInput`<sup>Optional</sup> <a name="IncludedQueryParametersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParametersInput"></a>

```go
func IncludedQueryParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocolInput`<sup>Optional</sup> <a name="IncludeProtocolInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```go
func IncludeProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedQueryParameters`<sup>Required</sup> <a name="ExcludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParameters"></a>

```go
func ExcludedQueryParameters() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeHost`<sup>Required</sup> <a name="ExcludeHost" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHost"></a>

```go
func ExcludeHost() interface{}
```

- *Type:* interface{}

---

##### `ExcludeQueryString`<sup>Required</sup> <a name="ExcludeQueryString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryString"></a>

```go
func ExcludeQueryString() interface{}
```

- *Type:* interface{}

---

##### `IncludedCookieNames`<sup>Required</sup> <a name="IncludedCookieNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNames"></a>

```go
func IncludedCookieNames() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedHeaderNames`<sup>Required</sup> <a name="IncludedHeaderNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNames"></a>

```go
func IncludedHeaderNames() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedQueryParameters`<sup>Required</sup> <a name="IncludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParameters"></a>

```go
func IncludedQueryParameters() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```go
func IncludeProtocol() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures">PutAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy">PutCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions">PutSignedTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetAddSignatures">ResetAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheKeyPolicy">ResetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheMode">ResetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetClientTtl">ResetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCaching">ResetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCachingPolicy">ResetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestKeyset">ResetSignedRequestKeyset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMaximumExpirationTtl">ResetSignedRequestMaximumExpirationTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMode">ResetSignedRequestMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedTokenOptions">ResetSignedTokenOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddSignatures` <a name="PutAddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures"></a>

```go
func PutAddSignatures(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---

##### `PutCacheKeyPolicy` <a name="PutCacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```go
func PutCacheKeyPolicy(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---

##### `PutSignedTokenOptions` <a name="PutSignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions"></a>

```go
func PutSignedTokenOptions(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---

##### `ResetAddSignatures` <a name="ResetAddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetAddSignatures"></a>

```go
func ResetAddSignatures()
```

##### `ResetCacheKeyPolicy` <a name="ResetCacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```go
func ResetCacheKeyPolicy()
```

##### `ResetCacheMode` <a name="ResetCacheMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheMode"></a>

```go
func ResetCacheMode()
```

##### `ResetClientTtl` <a name="ResetClientTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetClientTtl"></a>

```go
func ResetClientTtl()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNegativeCaching` <a name="ResetNegativeCaching" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCaching"></a>

```go
func ResetNegativeCaching()
```

##### `ResetNegativeCachingPolicy` <a name="ResetNegativeCachingPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```go
func ResetNegativeCachingPolicy()
```

##### `ResetSignedRequestKeyset` <a name="ResetSignedRequestKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestKeyset"></a>

```go
func ResetSignedRequestKeyset()
```

##### `ResetSignedRequestMaximumExpirationTtl` <a name="ResetSignedRequestMaximumExpirationTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMaximumExpirationTtl"></a>

```go
func ResetSignedRequestMaximumExpirationTtl()
```

##### `ResetSignedRequestMode` <a name="ResetSignedRequestMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMode"></a>

```go
func ResetSignedRequestMode()
```

##### `ResetSignedTokenOptions` <a name="ResetSignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedTokenOptions"></a>

```go
func ResetSignedTokenOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignatures">AddSignatures</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptions">SignedTokenOptions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignaturesInput">AddSignaturesInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicyInput">CacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheModeInput">CacheModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtlInput">ClientTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingInput">NegativeCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicyInput">NegativeCachingPolicyInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeysetInput">SignedRequestKeysetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtlInput">SignedRequestMaximumExpirationTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestModeInput">SignedRequestModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptionsInput">SignedTokenOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeyset">SignedRequestKeyset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtl">SignedRequestMaximumExpirationTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMode">SignedRequestMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddSignatures`<sup>Required</sup> <a name="AddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignatures"></a>

```go
func AddSignatures() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference</a>

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```go
func CacheKeyPolicy() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `SignedTokenOptions`<sup>Required</sup> <a name="SignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptions"></a>

```go
func SignedTokenOptions() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference</a>

---

##### `AddSignaturesInput`<sup>Optional</sup> <a name="AddSignaturesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignaturesInput"></a>

```go
func AddSignaturesInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---

##### `CacheKeyPolicyInput`<sup>Optional</sup> <a name="CacheKeyPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```go
func CacheKeyPolicyInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---

##### `CacheModeInput`<sup>Optional</sup> <a name="CacheModeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheModeInput"></a>

```go
func CacheModeInput() *string
```

- *Type:* *string

---

##### `ClientTtlInput`<sup>Optional</sup> <a name="ClientTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtlInput"></a>

```go
func ClientTtlInput() *string
```

- *Type:* *string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *string
```

- *Type:* *string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *string
```

- *Type:* *string

---

##### `NegativeCachingInput`<sup>Optional</sup> <a name="NegativeCachingInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingInput"></a>

```go
func NegativeCachingInput() interface{}
```

- *Type:* interface{}

---

##### `NegativeCachingPolicyInput`<sup>Optional</sup> <a name="NegativeCachingPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```go
func NegativeCachingPolicyInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SignedRequestKeysetInput`<sup>Optional</sup> <a name="SignedRequestKeysetInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeysetInput"></a>

```go
func SignedRequestKeysetInput() *string
```

- *Type:* *string

---

##### `SignedRequestMaximumExpirationTtlInput`<sup>Optional</sup> <a name="SignedRequestMaximumExpirationTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtlInput"></a>

```go
func SignedRequestMaximumExpirationTtlInput() *string
```

- *Type:* *string

---

##### `SignedRequestModeInput`<sup>Optional</sup> <a name="SignedRequestModeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestModeInput"></a>

```go
func SignedRequestModeInput() *string
```

- *Type:* *string

---

##### `SignedTokenOptionsInput`<sup>Optional</sup> <a name="SignedTokenOptionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptionsInput"></a>

```go
func SignedTokenOptionsInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheMode"></a>

```go
func CacheMode() *string
```

- *Type:* *string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtl"></a>

```go
func ClientTtl() *string
```

- *Type:* *string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *string
```

- *Type:* *string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *string
```

- *Type:* *string

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCaching"></a>

```go
func NegativeCaching() interface{}
```

- *Type:* interface{}

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```go
func NegativeCachingPolicy() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SignedRequestKeyset`<sup>Required</sup> <a name="SignedRequestKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeyset"></a>

```go
func SignedRequestKeyset() *string
```

- *Type:* *string

---

##### `SignedRequestMaximumExpirationTtl`<sup>Required</sup> <a name="SignedRequestMaximumExpirationTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtl"></a>

```go
func SignedRequestMaximumExpirationTtl() *string
```

- *Type:* *string

---

##### `SignedRequestMode`<sup>Required</sup> <a name="SignedRequestMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMode"></a>

```go
func SignedRequestMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetAllowedSignatureAlgorithms">ResetAllowedSignatureAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetTokenQueryParameter">ResetTokenQueryParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedSignatureAlgorithms` <a name="ResetAllowedSignatureAlgorithms" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetAllowedSignatureAlgorithms"></a>

```go
func ResetAllowedSignatureAlgorithms()
```

##### `ResetTokenQueryParameter` <a name="ResetTokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetTokenQueryParameter"></a>

```go
func ResetTokenQueryParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithmsInput">AllowedSignatureAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameterInput">TokenQueryParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithms">AllowedSignatureAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameter">TokenQueryParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedSignatureAlgorithmsInput`<sup>Optional</sup> <a name="AllowedSignatureAlgorithmsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithmsInput"></a>

```go
func AllowedSignatureAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenQueryParameterInput`<sup>Optional</sup> <a name="TokenQueryParameterInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameterInput"></a>

```go
func TokenQueryParameterInput() *string
```

- *Type:* *string

---

##### `AllowedSignatureAlgorithms`<sup>Required</sup> <a name="AllowedSignatureAlgorithms" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithms"></a>

```go
func AllowedSignatureAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `TokenQueryParameter`<sup>Required</sup> <a name="TokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameter"></a>

```go
func TokenQueryParameter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowHeaders">ResetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowMethods">ResetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowOrigins">ResetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```go
func ResetAllowCredentials()
```

##### `ResetAllowHeaders` <a name="ResetAllowHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```go
func ResetAllowHeaders()
```

##### `ResetAllowMethods` <a name="ResetAllowMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowMethods"></a>

```go
func ResetAllowMethods()
```

##### `ResetAllowOrigins` <a name="ResetAllowOrigins" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```go
func ResetAllowOrigins()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```go
func ResetExposeHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeadersInput">AllowHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethodsInput">AllowMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOriginsInput">AllowOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethods">AllowMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAge">MaxAge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```go
func AllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowHeadersInput`<sup>Optional</sup> <a name="AllowHeadersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```go
func AllowHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethodsInput`<sup>Optional</sup> <a name="AllowMethodsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```go
func AllowMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOriginsInput`<sup>Optional</sup> <a name="AllowOriginsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```go
func AllowOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```go
func ExposeHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *string
```

- *Type:* *string

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentials"></a>

```go
func AllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeaders"></a>

```go
func AllowHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethods"></a>

```go
func AllowMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOrigins"></a>

```go
func AllowOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```go
func ExposeHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAge"></a>

```go
func MaxAge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy">PutCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy">PutCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCdnPolicy">ResetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCorsPolicy">ResetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCdnPolicy` <a name="PutCdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy"></a>

```go
func PutCdnPolicy(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---

##### `PutCorsPolicy` <a name="PutCorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy"></a>

```go
func PutCorsPolicy(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite"></a>

```go
func PutUrlRewrite(value NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---

##### `ResetCdnPolicy` <a name="ResetCdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCdnPolicy"></a>

```go
func ResetCdnPolicy()
```

##### `ResetCorsPolicy` <a name="ResetCorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCorsPolicy"></a>

```go
func ResetCorsPolicy()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetUrlRewrite"></a>

```go
func ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicy">CorsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicyInput">CdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicyInput">CorsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicy"></a>

```go
func CdnPolicy() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference</a>

---

##### `CorsPolicy`<sup>Required</sup> <a name="CorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicy"></a>

```go
func CorsPolicy() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewrite"></a>

```go
func UrlRewrite() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference</a>

---

##### `CdnPolicyInput`<sup>Optional</sup> <a name="CdnPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicyInput"></a>

```go
func CdnPolicyInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---

##### `CorsPolicyInput`<sup>Optional</sup> <a name="CorsPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicyInput"></a>

```go
func CorsPolicyInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewriteInput"></a>

```go
func UrlRewriteInput() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetHostRewrite">ResetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathPrefixRewrite">ResetPathPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathTemplateRewrite">ResetPathTemplateRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRewrite` <a name="ResetHostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetHostRewrite"></a>

```go
func ResetHostRewrite()
```

##### `ResetPathPrefixRewrite` <a name="ResetPathPrefixRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```go
func ResetPathPrefixRewrite()
```

##### `ResetPathTemplateRewrite` <a name="ResetPathTemplateRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathTemplateRewrite"></a>

```go
func ResetPathTemplateRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewriteInput">HostRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">PathPrefixRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewriteInput">PathTemplateRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewrite">HostRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewrite">PathPrefixRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewrite">PathTemplateRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostRewriteInput`<sup>Optional</sup> <a name="HostRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```go
func HostRewriteInput() *string
```

- *Type:* *string

---

##### `PathPrefixRewriteInput`<sup>Optional</sup> <a name="PathPrefixRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```go
func PathPrefixRewriteInput() *string
```

- *Type:* *string

---

##### `PathTemplateRewriteInput`<sup>Optional</sup> <a name="PathTemplateRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewriteInput"></a>

```go
func PathTemplateRewriteInput() *string
```

- *Type:* *string

---

##### `HostRewrite`<sup>Required</sup> <a name="HostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewrite"></a>

```go
func HostRewrite() *string
```

- *Type:* *string

---

##### `PathPrefixRewrite`<sup>Required</sup> <a name="PathPrefixRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```go
func PathPrefixRewrite() *string
```

- *Type:* *string

---

##### `PathTemplateRewrite`<sup>Required</sup> <a name="PathTemplateRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewrite"></a>

```go
func PathTemplateRewrite() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHostRedirect">ResetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHttpsRedirect">ResetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPathRedirect">ResetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPrefixRedirect">ResetPrefixRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetRedirectResponseCode">ResetRedirectResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetStripQuery">ResetStripQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRedirect` <a name="ResetHostRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHostRedirect"></a>

```go
func ResetHostRedirect()
```

##### `ResetHttpsRedirect` <a name="ResetHttpsRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHttpsRedirect"></a>

```go
func ResetHttpsRedirect()
```

##### `ResetPathRedirect` <a name="ResetPathRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPathRedirect"></a>

```go
func ResetPathRedirect()
```

##### `ResetPrefixRedirect` <a name="ResetPrefixRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPrefixRedirect"></a>

```go
func ResetPrefixRedirect()
```

##### `ResetRedirectResponseCode` <a name="ResetRedirectResponseCode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetRedirectResponseCode"></a>

```go
func ResetRedirectResponseCode()
```

##### `ResetStripQuery` <a name="ResetStripQuery" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetStripQuery"></a>

```go
func ResetStripQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirectInput">HostRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirectInput">HttpsRedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirectInput">PathRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirectInput">PrefixRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCodeInput">RedirectResponseCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQueryInput">StripQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirect">HostRedirect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirect">HttpsRedirect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirect">PathRedirect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirect">PrefixRedirect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQuery">StripQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostRedirectInput`<sup>Optional</sup> <a name="HostRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirectInput"></a>

```go
func HostRedirectInput() *string
```

- *Type:* *string

---

##### `HttpsRedirectInput`<sup>Optional</sup> <a name="HttpsRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirectInput"></a>

```go
func HttpsRedirectInput() interface{}
```

- *Type:* interface{}

---

##### `PathRedirectInput`<sup>Optional</sup> <a name="PathRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirectInput"></a>

```go
func PathRedirectInput() *string
```

- *Type:* *string

---

##### `PrefixRedirectInput`<sup>Optional</sup> <a name="PrefixRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirectInput"></a>

```go
func PrefixRedirectInput() *string
```

- *Type:* *string

---

##### `RedirectResponseCodeInput`<sup>Optional</sup> <a name="RedirectResponseCodeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCodeInput"></a>

```go
func RedirectResponseCodeInput() *string
```

- *Type:* *string

---

##### `StripQueryInput`<sup>Optional</sup> <a name="StripQueryInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQueryInput"></a>

```go
func StripQueryInput() interface{}
```

- *Type:* interface{}

---

##### `HostRedirect`<sup>Required</sup> <a name="HostRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirect"></a>

```go
func HostRedirect() *string
```

- *Type:* *string

---

##### `HttpsRedirect`<sup>Required</sup> <a name="HttpsRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirect"></a>

```go
func HttpsRedirect() interface{}
```

- *Type:* interface{}

---

##### `PathRedirect`<sup>Required</sup> <a name="PathRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirect"></a>

```go
func PathRedirect() *string
```

- *Type:* *string

---

##### `PrefixRedirect`<sup>Required</sup> <a name="PrefixRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirect"></a>

```go
func PrefixRedirect() *string
```

- *Type:* *string

---

##### `RedirectResponseCode`<sup>Required</sup> <a name="RedirectResponseCode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCode"></a>

```go
func RedirectResponseCode() *string
```

- *Type:* *string

---

##### `StripQuery`<sup>Required</sup> <a name="StripQuery" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQuery"></a>

```go
func StripQuery() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---


### NetworkServicesEdgeCacheServiceTimeoutsOutputReference <a name="NetworkServicesEdgeCacheServiceTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkservicesedgecacheservice"

networkservicesedgecacheservice.NewNetworkServicesEdgeCacheServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesEdgeCacheServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



